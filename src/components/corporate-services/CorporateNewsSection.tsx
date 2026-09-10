import Image from 'next/image';

type NewsItem = {
  title: string;
  image: string;
  date: string;
  url?: string;
};

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

interface CorporateNewsSectionProps {
  isArabic: boolean;
  title: string;
  description: string;
  items: NewsItem[];
  viewAllLabel: string;
  viewAllUrl: string;
  readMoreLabel: string;
  getImageUrl: (url: string | undefined, pool: string[], index: number) => string;
  imagePool: string[];
}

export default function CorporateNewsSection({
  isArabic,
  title,
  description,
  items,
  viewAllLabel,
  viewAllUrl,
  readMoreLabel,
  getImageUrl,
  imagePool,
}: CorporateNewsSectionProps) {
  return (
    <section className="bg-[#F1EFF0] py-14 md:py-16">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-8 max-w-2xl ${isArabic ? 'ms-auto text-right' : ''}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B38D42]">
              {isArabic ? 'تحديثات' : 'Updates'}
            </p>
          </div>
          <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-[#160A0A]/65 md:text-[15px]">{description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((news, index) => {
            const card = (
              <>
                {news.image ? (
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[14px] border border-[#B38D42]/20">
                    <Image
                      src={getImageUrl(news.image, imagePool, index)}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#B38D42]">{news.date}</p>
                <p className="mb-4 line-clamp-3 font-semibold leading-snug text-[#160A0A]">{news.title}</p>
                {news.url ? (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#B38D42]">
                    {readMoreLabel}
                    <ArrowIcon className={`h-3.5 w-3.5 ${isArabic ? 'rotate-180' : ''}`} />
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
                className="group block rounded-[16px] border border-[#B38D42]/20 bg-white p-5 shadow-[0_8px_24px_rgba(20,15,7,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#B38D42]/40 hover:shadow-[0_14px_32px_rgba(20,15,7,0.08)]"
              >
                {card}
              </a>
            ) : (
              <article
                key={`${news.title}-${index}`}
                className="rounded-[16px] border border-[#B38D42]/20 bg-white p-5 shadow-[0_8px_24px_rgba(20,15,7,0.05)]"
              >
                {card}
              </article>
            );
          })}
        </div>

        <div className={`mt-10 ${isArabic ? 'text-right' : 'text-center'}`}>
          <a
            href={viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-glow-solid inline-flex h-[52px] cursor-pointer items-center gap-2 rounded-md bg-[#B38D42] px-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:border-[#9A7635] hover:bg-[#9A7635] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B38D42]"
          >
            {viewAllLabel}
            <ArrowIcon className={`h-3.5 w-3.5 ${isArabic ? 'rotate-180' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
