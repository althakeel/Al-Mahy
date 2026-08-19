import { Locale } from "@/lib/translations";
import Image from "next/image";
import Link from "next/link";

export default async function AccountingServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const isArabic = lang === "ar";

  const content = {
    en: {
      heroTitle: "Accounting Services",
      heroSubtitle:
        "Professional accounting, bookkeeping, VAT, corporate tax, payroll, and financial compliance services for businesses across the UAE",
      mainTitle: "Professional Accounting Solutions",
      mainDesc:
        "Our accounting professionals help businesses maintain accurate financial records, meet UAE tax and regulatory requirements, and make informed financial decisions. We provide reliable accounting, bookkeeping, payroll, VAT, corporate tax, and financial reporting services tailored to businesses of all sizes.",
      services: [
        {
          title: "Bookkeeping Services",
          desc: "Record daily transactions, reconcile accounts, and maintain organized financial records that support compliance and reporting.",
        },
        {
          title: "Financial Accounting & Reporting",
          desc: "Maintain accurate financial records, prepare financial statements, and deliver timely reports to support informed business decisions.",
        },
        {
          title: "Financial Statement Preparation",
          desc: "Prepare professionally structured balance sheets, income statements, cash flow statements, and other statutory financial reports.",
        },
        {
          title: "VAT & Corporate Tax",
          desc: "Prepare VAT and corporate tax returns, ensure regulatory compliance, and provide practical tax planning for UAE businesses.",
        },
        {
          title: "Payroll Management",
          desc: "Process employee salaries accurately while managing payroll records, statutory deductions, and compliance requirements.",
        },
        {
          title: "Cost Control & Analysis",
          desc: "Track business costs, analyze financial performance, and identify opportunities to improve profitability and operational efficiency.",
        },
        {
          title: "Financial Advisory & Management Reporting",
          desc: "Provide management reports, budgeting support, and financial insights that help business owners make confident strategic decisions.",
        },
        {
          title: "Accounting System Setup",
          desc: "Implement and configure accounting systems tailored to your business operations for efficient financial management.",
        },
      ],
      whyUs: [
        {
          title: "UAE Compliance Experts",
          desc: "Our accountants ensure your business complies with UAE VAT, Corporate Tax, and financial reporting requirements while minimizing compliance risks.",
        },
        {
          title: "End-to-End Business Support",
          desc: "From bookkeeping and payroll to tax filing and financial reporting, we provide complete accounting solutions under one roof.",
        },
        {
          title: "Accurate & Timely Reporting",
          desc: "Receive reliable financial records and timely reports that help you make confident business decisions and maintain operational transparency.",
        },
        {
          title: "Trusted Compliance Partner",
          desc: "Helping businesses meet UAE financial regulations while reducing operational and tax risks.",
        },
      ],
      ctaText: "Book a Consultation",
      chips: ["VAT", "Corporate Tax", "Bookkeeping", "Payroll", "Financial Reporting"],
    },
    ar: {
      heroTitle: "خدمات المحاسبة",
      heroSubtitle:
        "خدمات محاسبة ومسك دفاتر وضريبة القيمة المضافة وضريبة الشركات والرواتب والامتثال المالي للشركات في جميع أنحاء الإمارات",
      mainTitle: "حلول محاسبية احترافية",
      mainDesc:
        "نقدّم في الماحي للخدمات القانونية خدمات محاسبية احترافية من خلال محاسبين مؤهلين بخبرة واسعة في مختلف أنشطة الشركات. يعتمد نجاح أي مؤسسة على فعالية نظامها المحاسبي والمالي، والمحاسب المحترف هو حجر الزاوية في هذا النظام.",
      services: [
        { title: "خدمات مسك الدفاتر", desc: "تسجيل المعاملات اليومية الدقيق والمطابقة والوثائق المالية المنظمة." },
        { title: "المحاسبة المالية والتقارير", desc: "مسك دفاتر مالية كاملة وإعداد القوائم وإعداد تقارير شاملة لاتخاذ قرارات مستنيرة." },
        { title: "إعداد القوائم المالية", desc: "إعداد احترافي للميزانية العمومية وبيانات الدخل وبيانات التدفق النقدي." },
        { title: "ضريبة القيمة المضافة وضريبة الشركات", desc: "خدمات تخطيط وإعداد وامتثال ضريبية متخصصة لتقليل الالتزامات وضمان الالتزام التنظيمي." },
        { title: "إدارة الرواتب", desc: "معالجة كشوف المرتبات بكفاءة وإدارة سجلات الموظفين وإدارة الرواتب الشاملة." },
        { title: "محاسبة التكاليف والتحليل", desc: "تتبع وتحليل وتحسين التكاليف التفصيلية لتحسين الربحية والكفاءة التشغيلية." },
        { title: "الاستشارات المالية والتقارير الإدارية", desc: "رؤى مالية استراتيجية ومقاييس أداء للإدارة الفعالة للأعمال والنمو." },
        { title: "إعداد النظام المحاسبي", desc: "تنفيذ وتكوين نظام محاسبي مخصص مصمم خصيصًا لاحتياجات عملك." },
      ],
      whyUs: [
        { title: "خبراء امتثال إماراتيون", desc: "نضمن امتثال أعمالك لضريبة القيمة المضافة وضريبة الشركات ومتطلبات التقارير المالية." },
        { title: "دعم متكامل للأعمال", desc: "من مسك الدفاتر والرواتب إلى الإقرارات الضريبية والتقارير المالية تحت سقف واحد." },
        { title: "تقارير دقيقة وفي الوقت", desc: "سجلات مالية موثوقة وتقارير في مواعيدها لدعم قرارات أوضح." },
        { title: "شريك امتثال موثوق", desc: "نساعد الشركات على تلبية الأنظمة المالية الإماراتية وتقليل المخاطر." },
      ],
      ctaText: "احجز استشارة",
      chips: ["ضريبة القيمة المضافة", "ضريبة الشركات", "مسك الدفاتر", "الرواتب", "التقارير المالية"],
    },
  };

  const pageContent = content[lang];

  return (
    <div
      className={`min-h-screen bg-white text-[#160A0A] ${isArabic ? "text-right" : "text-left"}`}
      dir={isArabic ? "rtl" : "ltr"}
      lang={lang}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#160A0A] pt-28 text-white md:pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1800&h=900&fit=crop"
            alt=""
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className={`absolute inset-0 ${isArabic ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#160A0A]/95 via-[#160A0A]/80 to-[#160A0A]/50`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160A0A]/80 via-transparent to-[#160A0A]/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1250px] px-4 pb-14 md:px-8 md:pb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            {isArabic ? "الماحي · المحاسبة" : "Almahy · Accounting"}
          </p>
          <h1
            className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Georgia, serif", textShadow: "0 2px 18px rgba(0,0,0,0.45)" }}
          >
            {pageContent.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            {pageContent.heroSubtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {pageContent.chips.map((chip) => (
              <span
                key={chip}
                className="border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/971504096028?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-[#DE3B34] bg-[#DE3B34] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-transparent"
            >
              {pageContent.ctaText}
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center border border-white/70 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-[#160A0A]"
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-[#160A0A]/10 bg-[#F1EFF0] py-14 md:py-16">
        <div className="mx-auto grid max-w-[1250px] gap-8 px-4 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
              {isArabic ? "حلولنا" : "Our solutions"}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#160A0A] md:text-4xl">
              {pageContent.mainTitle}
            </h2>
          </div>
          <p className="text-base leading-8 text-[#160A0A]/75 lg:col-span-8">
            {pageContent.mainDesc}
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <div className="mb-10 border-b border-[#160A0A]/10 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
              {isArabic ? "الخدمات" : "Services"}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#160A0A] md:text-4xl">
              {isArabic ? "ماذا نقدّم" : "What we deliver"}
            </h2>
          </div>

          <div className="divide-y divide-[#160A0A]/10 border border-[#160A0A]/10">
            {pageContent.services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-3 p-6 md:grid-cols-[80px_1fr] md:gap-6 md:p-8"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-[#DE3B34]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#160A0A]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#160A0A]/70 md:text-base">
                    {service.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#160A0A] py-16 text-white md:py-20">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <h2 className="max-w-3xl text-3xl font-bold md:text-4xl">
            {isArabic
              ? "لماذا تختار الماحي للخدمات القانونية للمحاسبة؟"
              : "Why Choose Almahy Legal Services Accounting?"}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pageContent.whyUs.map((item, index) => (
              <div key={item.title} className="border-t border-white/20 pt-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#F0716B]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#160A0A] py-20 text-white md:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&h=700&fit=crop"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#160A0A]/75" />
          <div className={`absolute inset-0 ${isArabic ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#160A0A] via-[#160A0A]/85 to-[#160A0A]/45`} />
        </div>

        <div className="relative z-10 mx-auto max-w-[1250px] px-4 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F0716B]">
            {isArabic ? "ابدأ الآن" : "Get started"}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
            {isArabic ? "تواصل معنا اليوم" : "Get In Touch Today"}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            {isArabic
              ? "سواء كنت تطلق شركة ناشئة أو تدير عملاً قائمًا، فريقنا جاهز للمساعدة في مسك الدفاتر والامتثال الضريبي والرواتب والتقارير المالية."
              : "Whether you are launching a startup or managing an established business, our accounting professionals are ready to help with bookkeeping, tax compliance, payroll, and financial reporting across the UAE."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/971504096028?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20accounting%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-[#DE3B34] bg-[#DE3B34] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-transparent"
            >
              {pageContent.ctaText}
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center border border-white/70 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-[#160A0A]"
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
