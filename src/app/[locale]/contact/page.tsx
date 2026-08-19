import { translations, Locale } from "@/lib/translations";
import ContactForm from "./ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const t = translations[lang];
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const details = [
    {
      label: t.address,
      lines: isAr
        ? ["برج الصقر للأعمال، الطابق الثاني", "شارع الشيخ زايد، مركز دبي المالي العالمي، دبي"]
        : ["Al Saqr Business Tower, 2nd Floor", "Sheikh Zayed Rd, DIFC, Dubai, UAE"],
    },
    {
      label: t.phone,
      lines: ["+971 4264 8831", "+971 5040 96028"],
      hrefs: ["tel:+97142648831", "tel:+971504096028"],
    },
    {
      label: t.email,
      lines: ["info@almahy.com", "legal@almahy.com"],
      hrefs: ["mailto:info@almahy.com", "mailto:legal@almahy.com"],
    },
    {
      label: t.hours,
      lines: [t.hoursWeekdays, t.hoursWeekend],
    },
  ];

  return (
    <div dir={dir} className="bg-[#160A0A] text-white">
      <section className="border-b border-white/10 pt-28 pb-10 sm:pt-32 sm:pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F0716B]">
            {isAr ? "تواصل معنا" : "Contact"}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {isAr ? "اتصل بنا" : "Contact us"}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            {isAr
              ? "للاستشارات والملفات العاجلة. نرد عادة خلال يوم عمل واحد."
              : "For consultations and urgent files. We usually reply within one business day."}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold text-white sm:text-2xl">{t.sendMessage}</h2>
          <p className="mt-1 text-sm text-white/65">
            {isAr
              ? "اكتب طلبك القانوني باختصار. نرد خلال يوم عمل واحد."
              : "Briefly describe your legal matter. We reply within one business day."}
          </p>
          <div className="mt-6">
            <ContactForm lang={lang} variant="dark" hideHeader />
          </div>
        </div>
      </section>

      {/* Office details — moved below, full width strip */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8">
          <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">
            {isAr ? "بيانات المكتب" : "Office details"}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F0716B]">
                  {item.label}
                </p>
                <div className="mt-2 space-y-1 text-sm leading-6 text-white/85">
                  {item.lines.map((line, i) =>
                    item.hrefs?.[i] ? (
                      <a
                        key={line}
                        href={item.hrefs[i]}
                        className="block font-medium transition hover:text-white"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line}>{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <iframe
          title={isAr ? "خريطة المكتب" : "Office map"}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.684205591655!2d55.27354838885498!3d25.213870100000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f5fdaba03%3A0x37097f69d9d98181!2sAlmahy%20Legal%20Services!5e0!3m2!1sen!2sae!4v1771139862934!5m2!1sen!2sae"
          width="100%"
          height="360"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[250px] w-full sm:h-[320px] md:h-[380px]"
        />
      </section>
    </div>
  );
}
