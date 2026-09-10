interface CountryOverviewSectionProps {
  isArabic: boolean;
  overviewLabel: string;
  title: string;
  heroBody: string;
  subtitle: string;
  benefitsLabel: string;
  benefits: string[];
}

export default function CountryOverviewSection({
  isArabic,
  overviewLabel,
  title,
  heroBody,
  subtitle,
  benefitsLabel,
  benefits,
}: CountryOverviewSectionProps) {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto grid max-w-[1250px] gap-8 px-4 md:px-8 lg:grid-cols-12 lg:items-start">
        <div className={`lg:col-span-5 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38D42]">{overviewLabel}</p>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-[#160A0A] md:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-7 text-[#160A0A]/75 md:text-[15px]">{heroBody}</p>
          <p className="mt-4 text-sm leading-7 text-[#160A0A]/70 md:text-[15px]">{subtitle}</p>
        </div>

        <div className={`lg:col-span-7 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className={`mb-4 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B38D42]">{benefitsLabel}</h3>
          </div>
          <div className="grid gap-3">
            {benefits.map((item, index) => (
              <article
                key={item}
                className={`group flex gap-4 rounded-[18px] border border-[#B38D42]/20 bg-[#F1EFF0]/40 p-4 transition-all duration-250 hover:border-[#B38D42]/45 hover:bg-white hover:shadow-[0_12px_28px_rgba(20,15,7,0.06)] md:p-5 ${
                  isArabic ? 'flex-row-reverse text-right' : ''
                }`}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-sm font-bold text-[#B38D42] transition-colors group-hover:bg-[#B38D42] group-hover:text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="pt-1.5 text-sm leading-7 text-[#160A0A]/80 md:text-[15px]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
