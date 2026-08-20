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
    id: 'team',
    headline: ['Your Justice, Our Mission', 'Expert Legal Guidance', 'At Every Step.'],
    desktop: '/assets/bannerSlider/hero-team-group-v6.png',
    mobile: '/assets/bannerSlider/hero-team-group-v6.png',
    objectPosition: 'center 32%',
  },
];

const arSlides: HeroSlide[] = [
  {
    id: 'mission',
    headline: ['عدالتك، مهمتنا', 'إرشاد قانوني خبير', 'في كل خطوة.'],
    desktop: '/assets/bannerSlider/hero-team-group-v6.png',
    mobile: '/assets/bannerSlider/hero-team-group-v6.png',
    objectPosition: 'center 32%',
  },
];

export function getHeroSlides(locale: Locale): HeroSlide[] {
  return locale === 'ar' ? arSlides : enSlides;
}
