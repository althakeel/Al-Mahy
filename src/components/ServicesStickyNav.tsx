import { Locale } from '@/lib/translations';
import { ServiceShowcaseItem } from '@/lib/services-showcase';

function ServiceNavIcon({ slug }: { slug: string }) {
  const className = 'h-5 w-5 shrink-0 text-[#B38D42]';

  switch (slug) {
    case 'legal-services':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v18" />
          <path d="M5 8h14" />
          <path d="M7 21h10" />
          <path d="M9 8V5h6v3" />
        </svg>
      );
    case 'corporate-services':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12h12" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
        </svg>
      );
    case 'notary-public-services':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      );
    case 'accounting-services':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8" />
          <path d="M8 10h2" />
          <path d="M14 10h2" />
          <path d="M8 14h2" />
          <path d="M14 14h2" />
          <path d="M8 18h8" />
        </svg>
      );
    case 'second-passport':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="12" cy="10" r="2.5" />
          <path d="M7 18c1.2-2 2.8-3 5-3s3.8 1 5 3" />
        </svg>
      );
    case 'expert-reports':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      );
    default:
      return null;
  }
}

interface ServicesStickyNavProps {
  locale: Locale;
  services: ServiceShowcaseItem[];
}

export default function ServicesStickyNav({ services }: ServicesStickyNavProps) {
  return (
    <section className="relative isolate z-[100] w-full border-b border-[#160A0A]/10 bg-white">
      <div className="mx-auto flex max-w-[1250px] flex-wrap lg:flex-nowrap">
        {services.map((service, index) => (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            style={{ zIndex: index + 1 }}
            className="group relative flex min-h-[56px] w-1/2 min-w-0 basis-1/2 cursor-pointer items-center justify-center gap-1.5 overflow-hidden px-2 py-3 text-center transition-colors hover:text-[#B38D42] sm:w-1/3 sm:basis-1/3 lg:w-auto lg:flex-1 lg:basis-0 lg:[&:not(:last-child)]:border-e lg:[&:not(:last-child)]:border-[#160A0A]/10"
          >
            <span className="pointer-events-none shrink-0">
              <ServiceNavIcon slug={service.slug} />
            </span>
            <span className="pointer-events-none min-w-0 break-words text-[9px] font-bold uppercase leading-tight tracking-[0.04em] text-[#160A0A]/80 group-hover:text-[#B38D42] xl:text-[10px] 2xl:text-[11px]">
              {service.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
