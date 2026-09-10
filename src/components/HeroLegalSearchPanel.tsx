'use client';

import SiteSearch from '@/components/SiteSearch';
import { Locale } from '@/lib/translations';

interface HeroLegalSearchPanelProps {
  locale: Locale;
  className?: string;
  align?: 'start' | 'end';
}

const copy = {
  en: { label: 'AI Legal Search' },
  ar: { label: 'بحث قانوني ذكي' },
};

export default function HeroLegalSearchPanel({ locale, className = '', align }: HeroLegalSearchPanelProps) {
  const t = copy[locale];
  const isRTL = locale === 'ar';
  const textAlign = align === 'end' ? 'text-right' : align === 'start' ? 'text-left' : isRTL ? 'text-right' : 'text-left';

  return (
    <div className={`w-full ${className}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <p className={`relative z-[1] mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ${textAlign}`}>
        {t.label}
      </p>
      <SiteSearch
        locale={locale}
        variant="hero"
        heroTone="dark"
        showPopular
        showRecent
        maxPopular={3}
        maxRecent={4}
        accentColor="#B38D42"
        className="relative z-[1] cursor-pointer"
      />
    </div>
  );
}
