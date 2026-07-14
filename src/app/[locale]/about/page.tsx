import { translations, Locale } from "@/lib/translations";
import { teamMembers } from "@/lib/teamMembers";
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
      title: lang === "en" ? "Experienced Legal Professionals" : t.why1Title,
      desc: lang === "en" ? "Our team of qualified lawyers and legal consultants provides practical guidance across corporate, litigation, notary, and advisory services." : t.why1Desc,
      icon: "M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4zM9 12l2 2 4-5",
    },
    {
      title: lang === "en" ? "Trusted Legal Solutions" : t.why2Title,
      desc: lang === "en" ? "We deliver accurate, timely, and compliant legal support tailored to the needs of individuals, investors, and businesses in the UAE." : t.why2Desc,
      icon: "M9 12l2 2 4-5M12 3a9 9 0 100 18 9 9 0 000-18z",
    },
    {
      title: lang === "en" ? "Comprehensive Services" : t.why3Title,
      desc: lang === "en" ? "From company formation and contracts to dispute resolution and court representation, we provide end-to-end legal solutions under one roof." : t.why3Desc,
      icon: "M4 6h16M4 12h16M4 18h16M7 6v12M17 6v12",
    },
    {
      title: lang === "en" ? "Client-Centered Approach" : t.why4Title,
      desc: lang === "en" ? "Every client receives personalized attention, transparent communication, and strategic legal advice focused on achieving the best possible outcome." : t.why4Desc,
      icon: "M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 11a4 4 0 100-8 4 4 0 000 8zM21 21v-2a4 4 0 00-3-3.87M17 3.13a4 4 0 010 7.75",
    },
  ];

  return (
    <div className="min-h-screen" dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <p className="font-semibold mb-2 tracking-wider uppercase text-sm" style={{color: '#ca807e'}}>
            {lang === 'en' ? 'Driven by Precision, Built on Trust' : 'مدفوعون بالدقة، مبنيون على الثقة'}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {lang === 'en' ? 'About us' : 'من نحن'}
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {lang === 'en' ? 'Home / About us' : 'الرئيسية / من نحن'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href={`/${lang}/contact`}
              className="text-gray-900 font-bold px-8 py-3 rounded-full transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              style={{backgroundColor: '#c67471'}}
            >
              📅 {lang === 'en' ? 'Book Free Consultation' : 'احجز استشارة مجانية'}
            </Link>
            <a 
              href="tel:+971504096028"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-8 py-3 rounded-full transition-all flex items-center gap-2"
            >
               {lang === 'en' ? 'Call Us' : 'اتصل بنا'}
            </a>
          </div>
        </div>
      </div>

      {/* Credibility Stats */}
      <section className="bg-white px-4 py-8 sm:py-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat, index) => (
              <div
                key={stat.label}
                className="group animate-fadeIn rounded-2xl border border-gray-100 bg-white px-5 py-7 text-center shadow-lg shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#DE3B34]/30 hover:shadow-2xl hover:shadow-[#DE3B34]/10"
                style={{ animationDelay: `${index * 90}ms`, animationFillMode: "both" }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DE3B34]/10 text-[#DE3B34] transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={stat.icon} />
                  </svg>
                </div>
                <p className="text-4xl font-black text-gray-900 md:text-5xl">{stat.value}</p>
                <p className={`mx-auto mt-2 max-w-[11rem] text-sm font-bold tracking-[0.12em] text-gray-600 ${lang === 'ar' ? 'normal-case' : 'uppercase'}`}>
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
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" 
                  alt="Team meeting" 
                  className="w-full h-[600px] object-cover"
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
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900" 
                  alt="Legal consultation and documents" 
                  className="w-full h-[500px] object-cover"
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
      <div className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.whyChooseTitle}
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 rounded" style={{backgroundColor: '#DE3B34'}}></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6" style={{backgroundColor: '#DE3B34'}}>
                ⚖️
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">{whyChooseCards[0].title}</h4>
              <p className="text-gray-600 leading-relaxed">{whyChooseCards[0].desc}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6" style={{backgroundColor: '#DE3B34'}}>
                🌍
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">{whyChooseCards[1].title}</h4>
              <p className="text-gray-600 leading-relaxed">{whyChooseCards[1].desc}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6" style={{backgroundColor: '#DE3B34'}}>
                💼
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">{whyChooseCards[2].title}</h4>
              <p className="text-gray-600 leading-relaxed">{whyChooseCards[2].desc}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-6" style={{backgroundColor: '#DE3B34'}}>
                🤝
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">{whyChooseCards[3].title}</h4>
              <p className="text-gray-600 leading-relaxed">{whyChooseCards[3].desc}</p>
            </div>
          </div>
        </div>
      </div>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/${lang}/about/team/${member.slug}`}
                className="group relative block h-[380px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_12px_24px_-18px_rgba(15,23,42,0.45)] hover:-translate-y-1 hover:shadow-[0_18px_32px_-18px_rgba(15,23,42,0.45)] transition-all duration-300"
              >
                <img
                  src={member.photo}
                  alt={lang === "ar" ? member.nameAr : member.nameEn}
                  className="h-full w-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/35 backdrop-blur-sm px-4 py-3 text-center">
                  <h4 className={`text-white text-[28px] font-bold leading-[1.12] tracking-[-0.015em] ${lang === "en" ? "uppercase" : ""}`}>
                    {lang === "ar" ? member.nameAr : member.nameEn}
                  </h4>
                  <p className={`mt-1 text-xs uppercase tracking-[0.12em] font-medium text-white/80 ${lang === "ar" ? "normal-case" : ""}`}>
                    {lang === "ar" ? member.positionAr : member.positionEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {lang === 'en' ? 'Speak with Our Legal Experts Today' : 'هل أنت مستعد للبدء؟'}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {lang === 'en' ? 'Whether you\'re starting a business, resolving a dispute, or seeking trusted legal advice, our experienced team is here to help. Contact us today to schedule your consultation.' : 'اتصل بنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا مساعدة عملك على النجاح.'}
          </p>
          <Link 
            href={`/${lang}/contact`}
            className="inline-block text-gray-900 font-bold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-lg"
            style={{backgroundColor: '#DE3B34'}}
          >
            {lang === 'en' ? 'Book a Consultation' : 'تواصل معنا!'}
          </Link>
        </div>
      </div>
    </div>
  );
}
