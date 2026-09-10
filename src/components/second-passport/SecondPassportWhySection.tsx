type ReasonItem = {
  title: string;
  desc: string;
};

interface SecondPassportWhySectionProps {
  isArabic: boolean;
  eyebrow: string;
  title: string;
  items: ReasonItem[];
}

export default function SecondPassportWhySection({
  isArabic,
  eyebrow,
  title,
  items,
}: SecondPassportWhySectionProps) {
  return (
    <section className="border-y border-[#B38D42]/10 bg-[#F1EFF0] py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className={`lg:col-span-4 ${isArabic ? 'text-right' : 'text-left'}`}>
            <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
              <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38D42]">{eyebrow}</p>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-[#160A0A] md:text-4xl">{title}</h2>
          </div>

          <div className="grid gap-4 lg:col-span-8">
            {items.map((item, index) => (
              <article
                key={item.title}
                className={`group flex gap-4 rounded-[18px] border border-[#B38D42]/20 bg-white p-5 transition-all duration-250 hover:border-[#B38D42]/45 hover:shadow-[0_12px_28px_rgba(20,15,7,0.06)] md:p-6 ${
                  isArabic ? 'flex-row-reverse text-right' : ''
                }`}
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-lg font-bold text-[#B38D42] transition-colors group-hover:bg-[#B38D42] group-hover:text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#160A0A] md:text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#160A0A]/70 md:text-[15px]">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
