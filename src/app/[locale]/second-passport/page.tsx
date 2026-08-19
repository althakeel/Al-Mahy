import { Locale } from "@/lib/translations";
import Link from "next/link";
import Image from "next/image";

const countries = [
  {
    slug: "antigua-barbuda",
    name: "Antigua & Barbuda",
    enSummary: "Family-focused route with donation and real-estate options.",
    arSummary: "مسار مناسب للعائلات مع خيارات التبرع والعقار.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
    metaEn: "Donation · Real estate",
    metaAr: "تبرع · عقار",
  },
  {
    slug: "st-kitts-nevis",
    name: "St. Kitts & Nevis",
    enSummary: "Long-established premium program with fast-track options.",
    arSummary: "برنامج راسخ ومميز مع خيارات مسار سريع.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
    metaEn: "Premium · Fast-track",
    metaAr: "مميز · مسار سريع",
  },
  {
    slug: "saint-lucia",
    name: "Saint Lucia",
    enSummary: "Flexible options including contribution, real estate, and bonds.",
    arSummary: "خيارات مرنة تشمل المساهمة والعقار والسندات.",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=500&fit=crop",
    metaEn: "Contribution · Bonds",
    metaAr: "مساهمة · سندات",
  },
  {
    slug: "dominica",
    name: "Dominica",
    enSummary: "Cost-efficient option with streamlined processing timelines.",
    arSummary: "خيار اقتصادي مع فترات معالجة سريعة نسبيًا.",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&h=500&fit=crop",
    metaEn: "Efficient · Streamlined",
    metaAr: "اقتصادي · مبسّط",
  },
  {
    slug: "turkiye",
    name: "Türkiye",
    enSummary: "Popular route with real-estate based eligibility and strong regional access.",
    arSummary: "مسار شائع يعتمد على الاستثمار العقاري مع وصول إقليمي قوي.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&h=500&fit=crop",
    metaEn: "Real estate · Regional access",
    metaAr: "عقار · وصول إقليمي",
  },
];

type NewsItem = {
  title: string;
  image: string;
  url?: string;
};

