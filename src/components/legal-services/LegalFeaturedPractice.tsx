import Image from 'next/image';
import { LegalArea } from '@/lib/legal-services-content';

interface LegalFeaturedPracticeProps {
  featured: LegalArea;
  copy: {
    expertiseLabel: string;
    expertiseTitle: string;
    expertiseDescription: string;
  };
  imageUrl: string;
  isArabic: boolean;
}

export default function LegalFeaturedPractice({
  featured,
  copy,
  imageUrl,
  isArabic,
}: LegalFeaturedPracticeProps) {
  return (
    <section id={featured.id} className="scroll-mt-28 bg-[#F1EFF0] py-12 md:py-14">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className="overflow-hidden rounded-[22px] border border-[#B38D42]/30 bg-white shadow-[0_18px_40px_rgba(20,15,7,0.08)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[460px]">
              <Image src={imageUrl} alt={featured.title} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
              <div
                className={`absolute top-5 ${isArabic ? 'right-5' : 'left-5'} flex h-14 w-14 items-center justify-center rounded-full border border-[#B38D42]/50 bg-[#100B0B]/75 text-lg font-bold text-[#B38D42] backdrop-blur-sm`}
                aria-hidden="true"
              >
                01
              </div>
            </div>

            <div className={`flex flex-col justify-center px-6 py-10 md:px-10 md:py-12 ${isArabic ? 'text-right' : 'text-left'}`}>
              <div className={`mb-4 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
                <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B38D42]">{copy.expertiseLabel}</p>
              </div>
              <h2 className="text-2xl font-bold leading-tight text-[#160A0A] md:text-3xl lg:text-4xl">{copy.expertiseTitle}</h2>
              <p className="mt-4 text-[15px] leading-8 text-[#160A0A]/75">{copy.expertiseDescription}</p>
              <div className="mt-6 space-y-3 border-t border-[#B38D42]/20 pt-6">
                {featured.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-[#160A0A]/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
