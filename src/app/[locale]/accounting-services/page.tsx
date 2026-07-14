import { translations, Locale } from "@/lib/translations";
import Image from "next/image";

export default async function AccountingServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";

  const content = {
    en: {
      heroTitle: "Accounting Services",
      heroSubtitle: "Professional accounting, bookkeeping, VAT, corporate tax, payroll, and financial compliance services for businesses across the UAE",
      mainTitle: "Professional Accounting Solutions",
      mainDesc: "Our accounting professionals help businesses maintain accurate financial records, meet UAE tax and regulatory requirements, and make informed financial decisions. We provide reliable accounting, bookkeeping, payroll, VAT, corporate tax, and financial reporting services tailored to businesses of all sizes.",
      services: [
        {
  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  title: "Bookkeeping Services",
  desc: "Record daily transactions, reconcile accounts, and maintain organized financial records that support compliance and reporting."
},
{
  icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  title: "Financial Accounting & Reporting",
  desc: "Maintain accurate financial records, prepare financial statements, and deliver timely reports to support informed business decisions."
},
{
  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  title: "Financial Statement Preparation",
  desc: "Prepare professionally structured balance sheets, income statements, cash flow statements, and other statutory financial reports."
},
{
  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  title: "VAT & Corporate Tax",
  desc: "Prepare VAT and corporate tax returns, ensure regulatory compliance, and provide practical tax planning for UAE businesses."
},
{
  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  title: "Payroll Management",
  desc: "Process employee salaries accurately while managing payroll records, statutory deductions, and compliance requirements."
},
{
  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  title: "Cost Control & Analysis",
  desc: "Track business costs, analyze financial performance, and identify opportunities to improve profitability and operational efficiency."
},
{
  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  title: "Financial Advisory & Management Reporting",
  desc: "Provide management reports, budgeting support, and financial insights that help business owners make confident strategic decisions."
},
{
  icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  title: "Accounting System Setup",
  desc: "Implement and configure accounting systems tailored to your business operations for efficient financial management."
},
      ],
      whyUs: [
        { title: "UAE Compliance Experts", desc: "Our accountants ensure your business complies with UAE VAT, Corporate Tax, and financial reporting requirements while minimizing compliance risks." },
        { title: "End-to-End Business Support", desc: "From bookkeeping and payroll to tax filing and financial reporting, we provide complete accounting solutions under one roof." },
        { title: "Accurate & Timely Reporting", desc: "Receive reliable financial records and timely reports that help you make confident business decisions and maintain operational transparency." },
        { title: "Trusted Compliance Partner", desc: "Helping businesses meet UAE financial regulations while reducing operational and tax risks." }
      ],
      ctaText: "Book a Consultation"
    },
    ar: {
      heroTitle: "خدمات المحاسبة",
      heroSubtitle: "حلول مالية شاملة لنجاح أعمالك",
      mainTitle: "حلول محاسبية احترافية",
      mainDesc: "توفر شركة الخليج ستار للمحاسبة خدمات محاسبية من خلال محاسبين محترفين مؤهلين يتمتعون بخبرة واسعة في مختلف أنشطة الشركات. يعتمد نجاح أي مؤسسة على فعالية نظامها المحاسبي والمالي، والمحاسب المحترف المختص هو حجر الزاوية في هذا النظام.",
      services: [
        { icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", title: "المحاسبة المالية", desc: "مسك دفاتر مالية كاملة وإعداد القوائم وإعداد تقارير شاملة لاتخاذ قرارات مستنيرة." },
        { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "محاسبة التكاليف", desc: "تتبع وتحليل وتحسين التكاليف التفصيلية لتحسين الربحية والكفاءة التشغيلية." },
        { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "المحاسبة الضريبية", desc: "خدمات تخطيط وإعداد وامتثال ضريبية متخصصة لتقليل الالتزامات وضمان الالتزام التنظيمي." },
        { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "إدارة الرواتب", desc: "معالجة كشوف المرتبات بكفاءة وإدارة سجلات الموظفين وإدارة الرواتب الشاملة." },
        { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", title: "إعداد المحاسبة", desc: "تنفيذ وتكوين نظام محاسبي مخصص مصمم خصيصًا لاحتياجات عملك." },
        { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "المحاسبة الإدارية", desc: "رؤى مالية استراتيجية ومقاييس أداء للإدارة الفعالة للأعمال والنمو." },
        { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", title: "خدمات مسك الدفاتر", desc: "تسجيل المعاملات اليومية الدقيق والمطابقة والوثائق المالية المنظمة." },
        { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", title: "القوائم المالية", desc: "إعداد احترافي للميزانية العمومية وبيانات الدخل وبيانات التدفق النقدي." },
      ],
      whyUs: [
        { title: "خبراء معتمدون", desc: "فريق من المحاسبين القانونيين المؤهلين ذوي الخبرة المثبتة" },
        { title: "حلول شاملة", desc: "خدمات محاسبية شاملة مصممة حسب احتياجاتك" },
        { title: "مدعوم بالتكنولوجيا", desc: "برامج محاسبية حديثة وحلول قائمة على السحابة" },
        { title: "ضمان الامتثال", desc: "امتثال تنظيمي كامل ودعم التدقيق" }
      ],
      ctaText: "حدد موعد استشارة"
    }
  };

  const pageContent = content[lang];
  const heroServiceItems = [
    { label: "VAT", kind: "vat" },
    { label: "Corporate Tax", kind: "building" },
    { label: "Bookkeeping", kind: "calculator" },
    { label: "Payroll", kind: "people" },
    { label: "Financial Reporting", kind: "report" },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[720px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1800&h=900&fit=crop"
          alt="Accounting and tax services in the UAE"
          fill
          priority
          className="object-cover object-[82%_center]"
        />
        <div className="absolute inset-0 bg-[#06162b]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#031022] via-[#071b34]/90 to-[#071b34]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#031022]/75"></div>
        
        <div className="relative flex min-h-[720px] max-w-[1250px] mx-auto px-4 md:px-8 items-center pt-28 pb-14">
          <div className="w-full">
            <div className="hidden">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              <span className="text-amber-300 text-sm font-medium">Accounting & Tax Experts</span>
            </div>
            <h1 className="text-5xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-none tracking-tight drop-shadow-2xl">
              {pageContent.heroTitle}
            </h1>
            <p className="text-2xl md:text-2x`xl text-slate-200 mb-12 leading-relaxed max-w-6xl">
              {pageContent.heroSubtitle}
            </p>
            <a
              href="https://wa.me/971504096028?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-5 rounded-[20px] bg-gradient-to-r from-amber-200 to-orange-500 px-6 py-4 text-2xl font-extrabold text-white shadow-2xl shadow-orange-900/35 transition-all hover:scale-105 hover:from-amber-300 hover:to-orange-500"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {pageContent.ctaText}
            </a>
            <p className="hidden">
              ✔ UAE VAT & Corporate Tax • ✔ Bookkeeping • ✔ Payroll • ✔ Financial Reporting
            </p>
            <div className="mt-14 flex flex-wrap items-center gap-y-6 lg:flex-nowrap">
              {heroServiceItems.map((item, index) => (
                <div key={item.label} className="flex items-center">
                  {index > 0 && <span className="mx-5 hidden h-12 w-px bg-orange-400/80 md:block xl:mx-7" />}
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-orange-400 text-orange-400">
                      {item.kind === "vat" && (
                        <span className="text-xl font-extrabold">VAT</span>
                      )}
                      {item.kind === "building" && (
                        <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 21h16M6 21V7l6-3 6 3v14M9 10h.01M12 10h.01M15 10h.01M9 14h.01M12 14h.01M15 14h.01M9 18h.01M12 18h.01M15 18h.01" />
                        </svg>
                      )}
                      {item.kind === "calculator" && (
                        <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zM8 7h8M8 11h2M12 11h2M16 11h.01M8 15h2M12 15h2M16 15h.01M8 18h2M12 18h2M16 18h.01" />
                        </svg>
                      )}
                      {item.kind === "people" && (
                        <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 10a4 4 0 10-8 0 4 4 0 008 0zM4 21a8 8 0 0116 0M19 9a3 3 0 010 6M22 21a6 6 0 00-4-5.66" />
                        </svg>
                      )}
                      {item.kind === "report" && (
                        <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 3h7l5 5v13H7V3zM14 3v5h5M10 17v-4M13 17v-6M16 17v-3M10 19h7" />
                        </svg>
                      )}
                    </span>
                    <span className="whitespace-nowrap pr-1 text-xl font-semibold text-white md:text-2xl lg:text-xl xl:text-2xl">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="hidden">
              VAT • Corporate Tax • Bookkeeping • Payroll • Financial Reporting
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-20 px-4 md:px-8 bg-slate-950">
        <div className="max-w-[1250px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {pageContent.mainTitle}
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-20 bg-amber-500 rounded"></div>
            </div>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              {pageContent.mainDesc}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] rounded-2xl p-6 border border-white/10 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-3 text-lg group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              {lang === 'en' ? 'Why Choose Almahy Legal Services Accounting?' : 'لماذا تختار الخليج ستار للمحاسبة؟'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageContent.whyUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch CTA Section */}
      <section className="relative w-full min-h-[620px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&h=450&fit=crop"
          alt="Speak with Our Accounting Experts"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/90"></div>

        {/* Content */}
        <div className="relative flex min-h-[620px] items-center justify-center px-4 py-16">
          <div className="text-center max-w-6xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {lang === 'en' ? 'Get In Touch Today' : 'تواصل معنا اليوم'}
            </h2>
            <p className="text-slate-200 text-xl mb-10 leading-relaxed">
              {lang === 'en' 
                ? 'Whether you are launching a startup or managing an established business, our accounting professionals are ready to help with bookkeeping, tax compliance, payroll, and financial reporting across the UAE.' 
                : 'تواصل معنا اليوم وشاهد كيف يمكن للمحاسبة السلسة والموثوقة أن تدفع مرحلة النمو القادمة لديك.'}
            </p>
            
            <a
              href="https://wa.me/971504096028?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20accounting%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-12 py-4 rounded-md transition-colors shadow-xl uppercase tracking-widest text-sm"
            >
              {lang === 'en' ? 'Book a Consultation' : 'احصل على عرض أسعار'}
            </a>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-y-6 lg:flex-nowrap">
              {heroServiceItems.map((item, index) => (
                <div key={item.label} className="flex items-center">
                  {index > 0 && <span className="mx-5 hidden h-12 w-px bg-orange-400/80 md:block xl:mx-7" />}
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-orange-400 text-orange-400">
                      {item.kind === "vat" && (
                        <span className="text-xl font-extrabold">VAT</span>
                      )}
                      {item.kind === "building" && (
                        <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 21h16M6 21V7l6-3 6 3v14M9 10h.01M12 10h.01M15 10h.01M9 14h.01M12 14h.01M15 14h.01M9 18h.01M12 18h.01M15 18h.01" />
                        </svg>
                      )}
                      {item.kind === "calculator" && (
                        <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zM8 7h8M8 11h2M12 11h2M16 11h.01M8 15h2M12 15h2M16 15h.01M8 18h2M12 18h2M16 18h.01" />
                        </svg>
                      )}
                      {item.kind === "people" && (
                        <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 10a4 4 0 10-8 0 4 4 0 008 0zM4 21a8 8 0 0116 0M19 9a3 3 0 010 6M22 21a6 6 0 00-4-5.66" />
                        </svg>
                      )}
                      {item.kind === "report" && (
                        <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 3h7l5 5v13H7V3zM14 3v5h5M10 17v-4M13 17v-6M16 17v-3M10 19h7" />
                        </svg>
                      )}
                    </span>
                    <span className="whitespace-nowrap text-xl font-semibold text-white">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