async function fetchLatestNews(isArabic: boolean, fallbackItems: NewsItem[]): Promise<NewsItem[]> {
  const newsApiKey = process.env.NEWS_API_KEY;

  if (!newsApiKey) {
    return fallbackItems;
  }

  const query = isArabic
    ? "الجنسية عبر الاستثمار OR التأشيرة الذهبية OR هجرة الاستثمار"
    : "citizenship by investment OR golden visa OR investment migration";

  const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=${isArabic ? "ar" : "en"}&sortBy=publishedAt&pageSize=6`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-Api-Key": newsApiKey,
      },
      next: { revalidate: 21600 },
    });

    if (!response.ok) {
      return fallbackItems;
    }

    const payload = (await response.json()) as {
      articles?: Array<{
        title?: string;
        urlToImage?: string;
        url?: string;
      }>;
    };

    const parsed = (payload.articles ?? [])
      .filter((article) => article.title && article.urlToImage)
      .slice(0, 6)
      .map((article) => ({
        title: article.title as string,
        image: article.urlToImage as string,
        url: article.url,
      }));

    return parsed.length ? parsed : fallbackItems;
  } catch {
    return fallbackItems;
  }
}

export default async function SecondPassportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const isArabic = lang === "ar";

  const processSteps = isArabic
    ? [
        { title: "تقييم أولي", desc: "نراجع هدفك وميزانيتك والجدول الزمني المناسب." },
        { title: "اختيار البرنامج", desc: "نقارن المسارات ونوصي بالدولة الأنسب لملفك." },
        { title: "تجهيز الملف", desc: "نراجع المستندات ونعد الطلب قبل التقديم الرسمي." },
        { title: "المتابعة حتى الإصدار", desc: "نحدثك في كل مرحلة حتى استلام الجنسية والجواز." },
      ]
    : [
        { title: "Initial assessment", desc: "We review your goal, budget, and preferred timeline." },
        { title: "Program selection", desc: "We compare routes and recommend the strongest country fit." },
        { title: "File preparation", desc: "Documents are checked and prepared before official submission." },
        { title: "Follow-through to issuance", desc: "You receive updates through approval and passport issuance." },
      ];

  const reasons = isArabic
    ? [
        {
          title: "تنقل عالمي أوسع",
          desc: "برامج الجنسية عبر الاستثمار تفتح خيارات سفر وإقامة أقوى حسب الدولة المختارة.",
        },
        {
          title: "خطة احتياطية للأسرة",
          desc: "الجواز الثاني يمنح مرونة طويلة الأمد للعمل والتعليم والاستقرار.",
        },
        {
          title: "مسارات استثمار متعددة",
          desc: "تبرع، عقار، أو صيغ أخرى وفق متطلبات كل برنامج رسمي.",
        },
      ]
    : [
        {
          title: "Broader global mobility",
          desc: "Citizenship-by-investment programs can expand travel and residency options by jurisdiction.",
        },
        {
          title: "A long-term family option",
          desc: "A second passport adds flexibility for business, education, and future planning.",
        },
        {
          title: "Multiple investment routes",
          desc: "Donation, real estate, and other approved pathways depending on the program.",
        },
      ];

  const faqItems = isArabic
    ? [
        {
          q: "كم تستغرق المعاملة عادة؟",
          a: "تعتمد المدة على الدولة المختارة والفحص الأمني واكتمال المستندات.",
        },
        {
          q: "هل أحتاج إلى السفر؟",
          a: "بعض البرامج لا تتطلب إقامة دائمة، وقد تختلف متطلبات الحضور حسب الدولة.",
        },
        {
          q: "هل يمكن إضافة الأسرة؟",
          a: "غالبًا نعم، وتختلف الفئات المؤهلة حسب شروط برنامج كل دولة.",
        },
        {
          q: "هل يمكنني الاحتفاظ بجنسيتي الحالية؟",
          a: "في كثير من البرامج نعم، لكن يجب دائمًا مراجعة قانون الجنسية في بلدك الأصلي.",
        },
        {
          q: "ما أهم المستندات المطلوبة؟",
          a: "عادةً تشمل جواز السفر، إثبات مصدر الأموال، السجل الجنائي، ومستندات الحالة العائلية.",
        },
        {
          q: "هل الاستثمار قابل للاسترداد؟",
          a: "يعتمد على المسار: التبرعات غالبًا غير مستردة، بينما بعض المسارات العقارية قد تكون قابلة لإعادة البيع حسب الشروط.",
        },
      ]
    : [
        {
          q: "How long does the process usually take?",
          a: "Timing depends on the selected country, due diligence, and document readiness.",
        },
        {
          q: "Do I need to travel?",
          a: "Some programs have no residency requirement, but attendance rules vary by jurisdiction.",
        },
        {
          q: "Can I include my family?",
          a: "Usually yes, with eligible dependents defined by each country program.",
        },
        {
          q: "Can I keep my current citizenship?",
          a: "In many programs, yes. You should also confirm dual-citizenship rules in your home country.",
        },
        {
          q: "What documents are commonly required?",
          a: "Typically passport copies, source-of-funds evidence, police clearance, and civil-status documents.",
        },
        {
          q: "Is the investment refundable?",
          a: "It depends on the route: donations are usually non-refundable, while some real-estate routes may allow resale under rules.",
        },
      ];

  const fallbackNewsItems: NewsItem[] = isArabic
    ? [
        {
          title: "تصنيف جواز سانت كيتس ونيفيس",
          image: "https://images.unsplash.com/photo-1534996858221-380b92700493?w=900&h=600&fit=crop",
        },
        {
          title: "دول الدخول بدون تأشيرة لجواز دومينيكا",
          image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&h=600&fit=crop",
        },
        {
          title: "تحديثات برامج الإقامة عبر الاستثمار",
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&h=600&fit=crop",
        },
      ]
    : [
        {
          title: "St Kitts and Nevis Passport Rank",
          image: "https://images.unsplash.com/photo-1534996858221-380b92700493?w=900&h=600&fit=crop",
        },
        {
          title: "Dominica Passport Visa Free Countries",
          image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&h=600&fit=crop",
        },
        {
          title: "Updates in residency-by-investment programs",
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&h=600&fit=crop",
        },
      ];

  const newsItems = await fetchLatestNews(isArabic, fallbackNewsItems);
  const featured = countries[0];
  const remaining = countries.slice(1);

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={`min-h-screen bg-[#F1EFF0] text-[#160A0A] ${isArabic ? "text-right" : "text-left"}`}
    >
      {/* Hero — full-bleed, brand-first */}
      <section className="relative min-h-[72vh] overflow-hidden bg-[#160A0A] text-white md:min-h-[78vh]">
        <Image
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1800&h=900&fit=crop"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#160A0A]/92 via-[#160A0A]/75 to-[#160A0A]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160A0A]/70 via-transparent to-[#160A0A]/25" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[1250px] flex-col justify-end px-4 pb-16 pt-28 md:min-h-[78vh] md:px-8 md:pb-20 md:pt-32">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {isArabic ? "الجنسية عبر الاستثمار" : "Citizenship by Investment"}
          </p>
          <h1
            className="max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-6xl"
            style={{ fontFamily: "Georgia, serif", textShadow: "0 2px 18px rgba(0,0,0,0.45)" }}
          >
            {isArabic ? "بوابتك إلى الجنسية الثانية" : "Your Gateway to Global Opportunities"}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            {isArabic
              ? "اختر الدولة المناسبة، ونرشدك خطوة بخطوة حتى إصدار الجواز."
              : "Choose the country that fits you. We guide the file from first assessment to passport issuance."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/971504096028?text=Hello%2C%20I%20want%20help%20with%20a%20second%20passport%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-[#DE3B34] bg-[#DE3B34] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-transparent"
            >
              {isArabic ? "تحدث مع خبير" : "Speak with an Expert"}
            </a>
            <a
              href="#countries"
              className="inline-flex items-center border border-white/70 bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-[#160A0A]"
            >
              {isArabic ? "استعرض الدول" : "Browse Countries"}
            </a>
          </div>
        </div>
      </section>

      {/* Countries — featured + list */}
      <section id="countries" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
              {isArabic ? "البرامج" : "Programs"}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#160A0A] md:text-4xl">
              {isArabic ? "الدول المتاحة" : "Available Countries"}
            </h2>
            <p className="mt-3 text-base leading-7 text-[#160A0A]/70">
              {isArabic
                ? "راجع المسارات الأساسية، ثم افتح التفاصيل لكل دولة."
                : "Review the core routes, then open full details for each country."}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <Link
              href={`/${lang}/second-passport/${featured.slug}`}
              className="group relative block min-h-[420px] overflow-hidden lg:col-span-7"
            >
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160A0A]/90 via-[#160A0A]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  {isArabic ? featured.metaAr : featured.metaEn}
                </p>
                <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">{featured.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/80 md:text-base">
                  {isArabic ? featured.arSummary : featured.enSummary}
                </p>
                <span className="mt-5 inline-flex border border-white/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors group-hover:bg-white group-hover:text-[#160A0A]">
                  {isArabic ? "عرض التفاصيل" : "View details"}
                </span>
              </div>
            </Link>

            <div className="flex flex-col divide-y divide-[#160A0A]/10 border border-[#160A0A]/10 lg:col-span-5">
              {remaining.map((country, index) => (
                <Link
                  key={country.slug}
                  href={`/${lang}/second-passport/${country.slug}`}
                  className="group flex gap-4 p-5 transition-colors hover:bg-[#F1EFF0] md:p-6"
                >
                  <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-[#DE3B34]">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-[#160A0A] transition-colors group-hover:text-[#DE3B34]">
                        {country.name}
                      </h3>
                      <span className="mt-1 text-[#DE3B34] transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                        →
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#160A0A]/45">
                      {isArabic ? country.metaAr : country.metaEn}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#160A0A]/70">
                      {isArabic ? country.arSummary : country.enSummary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs leading-5 text-[#160A0A]/50">
            {isArabic
              ? "*الأرقام والمزايا المعروضة إرشادية وقد تتغير حسب تحديثات البرامج الرسمية."
              : "*Displayed thresholds and benefits are indicative and may change with official program updates."}
          </p>
        </div>
      </section>

      {/* Why — cream split */}
      <section className="border-y border-[#160A0A]/10 bg-[#F1EFF0] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1250px] gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
              {isArabic ? "لماذا الجواز الثاني؟" : "Why a second passport?"}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#160A0A] md:text-4xl">
              {isArabic ? "استثمار في المرونة والاستقرار" : "An investment in flexibility and stability"}
            </h2>
          </div>
          <div className="space-y-8 lg:col-span-8">
            {reasons.map((item, index) => (
              <div key={item.title} className="grid gap-3 border-t border-[#160A0A]/15 pt-6 sm:grid-cols-[72px_1fr]">
                <span className="text-sm font-semibold tracking-[0.16em] text-[#DE3B34]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#160A0A]">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#160A0A]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#160A0A] py-16 text-white md:py-20">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F0716B]">
              {isArabic ? "كيف نعمل" : "How we work"}
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              {isArabic ? "مسار واضح من التقييم إلى الإصدار" : "A clear path from assessment to issuance"}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="border-t border-white/20 pt-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#F0716B]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[900px] px-4 md:px-8">
          <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">FAQ</h2>
          <p className="mt-3 text-base leading-7 text-[#160A0A]/70">
            {isArabic
              ? "إجابات مختصرة على الأسئلة الأكثر شيوعًا حول برامج الجواز الثاني."
              : "Short answers to the most common questions about second passport programs."}
          </p>
          <div className="mt-8 border-t border-[#160A0A]/15">
            {faqItems.map((item) => (
              <details key={item.q} className="group border-b border-[#160A0A]/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-[#160A0A]">{item.q}</span>
                  <span className="text-xl font-light text-[#DE3B34] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 text-sm leading-7 text-[#160A0A]/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* News — compact strip */}
      <section className="border-t border-[#160A0A]/10 bg-[#F1EFF0] py-16 md:py-20">
        <div className="mx-auto max-w-[1250px] px-4 md:px-8">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DE3B34]">
                {isArabic ? "المستجدات" : "Updates"}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#160A0A] md:text-4xl">
                {isArabic ? "أخبار وبرامج الاستثمار" : "News & program notes"}
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.slice(0, 3).map((item) => {
              const inner = (
                <>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#160A0A]/10">
                    <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-[#160A0A]">{item.title}</h3>
                </>
              );
              return item.url ? (
                <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <article key={item.title}>{inner}</article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#160A0A] py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">
            {isArabic ? "هل أنت مستعد لمراجعة الخيارات؟" : "Ready to review your options?"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
            {isArabic
              ? "تحدث مع فريقنا لمقارنة البرامج الأنسب لهدفك وميزانيتك."
              : "Speak with our team to compare the programs that fit your goal and budget."}
          </p>
          <a
            href="https://wa.me/971504096028?text=Hello%2C%20I%20want%20help%20with%20a%20second%20passport%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center border border-[#DE3B34] bg-[#DE3B34] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-transparent"
          >
            {isArabic ? "احجز استشارة" : "Book a Consultation"}
          </a>
        </div>
      </section>
    </div>
  );
}
