interface ExpertReportsWhySectionProps {
  isArabic: boolean;
  title: string;
  items: string[];
}

export default function ExpertReportsWhySection({
  isArabic,
  title,
  items,
}: ExpertReportsWhySectionProps) {
  return (
    <section className="bg-[#100B0B] py-10 text-white md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-7 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item}
              className="group flex flex-col rounded-[18px] border border-[#B38D42]/20 bg-[#160A0A]/70 p-5 transition-all duration-250 hover:-translate-y-1 hover:border-[#B38D42]/45 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-sm font-bold text-[#B38D42] transition-colors group-hover:bg-[#B38D42] group-hover:text-white ${
                  isArabic ? 'ms-auto' : ''
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className={`mt-4 text-sm leading-7 text-white/80 md:text-[15px] ${isArabic ? 'text-right' : 'text-left'}`}>
                {item}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
