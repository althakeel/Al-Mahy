import { Locale } from '@/lib/translations';
import { getLegalAreas, getLegalServicesCopy } from '@/lib/legal-services-content';
import Image from 'next/image';
import Link from 'next/link';

const defaultImage = 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=700&fit=crop';

type NewsItem = {
  title: string;
  image: string;
  url?: string;
};

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
      .slice(0, 6)
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
      ];

  const legalNews = await fetchLatestLegalNews(isArabic, fallbackNews);
  const featured = legalAreas[0];
  const rest = legalAreas.slice(1);

  return (
    <div
      className={`min-h-screen bg-white text-[#160A0A] ${isArabic ? 'text-right' : 'text-left'}`}
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={lang}
    >
      {/* Compact brand hero */}
      <section className="border-b border-[#160A0A]/10 bg-[#160A0A] pt-28 text-white md:pt-32">
        <div className="mx-auto max-w-[1250px] px-4 pb-12 md:px-8 md:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                {copy.brand} · {copy.badge}
              </p>
              <h1
                className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {copy.title}
              </h1>
              <p className="mt-4 text-lg font-medium text-white/90">{copy.subtitle}</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                {copy.description}
              </p>
            </div>
            <div className={`flex flex-wrap gap-3 lg:col-span-4 lg:justify-end ${isArabic ? 'lg:justify-start' : ''}`}>
              <a
                href="https://wa.me/971504096028?text=Hello%2C%20I%20need%20legal%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[#DE3B34] bg-[#DE3B34] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-transparent"
              >
                {copy.bookConsultation}
              </a>
              <a
                href="#practice-areas"
                className="inline-flex items-center border border-white/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-[#160A0A]"
              >
                {copy.practiceAreasTitle}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick directory strip */}
      <section className="sticky top-0 z-20 border-b border-[#160A0A]/10 bg-[#F1EFF0]/95 backdrop-blur">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {legalAreas.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="shrink-0 border border-transparent px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#160A0A]/65 transition-colors hover:border-[#160A0A]/15 hover:bg-white hover:text-[#DE3B34]"
              >
                {area.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured arbitration block */}
      <section className="bg-[#F1EFF0]">
        <div className="mx-auto grid max-w-[1250px] lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <Image
              src={getSafeImageUrl(featured.image)}
              alt={featured.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
              {copy.expertiseLabel}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#160A0A] md:text-4xl">
              {copy.expertiseTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#160A0A]/75">
              {copy.expertiseDescription}
            </p>
            <div className="mt-8 space-y-3 border-t border-[#160A0A]/15 pt-6">
              {featured.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-[#160A0A]/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas — 2-column mosaic */}
      <section id="practice-areas" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <div className="mb-10 flex flex-col gap-3 border-b border-[#160A0A]/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
                {copy.badge}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#160A0A] md:text-4xl">
                {copy.practiceAreasTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#160A0A]/55">
              {isArabic
                ? `${legalAreas.length} مجالات ممارسة عبر التقاضي والاستشارات والامتثال في الإمارات.`
                : `${legalAreas.length} practice areas across litigation, advisory, and compliance in the UAE.`}
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
            {rest.map((area, index) => (
              <article key={area.id} id={area.id} className="group scroll-mt-24">
                <div className="relative mb-5 aspect-[16/9] overflow-hidden bg-[#160A0A]/5">
                  <Image
                    src={getSafeImageUrl(area.image)}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex gap-4">
                  <span className="pt-1 text-xs font-semibold tracking-[0.14em] text-[#DE3B34]">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#160A0A] md:text-2xl">{area.title}</h3>
                    <div className="mt-3 space-y-2">
                      {area.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-[#160A0A]/70">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News — dark band */}
      <section id="legal-news" className="bg-[#160A0A] py-16 text-white md:py-20">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F0716B]">
              {copy.autoUpdated}
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">{copy.newsTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">{copy.newsSub}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {legalNews.slice(0, 3).map((news, index) => {
              const body = (
                <>
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                    <Image src={getSafeImageUrl(news.image)} alt="" fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-white">{news.title}</h3>
                  {news.url ? (
                    <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[#FFB6B6]">
                      {copy.readMore}
                    </span>
                  ) : null}
                </>
              );
              return news.url ? (
                <a key={`${news.title}-${index}`} href={news.url} target="_blank" rel="noopener noreferrer" className="block">
                  {body}
                </a>
              ) : (
                <article key={`${news.title}-${index}`}>{body}</article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#160A0A]/10 bg-[#F1EFF0] py-16 md:py-20">
        <div className="mx-auto flex max-w-[1250px] flex-col items-start gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{copy.title}</h2>
            <p className="mt-3 text-base leading-7 text-[#160A0A]/70">{copy.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/971504096028?text=Hello%2C%20I%20need%20legal%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-[#DE3B34] bg-[#DE3B34] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-transparent hover:text-[#DE3B34]"
            >
              {copy.bookConsultation}
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center border border-[#160A0A] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#160A0A] transition-colors hover:bg-[#160A0A] hover:text-white"
            >
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
