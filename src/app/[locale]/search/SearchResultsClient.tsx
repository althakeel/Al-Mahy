'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import SearchResultItem from '@/components/SearchResultItem';
import SiteSearch from '@/components/SiteSearch';
import { POPULAR_SEARCHES, SearchResult } from '@/lib/search-index';
import { Locale } from '@/lib/translations';

interface WebSource {
  title: string;
  url: string;
}

interface SearchResultsClientProps {
  locale: Locale;
  initialQuery: string;
  initialResults: SearchResult[];
}

const copy = {
  en: {
    title: 'Search',
    resultsFor: 'Results for',
    noQuery: 'Search legal services, ask a legal question, or find articles from our site and trusted external sources',
    noResults: 'No matching results found. See the AI legal guidance above, or try different keywords.',
    popular: 'Popular searches',
    type: { page: 'Page', service: 'Service', blog: 'Article', external: 'External' },
    aiTitle: 'AI Legal Guidance',
    aiLoading: 'Getting legal guidance for your question...',
    aiUnavailable: 'AI guidance is temporarily unavailable. Browse the results below or contact us for help.',
    relatedPages: 'From Almahy website',
    externalSources: 'From Google & the Web',
    webSources: 'Web sources used by AI',
    getConsultation: 'Get a Free Consultation',
  },
  ar: {
    title: 'بحث',
    resultsFor: 'نتائج البحث عن',
    noQuery: 'ابحث في خدماتنا، اطرح سؤالاً قانونياً، أو اعثر على مقالات من موقعنا ومصادر خارجية موثوقة',
    noResults: 'لم نعثر على نتائج مطابقة. راجع الإرشاد القانوني أعلاه، أو جرّب كلمات بحث أخرى.',
    popular: 'عمليات بحث شائعة',
    type: { page: 'صفحة', service: 'خدمة', blog: 'مقال', external: 'خارجي' },
    aiTitle: 'إرشاد قانوني بالذكاء الاصطناعي',
    aiLoading: 'جاري إعداد الإرشاد القانوني لسؤالك...',
    aiUnavailable: 'الإرشاد بالذكاء الاصطناعي غير متاح مؤقتًا. تصفح النتائج أدناه أو تواصل معنا.',
    relatedPages: 'من موقع المحي',
    externalSources: 'من Google والويب',
    webSources: 'مصادر الويب المستخدمة بالذكاء الاصطناعي',
    getConsultation: 'احصل على استشارة مجانية',
  },
};

