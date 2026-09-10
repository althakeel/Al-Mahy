interface AccountingIntroSectionProps {
  isArabic: boolean;
  eyebrow: string;
  title: string;
  description: string;
}

export default function AccountingIntroSection({
  isArabic,
  eyebrow,
  title,
  description,
}: AccountingIntroSectionProps) {
  return (
    <section className="border-b border-[#B38D42]/10 bg-[#F1EFF0] py-10 md:py-12">
      <div className="mx-auto grid max-w-[1250px] gap-5 px-4 md:px-8 lg:grid-cols-12 lg:items-start">
        <div className={`lg:col-span-4 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38D42]">{eyebrow}</p>
          </div>
          <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{title}</h2>
        </div>
        <p className={`text-base leading-8 text-[#160A0A]/75 lg:col-span-8 ${isArabic ? 'text-right' : 'text-left'}`}>
          {description}
        </p>
      </div>
    </section>
  );
}
