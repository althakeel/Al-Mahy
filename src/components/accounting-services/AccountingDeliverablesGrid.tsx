type ServiceItem = {
  title: string;
  desc: string;
};

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    // Bookkeeping
    <path key="0" d="M6 4h12v16H6V4zm2 2v12h8V6H8zm2 2h4v2h-4V8zm0 4h4v2h-4v-2z" />,
    // Financial Accounting
    <path key="1" d="M4 18h16v2H4v-2zm2-4h3v3H6v-3zm5 0h3v3h-3v-3zm5 0h3v3h-3v-3zM6 8h3v3H6V8zm5 0h3v3h-3V8zm5 0h3v3h-3V8z" />,
    // Financial Statements
    <path key="2" d="M7 3h10v18H7V3zm2 2v14h6V5H9zm1 2h4v2h-4V7zm0 4h4v2h-4v-2zm0 4h3v2H9v-2z" />,
    // VAT & Tax
    <path key="3" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />,
    // Payroll
    <path key="4" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
    // Cost Control
    <path key="5" d="M3 17h18v2H3v-2zm3.5-5.5L9 15h6l2.5-3.5L21 16H3l3.5-4.5z" />,
    // Advisory
    <path key="6" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
    // System Setup
    <path key="7" d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.63-.94l-.36-2.54A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.36 2.54a7.03 7.03 0 0 0-1.63.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.04.7 1.63.94l.36 2.54c.05.24.24.41.49.41h4c.25 0 .44-.17.49-.42l.36-2.54c.59-.24 1.13-.56 1.63-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.03-1.58zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z" />,
  ];

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {icons[index] ?? icons[0]}
    </svg>
  );
}

interface AccountingDeliverablesGridProps {
  isArabic: boolean;
  eyebrow: string;
  title: string;
  services: ServiceItem[];
}

export default function AccountingDeliverablesGrid({
  isArabic,
  eyebrow,
  title,
  services,
}: AccountingDeliverablesGridProps) {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div
          className={`mb-7 border-b border-[#B38D42]/15 pb-5 ${isArabic ? 'text-right' : 'text-left'}`}
        >
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38D42]">{eyebrow}</p>
          </div>
          <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{title}</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-[18px] border border-[#B38D42]/20 bg-[#F1EFF0]/40 p-5 transition-all duration-250 hover:-translate-y-1 hover:border-[#B38D42]/45 hover:bg-white hover:shadow-[0_16px_35px_rgba(20,15,7,0.08)] md:p-6"
            >
              <div className={`mb-3 flex items-start gap-3 ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#B38D42]/50 bg-[#B38D42]/12 text-[#B38D42] transition-colors group-hover:bg-[#B38D42] group-hover:text-white">
                  <ServiceIcon index={index} />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold tracking-[0.16em] text-[#B38D42]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-[#160A0A]">{service.title}</h3>
                  <div className="mt-2 h-px w-10 bg-[#B38D42]/45" aria-hidden="true" />
                </div>
              </div>
              <p className={`text-sm leading-7 text-[#160A0A]/70 md:text-[15px] ${isArabic ? 'text-right' : 'text-left'}`}>
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
