import { translations, Locale } from "@/lib/translations";
import { getTeamCards } from "@/data/team";
import TeamMosaic from "@/components/TeamMosaic";
import AboutHeroBackground from "@/components/AboutHeroBackground";
import Link from "next/link";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const t = translations[lang];
  const aboutStats = [
    { value: "15+", label: lang === "en" ? "Years Experience" : "سنوات خبرة", icon: "M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: "5000+", label: lang === "en" ? "Clients" : "عملاء", icon: "M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" },
    { value: "50+", label: lang === "en" ? "Professionals" : "محترفون", icon: "M12 14l9-5-9-5-9 5 9 5zM5 11v5c0 2 3 4 7 4s7-2 7-4v-5" },
    { value: "All", label: lang === "en" ? "Emirates Covered" : "جميع الإمارات", icon: "M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11zM12 13a3 3 0 100-6 3 3 0 000 6z" },
  ];
  const whyChooseCards = [
    {
      number: "01",
      title: lang === "en" ? "38 years in UAE practice" : "38 عاماً من الممارسة في الإمارات",
      desc:
        lang === "en"
          ? "We know how Dubai courts, free zones, and licensing authorities actually work — not just the theory."
          : "نعرف كيف تعمل محاكم دبي والمناطق الحرة وجهات الترخيص فعلياً، وليس فقط من الناحية النظرية.",
    },
    {
      number: "02",
      title: lang === "en" ? "One office for legal + corporate work" : "مكتب واحد للعمل القانوني والمؤسسي",
      desc:
        lang === "en"
          ? "Company setup, contracts, notary, disputes, and accounting stay with the same team so nothing gets lost between vendors."
          : "تأسيس الشركات والعقود والتوثيق والنزاعات والمحاسبة تبقى مع نفس الفريق حتى لا يضيع شيء بين مقدمي الخدمة.",
    },
    {
      number: "03",
      title: lang === "en" ? "Clear next steps, every file" : "خطوات واضحة في كل ملف",
      desc:
        lang === "en"
          ? "You get plain updates on what was filed, what is pending, and what you need to decide — without legal fog."
          : "تحصل على تحديثات واضحة عما تم تقديمه وما هو قيد الانتظار وما تحتاج إلى تقريره، بلا غموض قانوني.",
    },
    {
      number: "04",
      title: lang === "en" ? "Built for busy clients" : "مصممون للعملاء المشغولين",
      desc:
        lang === "en"
          ? "WhatsApp, calls, and office meetings — we move at the pace of your business, not the other way around."
          : "واتساب والمكالمات واجتماعات المكتب — نتحرك بإيقاع عملك، وليس العكس.",
    },
  ];

  return (
    <div className="min-h-screen" dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
      {/* Hero Section */}
      <div className="relative flex h-[480px] items-center justify-center overflow-hidden bg-[#160A0A] md:h-[560px]">
        <AboutHeroBackground />
        <div className="relative z-10 text-center px-4">
          <p
            className="mb-2 text-sm font-semibold uppercase tracking-wider text-white"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
          >
            {lang === 'en' ? 'Driven by Precision, Built on Trust' : 'مدفوعون بالدقة، مبنيون على الثقة'}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {lang === 'en' ? 'About us' : 'من نحن'}
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {lang === 'en' ? 'Home / About us' : 'الرئيسية / من نحن'}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center border border-[#DE3B34] bg-[#DE3B34] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-transparent"
            >
              {lang === "en" ? "Book Free Consultation" : "احجز استشارة مجانية"}
            </Link>
            <a
              href="tel:+971504096028"
              className="inline-flex items-center justify-center border border-white/70 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#160A0A]"
            >
              {lang === "en" ? "Call Us" : "اتصل بنا"}
            </a>
          </div>
        </div>
      </div>

      {/* Credibility Stats */}
      <section className="relative z-10 -mt-8 px-4 md:-mt-10 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#160A0A] shadow-[0_20px_50px_-24px_rgba(22,10,10,0.55)]">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="px-5 py-8 text-center sm:px-6 sm:py-10">
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  {stat.value}
                </p>
                <p
                  className={`mt-2 text-[11px] font-medium tracking-[0.16em] text-[#F0716B] sm:text-xs ${
                    lang === "ar" ? "normal-case" : "uppercase"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <div className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="font-semibold mb-3 tracking-wide uppercase text-sm" style={{color: '#8f2f2f'}}>
                {lang === 'en' ? 'ABOUT ALMAHY LEGAL SERVICES' : 'مرحبا بكم في شركة المحاماة'}
              </p>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {lang === 'en' ? 'Trusted Legal Advisors for Businesses and Individuals Across the UAE' : 'اجعل امتثالك الضريبي نقطة البداية لنمو عمل'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {t.aboutDesc1}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {t.aboutDesc2}
              </p>
              
              {/* Core Values */}
              <div className="space-y-3 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {lang === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#DE3B34'}}></div>
                  <p className="text-gray-700 font-medium">{lang === 'en' ? 'Committed to delivering the finest' : 'ملتزمون بتقديم الأفضل'}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#DE3B34'}}></div>
                  <p className="text-gray-700 font-medium">{lang === 'en' ? 'Honest and transparent services' : 'خدمات صادقة وشفافة'}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#DE3B34'}}></div>
                  <p className="text-gray-700 font-medium">{lang === 'en' ? 'High marks of trust, business trust & integrity' : 'ثقة عالية ونزاهة'}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#DE3B34'}}></div>
                  <p className="text-gray-700 font-medium">{lang === 'en' ? 'Service' : 'خدمة'}</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about/about-meeting.png" 
                  alt={lang === "en" ? "Almahy Legal Services team meeting" : "اجتماع فريق الماحي للخدمات القانونية"} 
                  className="w-full h-[600px] object-cover object-center"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl -z-10" style={{backgroundColor: '#DE3B34'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about/about-mission.png" 
                  alt={lang === "en" ? "Almahy Legal Services team discussion" : "نقاش فريق الماحي للخدمات القانونية"} 
                  className="w-full h-[500px] object-cover object-center"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-8 -right-8 w-48 h-48 rounded-2xl -z-10" style={{backgroundColor: '#CECDCB'}}></div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              {/* Mission */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{backgroundColor: 'rgba(248, 228, 139, 0.2)'}}>
                    🎯
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {t.missionTitle}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg pl-20">
                  {t.missionDesc}
                </p>
              </div>

              {/* Vision */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{backgroundColor: 'rgba(191, 156, 74, 0.2)'}}>
                    👁️
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {t.visionTitle}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg pl-20">
                  {t.visionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-[#f7f4f1] px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
              {lang === "en" ? "Why Almahy" : "لماذا الماحي"}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#160A0A] md:text-4xl">
              {lang === "en"
                ? "What clients notice after working with us"
                : "ما يلاحظه العملاء بعد العمل معنا"}
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[#5c534c]">
              {lang === "en"
                ? "Less generic promises. More of how we actually run files in the UAE."
                : "وعود أقل عمومية. ومزيد من الطريقة التي ندير بها الملفات فعلياً في الإمارات."}
            </p>
          </div>

          <div className="divide-y divide-[#160A0A]/10 border-y border-[#160A0A]/10">
            {whyChooseCards.map((item) => (
              <div
                key={item.number}
                className={`grid gap-3 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6 ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <span className="text-sm font-semibold tracking-[0.14em] text-[#DE3B34]">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#160A0A] md:text-xl">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#5c534c]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <div className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 md:mb-16">
            <p className="font-semibold tracking-[0.16em] uppercase text-xs mb-3" style={{color: '#CECDCB'}}>
              {lang === 'en' ? 'Professional Experts' : 'خبراء محترفون'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {lang === 'en' ? 'Our Team' : 'فريقنا'}
            </h2>
            <div className="flex justify-center">
              <div className="h-[3px] w-20 rounded-full" style={{backgroundColor: '#DE3B34'}}></div>
            </div>
            <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              {lang === 'en' ? 'Meet our dedicated staff who drive our success.' : 'تعرف على فريق العمل المتميز لدينا.'}
            </p>
          </div>
          <TeamMosaic members={getTeamCards()} locale={lang} />
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 md:px-8 bg-[#160A0A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            {lang === 'en' ? 'Speak with Our Legal Experts Today' : 'هل أنت مستعد للبدء؟'}
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed">
            {lang === 'en' ? 'Whether you\'re starting a business, resolving a dispute, or seeking trusted legal advice, our experienced team is here to help. Contact us today to schedule your consultation.' : 'اتصل بنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا مساعدة عملك على النجاح.'}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center gap-2 border border-[#DE3B34] bg-[#DE3B34] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-transparent hover:text-white"
          >
            {lang === 'en' ? 'Book a Consultation' : 'تواصل معنا'}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
