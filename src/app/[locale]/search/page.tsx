import type { Metadata } from 'next';
import SearchResultsClient from './SearchResultsClient';
import { searchSite } from '@/lib/search';
import { Locale } from '@/lib/translations';

interface SearchPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ params, searchParams }: SearchPageProps): Promise<Metadata> {
  const { locale } = await params;
  const { q } = await searchParams;
  const lang: Locale = locale === 'ar' ? 'ar' : 'en';
  const query = q?.trim() ?? '';

  if (!query) {
    return {
      title: lang === 'ar' ? 'بحث | المحي للخدمات القانونية' : 'Search | Almahy Legal Services',
      description:
        lang === 'ar'
          ? 'ابحث في خدماتنا القانونية ومقالاتنا وصفحاتنا في دبي والإمارات.'
          : 'Search Almahy Legal Services for legal services, corporate solutions, blogs, and expert guidance in Dubai and the UAE.',
    };
  }

  return {
    title:
      lang === 'ar'
        ? `نتائج البحث عن "${query}" | المحي للخدمات القانونية`
        : `Search results for "${query}" | Almahy Legal Services`,
    description:
      lang === 'ar'
        ? `نتائج البحث عن ${query} في خدمات المحي القانونية والمقالات والصفحات.`
        : `Find legal services, articles, and pages related to ${query} at Almahy Legal Services in Dubai.`,
    robots: { index: true, follow: true },
  };
}

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
  const { locale } = await params;
  const { q } = await searchParams;
  const lang: Locale = locale === 'ar' ? 'ar' : 'en';
  const query = q?.trim() ?? '';
  const results = query ? await searchSite(query, lang, 30) : [];

  return <SearchResultsClient locale={lang} initialQuery={query} initialResults={results} />;
}
