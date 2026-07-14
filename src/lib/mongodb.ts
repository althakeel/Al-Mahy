import dns from 'node:dns';
import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || 'almahy';

type GlobalMongoCache = typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const globalMongo = globalThis as GlobalMongoCache;

try {
  dns.setDefaultResultOrder('ipv4first');
} catch {
  // Older Node runtimes may not support this API.
}

const clientOptions: MongoClientOptions = {
  serverSelectionTimeoutMS: 20000,
  connectTimeoutMS: 20000,
  family: 4,
};

const ensureDnsServers = () => {
  const current = dns.getServers();
  const preferred = ['8.8.8.8', '1.1.1.1', '213.42.20.20'];
  const next = [...current];

  for (const server of preferred) {
    if (!next.includes(server)) {
      next.push(server);
    }
  }

  if (next.length !== current.length) {
    dns.setServers(next);
  }
};

const isSrvLookupError = (error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  return /querySrv|ECONNREFUSED|ENOTFOUND|EREFUSED/i.test(message);
};

const parseSrvConnectionParts = (connectionUri: string) => {
  const match = connectionUri.match(
    /^mongodb\+srv:\/\/(?:([^:@]+):([^@]+)@)?([^/?]+)(?:\/([^?]*))?(?:\?(.*))?$/i
  );

  if (!match) {
    return null;
  }

  const [, username, password, host, database = '', query = ''] = match;
  return { username, password, host, database, query };
};

const resolveWithPublicDns = async <T>(
  run: (resolver: dns.Resolver) => Promise<T>
): Promise<T> => {
  const resolver = new dns.Resolver();
  resolver.setServers(['8.8.8.8', '1.1.1.1', '213.42.20.20']);
  return run(resolver);
};

const toStandardMongoUri = async (connectionUri: string): Promise<string> => {
  const parts = parseSrvConnectionParts(connectionUri);
  if (!parts) {
    throw new Error('Unable to parse mongodb+srv connection string.');
  }

  ensureDnsServers();

  const srvRecords = await resolveWithPublicDns(
    (resolver) =>
      new Promise<dns.SrvRecord[]>((resolve, reject) => {
        resolver.resolveSrv(`_mongodb._tcp.${parts.host}`, (error, addresses) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(addresses);
        });
      })
  );

  if (!srvRecords.length) {
    throw new Error(`No SRV records found for ${parts.host}`);
  }

  let replicaSetQuery = parts.query;
  try {
    const txtRecords = await resolveWithPublicDns(
      (resolver) =>
        new Promise<string[][]>((resolve, reject) => {
          resolver.resolveTxt(parts.host, (error, records) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(records);
          });
        })
    );
    const txt = txtRecords.flat().join('');
    if (txt && !replicaSetQuery.includes('replicaSet=')) {
      replicaSetQuery = replicaSetQuery ? `${replicaSetQuery}&${txt}` : txt;
    }
  } catch {
    // TXT lookup is optional; Atlas often still connects with host list + tls.
  }

  const auth =
    parts.username && parts.password
      ? `${encodeURIComponent(decodeURIComponent(parts.username))}:${encodeURIComponent(decodeURIComponent(parts.password))}@`
      : '';
  const hosts = srvRecords
    .map((record) => `${record.name}:${record.port || 27017}`)
    .join(',');
  const database = parts.database || '';
  const params = new URLSearchParams(replicaSetQuery);
  if (!params.has('tls')) {
    params.set('tls', 'true');
  }
  if (!params.has('authSource')) {
    params.set('authSource', 'admin');
  }

  return `mongodb://${auth}${hosts}/${database}?${params.toString()}`;
};

const connectWithFallback = async (): Promise<MongoClient> => {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable.');
  }

  ensureDnsServers();

  try {
    return await new MongoClient(uri, clientOptions).connect();
  } catch (error) {
    if (!uri.startsWith('mongodb+srv://') || !isSrvLookupError(error)) {
      throw error;
    }

    console.warn('mongodb+srv DNS lookup failed; retrying with standard host list.');
    const standardUri = await toStandardMongoUri(uri);
    return new MongoClient(standardUri, clientOptions).connect();
  }
};

const getClientPromise = () => {
  if (!uri) {
    return undefined;
  }

  if (!globalMongo._mongoClientPromise) {
    globalMongo._mongoClientPromise = connectWithFallback().catch((error) => {
      globalMongo._mongoClientPromise = undefined;
      throw error;
    });
  }

  return globalMongo._mongoClientPromise;
};

export const getMongoDb = async () => {
  const clientPromise = getClientPromise();
  if (!clientPromise) {
    throw new Error('Missing MONGODB_URI environment variable.');
  }

  const client = await clientPromise;
  return client.db(dbName);
};
