type ServiceItem = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

interface CorporateServiceGridProps {
  isArabic: boolean;
  eyebrow: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export default function CorporateServiceGrid({
  isArabic,
  eyebrow,
  title,
  description,
  services,
}: CorporateServiceGridProps) {
  return (
    <section className="bg-[#100B0B] py-14 md:py-16">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-10 max-w-3xl ${isArabic ? 'ms-auto text-right' : ''}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B38D42]">{eyebrow}</p>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-white/70 md:text-[15px]">{description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="corporate-service-card group flex min-h-[380px] flex-col overflow-hidden rounded-[18px] border border-[#B38D42]/20 bg-[#160A0A]/80 p-5 transition-all duration-250 hover:-translate-y-1 hover:border-[#B38D42]/45 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            >
              <div className={`mb-4 flex items-start gap-3 ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-lg font-bold text-[#B38D42] transition-colors group-hover:bg-[#B38D42] group-hover:text-white">
                  {index + 1}
                </span>
                <h3 className="pt-1 text-lg font-bold leading-snug text-white">{service.title}</h3>
              </div>

              <div className={`min-h-0 flex-1 space-y-2.5 ${isArabic ? 'text-right' : 'text-left'}`}>
                {service.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-white/72 md:text-[15px]">
                    {paragraph}
                  </p>
                ))}

                {service.bullets ? (
                  <ul className="mt-3 space-y-1.5">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`flex items-start gap-2 text-sm leading-7 text-white/72 ${isArabic ? 'flex-row-reverse text-right' : ''}`}
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B38D42]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
