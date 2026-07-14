import { Locale } from '@/lib/translations';
import { getLegalAreas, getLegalServicesCopy } from '@/lib/legal-services-content';
import Image from 'next/image';

const palette = {
  primary: '#DE3B34',
  secondary: '#FFB6B6',
  accent: '#CECDCB',
  dark: '#160A0A',
};

type NewsItem = {
  title: string;
  image: string;
  url?: string;
};

const defaultImage = 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=700&fit=crop';

function getSafeImageUrl(imageUrl?: string): string {
  if (!imageUrl) return defaultImage;
  if (imageUrl.startsWith('https://images.unsplash.com/')) return imageUrl;
  return defaultImage;
}

async function fetchLatestLegalNews(isArabic: boolean, fallbackItems: NewsItem[]): Promise<NewsItem[]> {
  const newsApiKey = process.env.NEWS_API_KEY;
  if (!newsApiKey) return fallbackItems;

  const query = isArabic
    ? 'القانون الإماراتي OR التحكيم التجاري OR النزاعات التجارية'
    : 'UAE legal news OR commercial arbitration OR corporate disputes';

  const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=${isArabic ? 'ar' : 'en'}&sortBy=publishedAt&pageSize=10`;

  try {
    const response = await fetch(apiUrl, {
      headers: { 'X-Api-Key': newsApiKey },
      next: { revalidate: 21600 },
    });

    if (!response.ok) return fallbackItems;

    const payload = (await response.json()) as {
      articles?: Array<{ title?: string; urlToImage?: string; url?: string }>;
    };

    const parsed = (payload.articles ?? [])
      .filter((article) => article.title && article.urlToImage)
      .slice(0, 10)
      .map((article) => ({
        title: article.title as string,
        image: getSafeImageUrl(article.urlToImage),
        url: article.url,
      }));

    return parsed.length ? parsed : fallbackItems;
  } catch {
    return fallbackItems;
  }
}

export default async function LegalServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === 'en' || locale === 'ar';
  const lang = isValidLoc ? (locale as Locale) : 'en';
  const isArabic = lang === 'ar';
  const copy = getLegalServicesCopy(lang);
  const legalAreas = getLegalAreas(lang);

  const fallbackNews: NewsItem[] = isArabic
    ? [
        {
          title: 'تحديثات قانونية في الإمارات حول التحكيم التجاري وتسوية المنازعات',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=700&fit=crop',
          url: 'https://u.ae/ar-ae/information-and-services/justice-safety-and-the-law',
        },
        {
          title: 'أحدث المستجدات التنظيمية في الحوكمة والامتثال للشركات',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=700&fit=crop',
          url: 'https://u.ae/ar-ae/information-and-services/business',
        },
        {
          title: 'تطورات في قضايا العمل والأسرة والعقود المدنية في دولة الإمارات',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=700&fit=crop',
          url: 'https://u.ae/ar-ae/information-and-services/justice-safety-and-the-law',
        },
        {
          title: 'تحديثات ضريبية وتنظيمية للشركات في الإمارات',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=700&fit=crop',
          url: 'https://u.ae/ar-ae/information-and-services/business/taxation',
        },
        {
          title: 'قرارات قضائية جديدة وملاحظات قانونية مهمة للمنشآت',
          image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=700&fit=crop',
          url: 'https://u.ae/ar-ae/information-and-services/justice-safety-and-the-law',
        },
      ]
    : [
        {
          title: 'UAE legal updates on commercial arbitration and dispute resolution',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=700&fit=crop',
          url: 'https://u.ae/en/information-and-services/justice-safety-and-the-law',
        },
        {
          title: 'Recent regulatory developments in corporate compliance and governance',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=700&fit=crop',
          url: 'https://u.ae/en/information-and-services/business',
        },
        {
          title: 'Latest UAE insights on labor, family, and civil legal matters',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=700&fit=crop',
          url: 'https://u.ae/en/information-and-services/justice-safety-and-the-law',
        },
        {
          title: 'Tax and VAT compliance updates for UAE businesses',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=700&fit=crop',
          url: 'https://u.ae/en/information-and-services/business/taxation',
        },
        {
          title: 'Recent UAE court decisions and practical legal guidance',
          image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=700&fit=crop',
          url: 'https://u.ae/en/information-and-services/justice-safety-and-the-law',
        },
      ];

  const legalNews = await fetchLatestLegalNews(isArabic, fallbackNews);
  const heroImage = legalAreas[0]?.image ?? defaultImage;

  return (
    <div
      className="min-h-screen w-full bg-slate-950 text-white"
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={lang}
    >
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#160A0A]" />
        <div
          className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: palette.accent }}
        />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className={isArabic ? 'text-right' : 'text-left'}>
              <div className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium mb-6">
                {copy.badge}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-5 leading-tight">
                {copy.title}
              </h1>
              <p className="max-w-3xl text-base font-bold md:text-lg text-slate-300 leading-relaxed">
                {copy.subtitle}
              </p>
              <p className="max-w-2xl text-base md:text-lg text-slate-200 leading-relaxed mt-3">
                {copy.description}
              </p>
              <div className={`mt-7 flex flex-wrap gap-3 ${isArabic ? 'justify-end' : 'justify-start'}`}>
                <a
                  href="https://wa.me/971504096028?text=Hello%2C%20I%20need%20legal%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-black transition-transform hover:scale-105"
                  style={{ backgroundColor: palette.secondary }}
                >
                  {copy.bookConsultation}
                </a>
                <a
                  href="#legal-news"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  {copy.latestNews}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image src={heroImage} alt={copy.badge} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className={`absolute bottom-4 left-4 right-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm uppercase tracking-wider text-slate-200 mb-1">{copy.expertiseLabel}</p>
                  <p className="text-xl font-semibold" style={{ color: palette.primary }}>
                    {copy.expertiseTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16 space-y-6">
        {legalAreas.map((area, index) => (
          <article
            key={area.id}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] overflow-hidden"
          >
            <div className={`grid md:grid-cols-5 ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative md:col-span-2 h-56 md:h-full min-h-56">
                <Image src={getSafeImageUrl(area.image)} alt={area.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 to-transparent" />
              </div>

              <div className={`md:col-span-3 p-6 md:p-8 ${isArabic ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center gap-3 mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm text-slate-200">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-semibold" style={{ color: palette.primary }}>
                    {area.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {area.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-slate-200 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="legal-news" className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#160A0A] p-6 md:p-8">
          <div className={`mb-7 flex flex-wrap items-end justify-between gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <div className={isArabic ? 'text-right' : 'text-left'}>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: palette.primary }}>
                {copy.newsTitle}
              </h2>
              <p className="text-slate-300">{copy.newsSub}</p>
            </div>
            <span className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200">
              {copy.autoUpdated}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalNews.map((news, index) => (
              <article
                key={`${news.title}-${index}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition-colors"
              >
                <div className="relative h-44 w-full">
                  <Image src={getSafeImageUrl(news.image)} alt={news.title} fill className="object-cover" />
                </div>

                <div className={`p-5 ${isArabic ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-lg font-semibold leading-snug text-slate-100 mb-4 line-clamp-3">
                    {news.title}
                  </h3>
                  {news.url ? (
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold"
                      style={{ color: palette.secondary }}
                    >
                      {copy.readMore}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
