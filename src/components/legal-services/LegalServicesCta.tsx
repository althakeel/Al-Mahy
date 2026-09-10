import Link from 'next/link';
import { Locale } from '@/lib/translations';

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

interface LegalServicesCtaProps {
  locale: Locale;
  copy: {
    title: string;
    subtitle: string;
    bookConsultation: string;
  };
  contactLabel: string;
  isArabic: boolean;
}

export default function LegalServicesCta({ locale, copy, contactLabel, isArabic }: LegalServicesCtaProps) {
  return (
    <section className="border-t border-[#B38D42]/15 bg-[#F1EFF0] py-14 md:py-16">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div
          className={`flex flex-col gap-8 rounded-[22px] border border-[#B38D42]/25 bg-white px-6 py-10 shadow-[0_16px_35px_rgba(20,15,7,0.06)] md:flex-row md:items-center md:justify-between md:px-10 md:py-12 ${
            isArabic ? 'text-right' : 'text-left'
          }`}
        >
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{copy.title}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#160A0A]/70">{copy.subtitle}</p>
          </div>
          <div className={`flex flex-wrap gap-3.5 ${isArabic ? 'justify-end' : ''}`}>
            <a
              href="https://wa.me/971504096028?text=Hello%2C%20I%20need%20legal%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-glow-solid inline-flex h-[52px] cursor-pointer items-center gap-2 rounded-md bg-[#B38D42] px-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:border-[#9A7635] hover:bg-[#9A7635] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B38D42]"
            >
              {copy.bookConsultation}
              <ArrowIcon className={`h-3.5 w-3.5 ${isArabic ? 'rotate-180' : ''}`} />
            </a>
            <Link
              href={`/${locale}/contact`}
              className="hero-btn-glow-outline inline-flex h-[52px] cursor-pointer items-center gap-2 rounded-md bg-transparent px-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#160A0A] transition-all duration-200 hover:bg-[rgba(179,141,66,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B38D42]"
            >
              {contactLabel}
              <ArrowIcon className={`h-4 w-4 text-[#B38D42] ${isArabic ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
