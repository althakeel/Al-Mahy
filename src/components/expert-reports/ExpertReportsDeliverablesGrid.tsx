interface ExpertReportsDeliverablesGridProps {
  isArabic: boolean;
  title: string;
  items: string[];
}

export default function ExpertReportsDeliverablesGrid({
  isArabic,
  title,
  items,
}: ExpertReportsDeliverablesGridProps) {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-7 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{title}</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item}
              className={`group flex items-start gap-4 rounded-[18px] border border-[#B38D42]/20 bg-[#F1EFF0]/40 p-5 transition-all duration-250 hover:-translate-y-1 hover:border-[#B38D42]/45 hover:bg-white hover:shadow-[0_12px_28px_rgba(20,15,7,0.06)] md:p-6 ${
                isArabic ? 'flex-row-reverse text-right' : ''
              }`}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-sm font-bold text-[#B38D42] transition-colors group-hover:bg-[#B38D42] group-hover:text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="pt-2 text-sm font-semibold leading-7 text-[#160A0A] md:text-[15px]">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
