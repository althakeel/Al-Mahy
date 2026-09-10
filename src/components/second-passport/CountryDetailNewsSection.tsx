type NewsItem = {
  title: string;
  url: string;
  image: string;
  source?: string;
};

interface CountryDetailNewsSectionProps {
  isArabic: boolean;
  title: string;
  items: NewsItem[];
}

export default function CountryDetailNewsSection({
  isArabic,
  title,
  items,
}: CountryDetailNewsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-[#B38D42]/10 bg-[#F1EFF0] py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <h2 className={`text-3xl font-bold text-[#160A0A] md:text-4xl ${isArabic ? 'text-right' : 'text-left'}`}>
          {title}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {items.slice(0, 3).map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[18px] border border-transparent p-3 transition-all hover:border-[#B38D42]/25 hover:bg-white hover:shadow-[0_12px_28px_rgba(20,15,7,0.06)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-[#B38D42]/20 bg-[#160A0A]/10">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug text-[#160A0A]">{item.title}</h3>
              {item.source ? <p className="mt-2 text-xs text-[#160A0A]/50">{item.source}</p> : null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
