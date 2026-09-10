interface CountryProcessSectionProps {
  isArabic: boolean;
  processLabel: string;
  processTitle: string;
  processIntro: string;
  processTime: string;
  processSteps: string[];
}

export default function CountryProcessSection({
  isArabic,
  processLabel,
  processTitle,
  processIntro,
  processTime,
  processSteps,
}: CountryProcessSectionProps) {
  return (
    <section className="bg-[#100B0B] py-10 text-white md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-7 max-w-2xl ${isArabic ? 'text-right' : ''}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38D42]">{processLabel}</p>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">{processTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-white/70 md:text-[15px]">{processIntro}</p>
          <p className="mt-3 inline-flex rounded-full border border-[#B38D42]/35 bg-[#B38D42]/10 px-3 py-1 text-xs font-semibold text-[#E8D5A8]">
            {processTime}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step}
              className="group flex flex-col rounded-[18px] border border-[#B38D42]/20 bg-[#160A0A]/70 p-5 transition-all duration-250 hover:-translate-y-1 hover:border-[#B38D42]/45 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-sm font-bold text-[#B38D42] transition-colors group-hover:bg-[#B38D42] group-hover:text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className={`mt-4 text-sm font-semibold leading-7 text-white md:text-[15px] ${isArabic ? 'text-right' : 'text-left'}`}>
                {step}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
