import { Locale } from '@/lib/translations';

export interface HeroSlide {
  id: string;
  headline: string[];
  desktop: string;
  mobile: string;
  objectPosition?: string;
}

const enSlides: HeroSlide[] = [
  {
    id: 'corporate',
    headline: ['Corporate & Legal Solutions', 'For Businesses Across the UAE'],
    desktop: '/assets/bannerSlider/main5.webp',
    mobile: '/assets/banner/MB1.webp',
    objectPosition: 'center',
  },
  {
    id: 'trusted-firm',
    headline: ['Trusted Law Firm', '38 Years of Excellence', 'In Legal Services.'],
    desktop: '/assets/banner/DB1.webp',
    mobile: '/assets/banner/MB1.webp',
    objectPosition: 'center 20%',
  },
  {
    id: 'results',
    headline: ['Results That Matter', 'Dedicated to Your Case', 'With Integrity.'],
    desktop: '/assets/bannerSlider/main3.webp',
    mobile: '/assets/banner/MB1.webp',
    objectPosition: 'center 30%',
  },
];

const arSlides: HeroSlide[] = [
  {
    id: 'integrity',
    headline: ['نتائج تهمك', 'مكرسون لقضيتك', 'بكل نزاهة.'],
    desktop: '/assets/bannerSlider/main5.webp',
    mobile: '/assets/banner/MB1.webp',
    objectPosition: 'center',
  },
  {
    id: 'excellence',
    headline: ['شركة محاماة موثوقة', '38 عامًا من التميز', 'في الخدمات القانونية.'],
    desktop: '/assets/banner/DB1B.webp',
    mobile: '/assets/banner/MB1.webp',
    objectPosition: 'center 20%',
  },
  {
    id: 'justice',
    headline: ['عدالتك، مهمتنا', 'إرشاد قانوني خبير', 'في كل خطوة.'],
    desktop: '/assets/bannerSlider/main3.webp',
    mobile: '/assets/banner/MB1.webp',
    objectPosition: 'center 25%',
  },
];

export function getHeroSlides(locale: Locale): HeroSlide[] {
  return locale === 'ar' ? arSlides : enSlides;
}
