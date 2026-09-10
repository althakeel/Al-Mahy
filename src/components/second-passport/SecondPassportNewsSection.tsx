type NewsItem = {
  title: string;
  image: string;
  url?: string;
};

interface SecondPassportNewsSectionProps {
  isArabic: boolean;
  eyebrow: string;
  title: string;
  items: NewsItem[];
}

export default function SecondPassportNewsSection({
  isArabic,
  eyebrow,
  title,
  items,
}: SecondPassportNewsSectionProps) {
  return (
    <section className="border-t border-[#B38D42]/10 bg-[#F1EFF0] py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-7 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38D42]">{eyebrow}</p>
          </div>
          <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{title}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.slice(0, 3).map((item) => {
            const card = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-[#B38D42]/20 bg-[#160A0A]/10">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-[#160A0A]">{item.title}</h3>
              </>
            );

            const cardClassName =
              'group block rounded-[18px] border border-transparent p-3 transition-all hover:border-[#B38D42]/25 hover:bg-white hover:shadow-[0_12px_28px_rgba(20,15,7,0.06)]';

            return item.url ? (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
              >
                {card}
              </a>
            ) : (
              <article key={item.title} className={cardClassName}>
                {card}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
