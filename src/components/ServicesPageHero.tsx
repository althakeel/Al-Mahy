import Image from 'next/image';
import Link from 'next/link';
import { Locale, translations } from '@/lib/translations';
import { ServiceShowcaseItem } from '@/lib/services-showcase';
import ServicesStickyNav from '@/components/ServicesStickyNav';

function HeroFeatureIcon({ type }: { type: 'shield' | 'team' | 'chart' }) {
  const className = 'h-5 w-5 text-[#DE3B34]';

  if (type === 'shield') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (type === 'team') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 3v18h18" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-6" />
    </svg>
  );
}

interface ServicesPageHeroProps {
  locale: Locale;
  services: ServiceShowcaseItem[];
}

export default function ServicesPageHero({ locale, services }: ServicesPageHeroProps) {
  const isArabic = locale === 'ar';
  const t = translations[locale];

  const heroFeatures = isArabic
    ? [
        { label: 'خبرة موثوقة', icon: 'shield' as const },
        { label: 'نهج يركز على العميل', icon: 'team' as const },
        { label: 'نتائج ملموسة', icon: 'chart' as const },
      ]
    : [
        { label: 'Trusted Expertise', icon: 'shield' as const },
        { label: 'Client Focused Approach', icon: 'team' as const },
        { label: 'Results Driven', icon: 'chart' as const },
      ];

  return (
    <>
      <section className="relative h-[min(560px,calc(100svh-88px))] min-h-[460px] overflow-hidden text-white sm:min-h-[500px]">
        <Image
          src="/assets/banner/services-hero-bg.jpg"
          alt=""
          fill
          priority
          className={`object-cover ${isArabic ? 'object-left' : 'object-right'}`}
          sizes="100vw"
        />
        <div
          className={`absolute inset-0 ${
            isArabic ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
          } from-[#160A0A]/92 via-[#160A0A]/72 to-[#160A0A]/30`}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#160A0A]/20" aria-hidden />

        <div className="relative z-10 mx-auto flex h-full max-w-[1250px] flex-col px-4 pb-24 pt-24 md:px-8 md:pb-24 md:pt-[6.25rem]">
          <div className="flex flex-1 items-start">
            <div className={`max-w-2xl pt-1 lg:max-w-3xl ${isArabic ? 'ms-auto text-right' : ''}`}>
              <div className={`mb-5 flex items-center gap-3 ${isArabic ? 'justify-end' : ''}`}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DE3B34]">
                  {isArabic ? 'الماحي للخدمات القانونية' : 'Almahy for Legal Services'}
                </span>
                <span className="h-px w-10 bg-[#DE3B34]" aria-hidden />
              </div>

              <h1
                className="text-3xl font-bold leading-[1.08] md:text-4xl lg:text-[2.85rem]"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {isArabic ? (
                  <>
                    <span className="text-white">{t.servicesHeroLine1}</span>{' '}
                    <span className="text-[#DE3B34]">{t.servicesHeroHighlight}</span>
                    <br />
                    <span className="text-white">{t.servicesHeroLine2}</span>
                  </>
                ) : (
                  <>
                    <span className="text-white">{t.servicesHeroLine1}</span>
                    <br />
                    <span className="text-[#DE3B34]">{t.servicesHeroHighlight}</span>
                    <br />
                    <span className="text-white">{t.servicesHeroLine2}</span>
                  </>
                )}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/82 md:text-[15px]">
                {t.servicesIntro}
              </p>

              <div className={`mt-8 flex flex-wrap gap-3 ${isArabic ? 'justify-end' : ''}`}>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex cursor-pointer items-center gap-2 bg-[#DE3B34] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#c73731]"
                >
                  {isArabic ? 'تواصل معنا' : 'Contact Us'}
                  <span aria-hidden>{isArabic ? '←' : '→'}</span>
                </Link>
                <a
                  href="#legal-services"
                  className="inline-flex cursor-pointer items-center border border-white/70 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-[#160A0A]"
                >
                  {isArabic ? 'استعرض الخدمات' : 'Browse Services'}
                </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#160A0A]/55 backdrop-blur-sm">
            <div className="mx-auto flex max-w-[1250px] flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
              {heroFeatures.map((feature, index) => (
                <div key={feature.label} className="contents">
                  {index > 0 && (
                    <div className="hidden h-10 w-px bg-white/20 md:block" aria-hidden />
                  )}
                  <div
                    className={`flex flex-1 items-center gap-3 ${
                      isArabic ? 'flex-row-reverse text-right' : ''
                    }`}
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#DE3B34]/40 bg-[#DE3B34]/10">
                      <HeroFeatureIcon type={feature.icon} />
                    </span>
                    <p className="text-sm font-semibold text-white">{feature.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesStickyNav locale={locale} services={services} />
    </>
  );
}
