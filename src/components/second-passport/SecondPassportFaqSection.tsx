type FaqItem = {
  q: string;
  a: string;
};

interface SecondPassportFaqSectionProps {
  isArabic: boolean;
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export default function SecondPassportFaqSection({
  isArabic,
  title,
  subtitle,
  items,
}: SecondPassportFaqSectionProps) {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[900px] px-4 md:px-8">
        <h2 className={`text-3xl font-bold text-[#160A0A] md:text-4xl ${isArabic ? 'text-right' : 'text-left'}`}>
          {title}
        </h2>
        {subtitle ? (
          <p className={`mt-3 text-sm leading-7 text-[#160A0A]/70 md:text-[15px] ${isArabic ? 'text-right' : 'text-left'}`}>
            {subtitle}
          </p>
        ) : null}

        <div className="mt-6 space-y-3">
          {items.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="group overflow-hidden rounded-[14px] border border-[#B38D42]/20 bg-[#F1EFF0]/40 transition-colors open:border-[#B38D42]/45 open:bg-white open:shadow-[0_8px_24px_rgba(20,15,7,0.06)]"
            >
              <summary
                className={`flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden ${
                  isArabic ? 'flex-row-reverse text-right' : ''
                }`}
              >
                <span className="font-semibold text-[#160A0A]">{item.q}</span>
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B38D42]/45 bg-[#B38D42]/10 text-lg font-light leading-none text-[#B38D42] transition-all duration-200 group-open:rotate-45 group-open:bg-[#B38D42] group-open:text-white"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className={`border-t border-[#B38D42]/15 px-5 pb-4 pt-3 ${isArabic ? 'text-right' : 'text-left'}`}>
                <p className="text-sm leading-7 text-[#160A0A]/70">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
