import Image from 'next/image';

type NewsItem = {
  title: string;
  image: string;
  url?: string;
};

interface LegalNewsSectionProps {
  copy: {
    autoUpdated: string;
    newsTitle: string;
    newsSub: string;
    readMore: string;
  };
  items: NewsItem[];
  getImageUrl: (url?: string) => string;
  isArabic: boolean;
}

export default function LegalNewsSection({ copy, items, getImageUrl, isArabic }: LegalNewsSectionProps) {
  return (
    <section id="legal-news" className="relative overflow-hidden bg-[#100B0B] py-14 text-white md:py-16">
      <div
        className="pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(179,141,66,0.08),transparent_68%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-10 max-w-2xl ${isArabic ? 'ms-auto text-right' : ''}`}>
          <div className={`mb-4 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B38D42]">{copy.autoUpdated}</p>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">{copy.newsTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-white/70 md:text-[15px]">{copy.newsSub}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {items.slice(0, 3).map((news, index) => {
            const cardBody = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-[#B38D42]/20 bg-white/5">
                  <Image src={getImageUrl(news.image)} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-white">{news.title}</h3>
                {news.url ? (
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#B38D42]">
                    {copy.readMore}
                    <span aria-hidden="true">{isArabic ? '←' : '→'}</span>
                  </span>
                ) : null}
              </>
            );

            return news.url ? (
              <a
                key={`${news.title}-${index}`}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="legal-news-card group block rounded-[16px] border border-transparent p-3 transition-all duration-200 hover:border-[#B38D42]/25 hover:bg-white/[0.03]"
              >
                {cardBody}
              </a>
            ) : (
              <article key={`${news.title}-${index}`} className="legal-news-card rounded-[16px] p-3">
                {cardBody}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
