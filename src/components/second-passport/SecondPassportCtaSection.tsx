function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

interface SecondPassportCtaSectionProps {
  isArabic: boolean;
  title: string;
  description: string;
  ctaLabel: string;
}

export default function SecondPassportCtaSection({
  isArabic,
  title,
  description,
  ctaLabel,
}: SecondPassportCtaSectionProps) {
  return (
    <section className="border-t border-[#B38D42]/15 bg-[#100B0B] py-10 text-center text-white md:py-12">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70 md:text-[15px]">{description}</p>
        <a
          href="https://wa.me/971504096028?text=Hello%2C%20I%20want%20help%20with%20a%20second%20passport%20program"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn-glow-solid mt-6 inline-flex h-[52px] cursor-pointer items-center gap-2 rounded-md bg-[#B38D42] px-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:border-[#9A7635] hover:bg-[#9A7635] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B38D42]"
        >
          {ctaLabel}
          <ArrowIcon className={`h-3.5 w-3.5 ${isArabic ? 'rotate-180' : ''}`} />
        </a>
      </div>
    </section>
  );
}
