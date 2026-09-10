interface ExpertReportsTrustedSectionProps {
  isArabic: boolean;
  title: string;
  paragraph1: string;
  paragraph2: string;
}

export default function ExpertReportsTrustedSection({
  isArabic,
  title,
  paragraph1,
  paragraph2,
}: ExpertReportsTrustedSectionProps) {
  return (
    <section className="border-y border-[#B38D42]/10 bg-[#F1EFF0] py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`max-w-3xl ${isArabic ? 'ms-auto text-right' : ''}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{title}</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-[#160A0A]/75 md:text-[15px]">{paragraph1}</p>
          <p className="mt-4 text-sm leading-7 text-[#160A0A]/75 md:text-[15px]">{paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
