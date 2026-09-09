import { Locale } from "@/lib/translations";
import { getServiceShowcaseItems } from "@/lib/services-showcase";
import ServiceShowcaseBlock from "@/components/ServiceShowcaseBlock";
import ServicesPageHero from "@/components/ServicesPageHero";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const isArabic = lang === "ar";
  const services = getServiceShowcaseItems(lang);

  return (
    <div
      className={`min-h-screen bg-white text-[#160A0A] ${isArabic ? "text-right" : "text-left"}`}
      dir={isArabic ? "rtl" : "ltr"}
      lang={lang}
    >
      <ServicesPageHero locale={lang} services={services} />

      <div id="services">
        {services.map((service, index) => (
          <ServiceShowcaseBlock
            key={service.slug}
            item={service}
            index={index}
            locale={lang}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
