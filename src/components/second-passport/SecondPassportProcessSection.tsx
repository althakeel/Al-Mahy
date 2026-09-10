type ProcessStep = {
  title: string;
  desc: string;
};

interface SecondPassportProcessSectionProps {
  isArabic: boolean;
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}

export default function SecondPassportProcessSection({
  isArabic,
  eyebrow,
  title,
  steps,
}: SecondPassportProcessSectionProps) {
  return (
    <section className="bg-[#100B0B] py-10 text-white md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-7 max-w-2xl ${isArabic ? 'ms-auto text-right' : ''}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38D42]">{eyebrow}</p>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group flex flex-col rounded-[18px] border border-[#B38D42]/20 bg-[#160A0A]/70 p-5 transition-all duration-250 hover:-translate-y-1 hover:border-[#B38D42]/45 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-lg font-bold text-[#B38D42] transition-colors group-hover:bg-[#B38D42] group-hover:text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={`mt-4 text-lg font-bold text-white ${isArabic ? 'text-right' : 'text-left'}`}>
                {step.title}
              </h3>
              <p className={`mt-2 text-sm leading-7 text-white/70 ${isArabic ? 'text-right' : 'text-left'}`}>
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
