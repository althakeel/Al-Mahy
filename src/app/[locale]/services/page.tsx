import { translations, Locale } from "@/lib/translations";
import Link from "next/link";
import Image from "next/image";

const serviceImages: Record<string, string> = {
  "legal-services": "/assets/services/legal-team-v6.webp",
  "corporate-services": "/assets/services/corporate-team.webp",
  "notary-public-services": "/assets/services/notory.webp",
  "accounting-services": "/assets/services/accounting.webp",
  "second-passport": "/assets/services/passport.webp",
  "expert-reports": "/assets/services/reports.webp",
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const t = translations[lang];
  const isArabic = lang === "ar";

  const services =
    lang === "ar"
      ? [
          {
            slug: "legal-services",
            title: "الخدمات القانونية",
            description:
              "خدمات قانونية متخصصة في دبي للأفراد والشركات، تشمل الاستشارات وصياغة العقود وتسوية النزاعات ودعم التقاضي والنصح القانوني الاستراتيجي.",
          },
          {
            slug: "corporate-services",
            title: "خدمات الشركات",
            description:
              "خدمات مؤسسية شاملة للشركات الناشئة والصغيرة والمتوسطة والقائمة، تشمل التأسيس والحوكمة والامتثال والتراخيص وإعادة الهيكلة والدعم القانوني المستمر في الإمارات.",
          },
          {
            slug: "notary-public-services",
            title: "خدمات الكاتب العدل",
            description:
              "خدمات كاتب عدل احترافية تشمل إعداد التوكيلات وتوثيق المستندات والإقرارات والتصديقات والشهادات وفق المتطلبات الحكومية والقانونية.",
          },
          {
            slug: "accounting-services",
            title: "خدمات المحاسبة",
            description:
              "خدمات محاسبية موثوقة لمساعدة الشركات على الحفاظ على الدقة المالية والامتثال التنظيمي وضريبة القيمة المضافة وضريبة الشركات ومسك الدفاتر والرواتب والتقارير المالية في الإمارات.",
          },
          {
            slug: "second-passport",
            title: "الجواز الثاني",
            description:
              "إرشاد احترافي لبرامج الجنسية الثانية والإقامة عبر الاستثمار، يشمل تقييم الأهلية وتجهيز المستندات وإدارة الطلبات والدعم الكامل للتنقل الدولي.",
          },
          {
            slug: "expert-reports",
            title: "تقارير الخبرة",
            description:
              "إعداد تقارير خبرة ووثائق قانونية احترافية لدعم النزاعات التجارية والإجراءات القضائية والتحكيم ومطالبات التأمين والمسائل الفنية بتحليل واضح قائم على الأدلة.",
          },
        ]
      : [
          {
            slug: "legal-services",
            title: "LEGAL SERVICES",
            description:
              "Expert legal services in Dubai for individuals and businesses, including legal consultation, contract drafting, dispute resolution, litigation support, and strategic legal advice.",
          },
          {
            slug: "corporate-services",
            title: "CORPORATE SERVICES",
            description:
              "Comprehensive corporate services for startups, SMEs, and established businesses, including company formation, business setup, governance, compliance, licensing, restructuring, and ongoing corporate legal support throughout the UAE.",
          },
          {
            slug: "notary-public-services",
            title: "NOTARY PUBLIC SERVICES",
            description:
              "Professional notary public services, including power of attorney preparation, document notarization, legal declarations, attestations, and certification to ensure your documents meet all legal and government requirements.",
          },
          {
            slug: "accounting-services",
            title: "ACCOUNTING SERVICES",
            description:
              "Reliable accounting services designed to help businesses maintain financial accuracy, regulatory compliance, VAT and corporate tax obligations, bookkeeping, payroll, and financial reporting across the UAE.",
          },
          {
            slug: "second-passport",
            title: "SECOND PASSPORT",
            description:
              "Professional guidance on second citizenship and residency-by-investment programs, including eligibility assessment, document preparation, application management, and end-to-end support for international mobility.",
          },
          {
            slug: "expert-reports",
            title: "EXPERT REPORTS",
            description:
              "Preparation of professional expert reports and legal documentation to support commercial disputes, court proceedings, arbitration, insurance claims, and technical matters with clear, evidence-based analysis.",
          },
        ];

  const featured = services[0];
  const rest = services.slice(1);

  return (
    <div
      className={`min-h-screen bg-white text-[#160A0A] ${isArabic ? "text-right" : "text-left"}`}
      dir={isArabic ? "rtl" : "ltr"}
      lang={lang}
    >
      {/* Compact hero */}
      <section className="border-b border-[#160A0A]/10 bg-[#160A0A] pt-28 text-white md:pt-32">
        <div className="mx-auto max-w-[1250px] px-4 pb-12 md:px-8 md:pb-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                {isArabic ? "الماحي · خدماتنا" : "Almahy · Our Services"}
              </p>
              <h1
                className="mt-4 max-w-4xl whitespace-pre-line text-3xl font-bold leading-[1.08] text-white md:text-5xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {t.servicesPageTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                {t.servicesIntro}
              </p>
            </div>
            <div className={`flex flex-wrap gap-3 lg:col-span-4 lg:justify-end ${isArabic ? "lg:justify-start" : ""}`}>
              <a
                href="https://wa.me/971504096028?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[#DE3B34] bg-[#DE3B34] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-transparent"
              >
                {t.contactButton}
              </a>
              <a
                href="#services"
                className="inline-flex items-center border border-white/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-[#160A0A]"
              >
                {isArabic ? "استعرض الخدمات" : "Browse Services"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky directory */}
      <section className="sticky top-0 z-20 border-b border-[#160A0A]/10 bg-[#F1EFF0]/95 backdrop-blur">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="shrink-0 border border-transparent px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#160A0A]/65 transition-colors hover:border-[#160A0A]/15 hover:bg-white hover:text-[#DE3B34]"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured legal services */}
      <section className="bg-[#F1EFF0]">
        <div className="mx-auto grid max-w-[1250px] lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[460px]">
            <Image
              src={serviceImages[featured.slug]}
              alt={featured.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div id={featured.slug} className="flex scroll-mt-24 flex-col justify-center px-6 py-12 md:px-12 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
              01
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#160A0A] md:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#160A0A]/75">
              {featured.description}
            </p>
            <Link
              href={`/${lang}/${featured.slug}`}
              className="mt-8 inline-flex w-fit items-center border border-[#160A0A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#160A0A] transition-colors hover:bg-[#160A0A] hover:text-white"
            >
              {isArabic ? "اعرف المزيد" : "Learn More"}
            </Link>
          </div>
        </div>
      </section>

      {/* Remaining services list */}
      <section id="services" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <div className="mb-10 border-b border-[#160A0A]/10 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
              {isArabic ? "مجالات الممارسة" : "Practice areas"}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#160A0A] md:text-4xl">
              {isArabic ? "خدماتنا" : "Our services"}
            </h2>
          </div>

          <div className="divide-y divide-[#160A0A]/10 border border-[#160A0A]/10">
            {rest.map((service, index) => (
              <Link
                key={service.slug}
                id={service.slug}
                href={`/${lang}/${service.slug}`}
                className="group grid scroll-mt-24 gap-6 p-6 transition-colors hover:bg-[#F1EFF0] md:grid-cols-12 md:gap-8 md:p-8"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#160A0A]/5 md:col-span-4 md:aspect-auto md:min-h-[160px]">
                  <Image
                    src={serviceImages[service.slug]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex gap-4 md:col-span-8">
                  <span className="pt-1 text-xs font-semibold tracking-[0.14em] text-[#DE3B34]">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-[#160A0A] transition-colors group-hover:text-[#DE3B34] md:text-2xl">
                        {service.title}
                      </h3>
                      <span className="mt-1 shrink-0 text-[#DE3B34] transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                        →
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#160A0A]/70 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#160A0A] py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-[1250px] flex-col items-start gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold md:text-4xl">{t.servicesCTA}</h2>
            <p className="mt-3 text-base leading-7 text-white/70">{t.servicesCTADesc}</p>
          </div>
          <a
            href="https://wa.me/971504096028?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-[#DE3B34] bg-[#DE3B34] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-transparent"
          >
            {t.contactButton}
          </a>
        </div>
      </section>
    </div>
  );
}
