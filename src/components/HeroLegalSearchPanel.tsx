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
      <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F0716B] ${textAlign}`}>
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
      />
    </div>
  );
}
