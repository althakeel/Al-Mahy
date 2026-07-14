"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { translations, Locale } from "@/lib/translations";

import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import ServicesSection from "@/components/ServicesSection";
import GoogleReviews from "@/components/GoogleReviews";
import Stats from "@/components/Stats";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import AboutSectionWithVideo from "@/components/AboutSectionWithVideo";
import HeroLegalSearchPanel from "@/components/HeroLegalSearchPanel";
import HeroBackgroundSlider, { HeroSlideIndicators } from "@/components/HeroBackgroundSlider";
import { getHeroSlides } from "@/lib/hero-slides";

export default function Home() {
  const params = useParams();
  const locale = params?.locale as string;

  const lang: Locale = locale === "ar" ? "ar" : "en";
  const isRTL = lang === "ar";
  const t = translations[lang];

  /* ---------------- Hero Headlines ---------------- */

  const heroSlides = getHeroSlides(lang);

  const [slideIdx, setSlideIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let fadeOutTimer: NodeJS.Timeout | undefined;
    let slideTimer: NodeJS.Timeout | undefined;
    if (fade) {
      fadeOutTimer = setTimeout(() => setFade(false), 4500);
    } else {
      slideTimer = setTimeout(() => {
        setSlideIdx((prev) => (prev + 1) % heroSlides.length);
        setFade(true);
      }, 600);
    }
    return () => {
      if (fadeOutTimer) clearTimeout(fadeOutTimer);
      if (slideTimer) clearTimeout(slideTimer);
    };
  }, [fade, slideIdx, heroSlides.length]);

  const currentSlide = heroSlides[slideIdx % heroSlides.length];
  const currentHeadline = currentSlide.headline.join('\n');

  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setYearsCount(i);
      if (i >= 38) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setSlideIdx(index % heroSlides.length);
    setFade(true);
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} lang={lang} className="w-full">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[760px] w-full items-center overflow-hidden pt-28 pb-14 md:min-h-[720px] md:pt-32 lg:min-h-[780px]">
        <HeroBackgroundSlider slides={heroSlides} activeIndex={slideIdx} isRTL={isRTL} />
        <div className={`absolute inset-0 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#160A0A]/90 via-[#160A0A]/50 to-[#160A0A]/20`} />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#160A0A]/55 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto grid w-full max-w-[1250px] items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">

            {/* Copy + CTA */}
            <div className={`flex flex-col items-start gap-5 ${isRTL ? 'text-right lg:order-2 lg:items-end' : 'text-left lg:order-1'}`}>
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#F0716B] backdrop-blur-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {isRTL ? 'دَع المحكمة لنا' : 'Leave Court To Us'}
              </span>

              <h1
                className={`min-h-[100px] whitespace-pre-line text-3xl font-bold leading-[1.05] text-white drop-shadow-2xl transition-opacity duration-700 md:min-h-[130px] md:text-5xl lg:min-h-[150px] ${fade ? 'opacity-100' : 'opacity-0'}`}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {currentHeadline}
              </h1>

              <div className={`flex w-full items-start ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`mt-1 h-14 w-1 shrink-0 rounded-full bg-[#DE3B34] ${isRTL ? 'ml-4' : 'mr-4'}`} />
                <p className="text-base font-normal leading-8 text-white/90 md:text-lg" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.35)', fontFamily: 'Arial, sans-serif' }}>
                  {isRTL
                    ? 'نحن منارة خبرتك القانونية، حيث تتحول القضايا الصعبة إلى انتصارات. واجه التحديات القانونية بثقة بينما نتولى نحن التعقيدات.'
                    : 'Almahy for Legal Services provides trusted legal consultation, corporate services, notary services, and comprehensive legal solutions for individuals and businesses across the UAE.'}
                </p>
              </div>

              <div className="w-full lg:hidden">
                <HeroLegalSearchPanel locale={lang} />
              </div>

              <Link
                href={`/${lang}/services`}
                className="group inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/20 bg-[#DE3B34] px-6 py-3 text-base font-bold tracking-wide text-white shadow-xl shadow-[#DE3B34]/20 transition-all duration-300 hover:bg-[#c73731] md:px-8 md:py-4 md:text-lg"
                style={{ letterSpacing: '0.04em', fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="text-xl font-extrabold transition-transform duration-300 group-hover:scale-110">+</span>
                <span>{isRTL ? 'اعرف المزيد' : 'Learn More'}</span>
              </Link>
            </div>

            {/* Right column — years + search (desktop) */}
            <div className={`hidden flex-col gap-8 lg:flex ${isRTL ? 'items-start lg:order-1' : 'items-end lg:order-2'}`}>
              <div className={`${isRTL ? 'text-left' : 'text-right'}`}>
                <p
                  className="text-[5.5rem] font-bold leading-none text-white drop-shadow-lg xl:text-[6.5rem]"
                  style={{ fontFamily: '"Mizra", "Times New Roman", serif' }}
                >
                  {yearsCount}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#F0716B]">
                  {isRTL ? 'عامًا من التميز القانوني' : 'Years of Legal Excellence'}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {isRTL ? 'موثوقون في دبي وجميع الإمارات' : 'Trusted across Dubai & the UAE'}
                </p>
              </div>

              <HeroLegalSearchPanel locale={lang} className="w-full max-w-md" align={isRTL ? 'start' : 'end'} />
            </div>

          </div>
        </div>

        <HeroSlideIndicators
          count={heroSlides.length}
          activeIndex={slideIdx}
          onSelect={goToSlide}
          isRTL={isRTL}
        />
          
      </section>

      {/* Other Sections */}

      <ClientLogosMarquee locale={lang} />

      <AboutSectionWithVideo
        t={{
          aboutTestimonial: t.aboutTestimonial,
          aboutUsLabel: t.aboutUsLabel,
          aboutHeadline: t.aboutHeadline,
          aboutDescription: t.aboutDescription,
        }}
        isRTL={isRTL}
      />

      <ServicesSection locale={lang} />

      <Stats locale={lang} />

      <GoogleReviews locale={lang} />

      <FAQ locale={lang} />

      <CTA locale={lang} />

    </div>
  );
} 