export default function SearchResultsClient({
  locale,
  initialQuery,
  initialResults,
}: SearchResultsClientProps) {
  const router = useRouter();
  const t = copy[locale];
  const isRTL = locale === 'ar';
  const [results, setResults] = useState(initialResults);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [aiDisclaimer, setAiDisclaimer] = useState<string | null>(null);
  const [webSources, setWebSources] = useState<WebSource[]>([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiFailed, setAiFailed] = useState(false);

  const internalResults = useMemo(
    () => results.filter((r) => !r.isExternal && r.type !== 'external'),
    [results]
  );
  const externalResults = useMemo(
    () => results.filter((r) => r.isExternal || r.type === 'external'),
    [results]
  );

  useEffect(() => {
    setResults(initialResults);
  }, [initialResults]);

  useEffect(() => {
    if (!initialQuery.trim()) {
      setAiAnswer(null);
      setAiDisclaimer(null);
      setWebSources([]);
      setAiFailed(false);
      return;
    }

    const controller = new AbortController();

    const fetchAi = async () => {
      setAiLoading(true);
      setAiFailed(false);
      setAiAnswer(null);
      setAiDisclaimer(null);
      setWebSources([]);

      try {
        const response = await fetch('/api/search/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: initialQuery, locale }),
          signal: controller.signal,
        });
        const data = (await response.json()) as {
          success?: boolean;
          answer?: string;
          disclaimer?: string;
          webSources?: WebSource[];
        };

        if (data.success && data.answer) {
          setAiAnswer(data.answer);
          setAiDisclaimer(data.disclaimer ?? null);
          setWebSources(data.webSources ?? []);
        } else {
          setAiFailed(true);
        }
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setAiFailed(true);
        }
      } finally {
        setAiLoading(false);
      }
    };

    void fetchAi();
    return () => controller.abort();
  }, [initialQuery, locale]);

  const handlePopularClick = (term: string) => {
    router.push(`/${locale}/search?q=${encodeURIComponent(term)}`);
  };

  const getTypeLabel = (type: SearchResult['type']) =>
    t.type[type as keyof typeof t.type] ?? type;

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#160A0A] to-[#1f1212] pt-28 pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto w-full max-w-[1250px] px-4 md:px-8">
        <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
          {t.title}
        </h1>

        <div className="mb-8">
          <SiteSearch locale={locale} variant="page" />
        </div>

        {!initialQuery ? (
          <div>
            <p className="mb-4 text-white/70">{t.noQuery}</p>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#F0716B]">{t.popular}</p>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES[locale].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => handlePopularClick(term)}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-[#DE3B34]/40 hover:bg-white/10"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-6 text-white/70">
              {t.resultsFor} <span className="font-semibold text-white">&ldquo;{initialQuery}&rdquo;</span>
            </p>

            {(aiLoading || aiAnswer || aiFailed) ? (
              <div className="mb-8 rounded-2xl border border-[#DE3B34]/30 bg-gradient-to-br from-[#2A1414] to-[#1A0D0D] p-6 shadow-xl">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DE3B34]/20 text-[#F0716B]">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold text-white">{t.aiTitle}</h2>
                </div>

                {aiLoading ? (
                  <p className="text-sm text-white/60 animate-pulse">{t.aiLoading}</p>
                ) : aiAnswer ? (
                  <>
                    <div className="space-y-3 text-sm leading-relaxed text-white/85 whitespace-pre-line">
                      {aiAnswer}
                    </div>

                    {webSources.length > 0 ? (
                      <div className="mt-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#F0716B]">
                          {t.webSources}
                        </p>
                        <ul className="space-y-2">
                          {webSources.map((source) => (
                            <li key={source.url}>
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80 transition hover:border-[#DE3B34]/30 hover:text-white"
                              >
                                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#DE3B34]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>
                                  <span className="font-semibold text-white">{source.title}</span>
                                  <span className="mt-0.5 block truncate text-xs text-white/45">{source.url}</span>
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {aiDisclaimer ? (
                      <p className="mt-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-xs text-white/55">
                        {aiDisclaimer}
                      </p>
                    ) : null}
                    <Link
                      href={`/${locale}/contact`}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#DE3B34] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c73731]"
                    >
                      {t.getConsultation}
                    </Link>
                  </>
                ) : aiFailed ? (
                  <p className="text-sm text-white/60">{t.aiUnavailable}</p>
                ) : null}
              </div>
            ) : null}

            {internalResults.length > 0 ? (
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#F0716B]">
                  {t.relatedPages} ({internalResults.length})
                </h3>
                <ul className="space-y-3">
                  {internalResults.map((result) => (
                    <li key={result.id}>
                      <SearchResultItem
                        result={result}
                        locale={locale}
                        typeLabel={getTypeLabel(result.type)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {externalResults.length > 0 ? (
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#F0716B]">
                  {t.externalSources} ({externalResults.length})
                </h3>
                <ul className="space-y-3">
                  {externalResults.map((result) => (
                    <li key={result.id}>
                      <SearchResultItem
                        result={result}
                        locale={locale}
                        typeLabel={getTypeLabel(result.type)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {internalResults.length === 0 && externalResults.length === 0 && !aiLoading && !aiAnswer ? (
              <p className="text-white/60">{t.noResults}</p>
            ) : null}
          </div>
        )}
      </div>
    </main>
  );
}
