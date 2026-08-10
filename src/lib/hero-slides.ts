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
    desktop: '/assets/bannerSlider/hero-office-meeting.png',
    mobile: '/assets/bannerSlider/hero-office-meeting.png',
    objectPosition: 'center 40%',
  },
  {
    id: 'trusted-firm',
    headline: ['Trusted Law Firm', '38 Years of Excellence', 'In Legal Services.'],
    desktop: '/assets/bannerSlider/hero-team-presentation.png',
    mobile: '/assets/bannerSlider/hero-team-presentation.png',
    objectPosition: 'center 35%',
  },
  {
    id: 'results',
    headline: ['Results That Matter', 'Dedicated to Your Case', 'With Integrity.'],
    desktop: '/assets/bannerSlider/hero-office-collaboration.png',
    mobile: '/assets/bannerSlider/hero-office-collaboration.png',
    objectPosition: 'center 45%',
  },
  {
    id: 'team',
    headline: ['A Dedicated Legal Team', 'Working For Your Success', 'Across the UAE.'],
    desktop: '/assets/bannerSlider/hero-team-navy.png',
    mobile: '/assets/bannerSlider/hero-team-navy.png',
    objectPosition: 'center 30%',
  },
  {
    id: 'global',
    headline: ['Your Justice, Our Mission', 'Expert Legal Guidance', 'At Every Step.'],
    desktop: '/assets/bannerSlider/hero-team-group.png',
    mobile: '/assets/bannerSlider/hero-team-group.png',
    objectPosition: 'center 28%',
  },
];

const arSlides: HeroSlide[] = [
  {
    id: 'integrity',
    headline: ['حلول قانونية وتجارية', 'للشركات في جميع أنحاء الإمارات'],
    desktop: '/assets/bannerSlider/hero-office-meeting.png',
    mobile: '/assets/bannerSlider/hero-office-meeting.png',
    objectPosition: 'center 40%',
  },
  {
    id: 'excellence',
    headline: ['شركة محاماة موثوقة', '38 عامًا من التميز', 'في الخدمات القانونية.'],
    desktop: '/assets/bannerSlider/hero-team-presentation.png',
    mobile: '/assets/bannerSlider/hero-team-presentation.png',
    objectPosition: 'center 35%',
  },
  {
    id: 'justice',
    headline: ['نتائج تهمك', 'مكرسون لقضيتك', 'بكل نزاهة.'],
    desktop: '/assets/bannerSlider/hero-office-collaboration.png',
    mobile: '/assets/bannerSlider/hero-office-collaboration.png',
    objectPosition: 'center 45%',
  },
  {
    id: 'team',
    headline: ['فريق قانوني متخصص', 'يعمل لنجاحك', 'في جميع أنحاء الإمارات.'],
    desktop: '/assets/bannerSlider/hero-team-navy.png',
    mobile: '/assets/bannerSlider/hero-team-navy.png',
    objectPosition: 'center 30%',
  },
  {
    id: 'mission',
    headline: ['عدالتك، مهمتنا', 'إرشاد قانوني خبير', 'في كل خطوة.'],
    desktop: '/assets/bannerSlider/hero-team-group.png',
    mobile: '/assets/bannerSlider/hero-team-group.png',
    objectPosition: 'center 28%',
  },
];

export function getHeroSlides(locale: Locale): HeroSlide[] {
  return locale === 'ar' ? arSlides : enSlides;
}
