import { Locale } from '@/lib/translations';

const STORAGE_PREFIX = 'almahy-recent-searches';
const MAX_RECENT = 5;

function storageKey(locale: Locale) {
  return `${STORAGE_PREFIX}-${locale}`;
}

export function getRecentSearches(locale: Locale): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(storageKey(locale));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
  } catch {
    return [];
  }
}

export function addRecentSearch(locale: Locale, query: string): string[] {
  const trimmed = query.trim();
  if (!trimmed || typeof window === 'undefined') return getRecentSearches(locale);

  const existing = getRecentSearches(locale).filter(
    (item) => item.toLowerCase() !== trimmed.toLowerCase()
  );
  const updated = [trimmed, ...existing].slice(0, MAX_RECENT);

  try {
    localStorage.setItem(storageKey(locale), JSON.stringify(updated));
  } catch {
    // ignore quota errors
  }

  return updated;
}

export function clearRecentSearches(locale: Locale): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(storageKey(locale));
  } catch {
    // ignore
  }
}
