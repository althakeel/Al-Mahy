type WhyUsItem = {
  title: string;
  desc: string;
};

function WhyIcon({ index }: { index: number }) {
  const paths = [
    // UAE Compliance
    <path key="0" fill="none" stroke="currentColor" strokeWidth="1.8" d="M12 3l7 4v5c0 4.5-3.2 7.8-7 9-3.8-1.2-7-4.5-7-9V7l7-4z" />,
    // End-to-End
    <path key="1" fill="none" stroke="currentColor" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h16" />,
    // Accurate Reporting
    <path key="2" fill="none" stroke="currentColor" strokeWidth="1.8" d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
    // Trusted Partner
    <path key="3" fill="none" stroke="currentColor" strokeWidth="1.8" d="M8 11V7a4 4 0 1 1 8 0v4M6 11h12v10H6V11z" />,
  ];

  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      {paths[index] ?? paths[0]}
    </svg>
  );
}

interface AccountingWhyChooseSectionProps {
  isArabic: boolean;
  title: string;
  items: WhyUsItem[];
}

export default function AccountingWhyChooseSection({
  isArabic,
  title,
  items,
}: AccountingWhyChooseSectionProps) {
  return (
    <section className="border-y border-[#B38D42]/10 bg-[#100B0B] py-10 text-white md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <h2 className={`max-w-3xl text-3xl font-bold md:text-4xl ${isArabic ? 'ms-auto text-right' : 'text-left'}`}>
          {title}
        </h2>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col rounded-[18px] border border-[#B38D42]/20 bg-[#160A0A]/70 p-5 transition-all duration-250 hover:-translate-y-1 hover:border-[#B38D42]/45 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            >
              <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end text-right' : ''}`}>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-[#B38D42] transition-colors group-hover:bg-[#B38D42] group-hover:text-white">
                  <WhyIcon index={index} />
                </span>
                <span className="text-xs font-bold tracking-[0.16em] text-[#B38D42]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className={`text-lg font-bold text-white ${isArabic ? 'text-right' : 'text-left'}`}>{item.title}</h3>
              <p className={`mt-2 text-sm leading-7 text-white/70 ${isArabic ? 'text-right' : 'text-left'}`}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
