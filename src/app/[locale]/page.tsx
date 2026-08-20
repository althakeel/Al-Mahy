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
import HeroBackgroundSlider from "@/components/HeroBackgroundSlider";
import { getHeroSlides } from "@/lib/hero-slides";

export default function Home() {
  const params = useParams();
  const locale = params?.locale as string;

  const lang: Locale = locale === "ar" ? "ar" : "en";
  const isRTL = lang === "ar";
  const t = translations[lang];

  /* ---------------- Hero Headlines ---------------- */

  const heroSlides = getHeroSlides(lang);
  const currentSlide = heroSlides[0];
  const currentHeadline = currentSlide.headline.join("\n");

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

  return (
    <div dir={isRTL ? "rtl" : "ltr"} lang={lang} className="w-full">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-[#160A0A] md:min-h-[820px]">
        <HeroBackgroundSlider slides={heroSlides} activeIndex={0} isRTL={isRTL} />
        <div className={`absolute inset-0 ${isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#160A0A] via-[#160A0A]/88 to-[#160A0A]/35`} />
        <div className="absolute inset-0 bg-[#160A0A]/30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#160A0A] via-[#160A0A]/70 to-transparent" />

        <div className="relative z-10 w-full pb-20 pt-28 md:pb-24 md:pt-32">
          <div className="mx-auto grid w-full max-w-[1250px] gap-12 px-4 md:px-8 lg:grid-cols-12 lg:items-end lg:gap-10">

            {/* Copy */}
            <div className={`lg:col-span-7 ${isRTL ? "text-right lg:order-2" : "text-left lg:order-1"}`}>
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
              >
                {isRTL ? "دَع المحكمة لنا" : "Leave Court To Us"}
              </p>

              <h1
                className="max-w-3xl whitespace-pre-line text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl"
                style={{ fontFamily: "Georgia, serif", textShadow: "0 3px 22px rgba(0,0,0,0.65)" }}
              >
                {currentHeadline}
              </h1>

              <p
                className="mt-6 max-w-xl text-base leading-8 text-white md:text-lg"
                style={{ textShadow: "0 2px 14px rgba(0,0,0,0.75)" }}
              >
                {isRTL
                  ? "استشارات قانونية وخدمات شركات وتوثيق وحلول متكاملة للأفراد والشركات في جميع أنحاء الإمارات."
                  : "Trusted legal consultation, corporate services, notary support, and practical solutions for individuals and businesses across the UAE."}
              </p>

              <div className={`mt-8 flex flex-wrap gap-3 ${isRTL ? "justify-end" : "justify-start"}`}>
                <Link
                  href={`/${lang}/services`}
                  className="inline-flex items-center border border-[#DE3B34] bg-[#DE3B34] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-transparent"
                >
                  {isRTL ? "اعرف المزيد" : "Learn More"}
                </Link>
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center border border-white/70 bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-[#160A0A]"
                >
                  {isRTL ? "تواصل معنا" : "Contact Us"}
                </Link>
              </div>

              <div className="mt-8 w-full lg:hidden">
                <HeroLegalSearchPanel locale={lang} />
              </div>
            </div>

            {/* Years + search panel */}
            <div className={`lg:col-span-5 ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
              <div className="border border-white/15 bg-[#160A0A]/75 p-6 backdrop-blur-md md:p-8">
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p
                    className="text-6xl font-bold leading-none text-white md:text-7xl"
                    style={{ fontFamily: '"Mizra", Georgia, serif' }}
                  >
                    {yearsCount}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    {isRTL ? "عامًا من التميز القانوني" : "Years of Legal Excellence"}
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    {isRTL ? "موثوقون في دبي وجميع الإمارات" : "Trusted across Dubai & the UAE"}
                  </p>
                </div>

                <div className="mt-8 hidden border-t border-white/10 pt-6 lg:block">
                  <HeroLegalSearchPanel locale={lang} align={isRTL ? "end" : "start"} />
                </div>
              </div>
            </div>
          </div>
        </div>

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
