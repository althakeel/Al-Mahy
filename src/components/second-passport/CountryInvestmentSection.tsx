type InvestmentCard = {
  title: string;
  minimum: string;
  desc: string;
  note?: string;
};

interface CountryInvestmentSectionProps {
  isArabic: boolean;
  routesLabel: string;
  eligibilityTitle: string;
  eligibilityIntro: string;
  investmentCards: InvestmentCard[];
  summaryLabel: string;
  options: string[];
}

export default function CountryInvestmentSection({
  isArabic,
  routesLabel,
  eligibilityTitle,
  eligibilityIntro,
  investmentCards,
  summaryLabel,
  options,
}: CountryInvestmentSectionProps) {
  return (
    <section className="border-y border-[#B38D42]/10 bg-[#F1EFF0] py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-7 max-w-2xl ${isArabic ? 'text-right' : ''}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38D42]">{routesLabel}</p>
          </div>
          <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{eligibilityTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-[#160A0A]/70 md:text-[15px]">{eligibilityIntro}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {investmentCards.map((card, index) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[18px] border border-[#B38D42]/20 bg-white p-5 shadow-[0_12px_28px_rgba(20,15,7,0.06)] transition-all duration-250 hover:-translate-y-1 hover:border-[#B38D42]/45 hover:shadow-[0_18px_36px_rgba(20,15,7,0.1)] md:p-6"
            >
              <div className={`mb-4 flex items-start gap-3 ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-sm font-bold text-[#B38D42]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="pt-1 text-lg font-bold leading-snug text-[#160A0A]">{card.title}</h3>
              </div>
              <div
                className={`mb-4 inline-flex w-fit rounded-lg border border-[#B38D42]/35 bg-[#B38D42]/10 px-3 py-2 ${
                  isArabic ? 'ms-auto' : ''
                }`}
              >
                <p className="text-xs font-bold leading-snug text-[#9A7635] md:text-sm">{card.minimum}</p>
              </div>
              <p className={`flex-1 text-sm leading-7 text-[#160A0A]/75 md:text-[15px] ${isArabic ? 'text-right' : 'text-left'}`}>
                {card.desc}
              </p>
              {card.note ? (
                <p className={`mt-3 text-xs leading-6 text-[#160A0A]/55 ${isArabic ? 'text-right' : 'text-left'}`}>
                  {card.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className={`mt-8 rounded-[18px] border border-[#B38D42]/20 bg-white p-5 md:p-6 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className={`mb-4 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B38D42]">{summaryLabel}</h3>
          </div>
          <ul className="space-y-3">
            {options.map((item) => (
              <li
                key={item}
                className={`flex gap-3 text-sm leading-7 text-[#160A0A]/75 ${isArabic ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B38D42]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
