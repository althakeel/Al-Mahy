import Image from 'next/image';
import { LegalArea } from '@/lib/legal-services-content';

interface PracticeAreaCardProps {
  area: LegalArea;
  number: string;
  imageUrl: string;
  isArabic: boolean;
  reversed?: boolean;
}

export default function PracticeAreaCard({
  area,
  number,
  imageUrl,
  isArabic,
  reversed = false,
}: PracticeAreaCardProps) {
  return (
    <article
      id={area.id}
      className={`practice-area-card group scroll-mt-28 ${isArabic ? 'text-right' : 'text-left'}`}
    >
      <div
        className={`flex flex-col gap-6 lg:items-center lg:gap-10 lg:flex-row ${
          reversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <div className="relative w-full shrink-0 overflow-hidden rounded-[18px] border border-[#B38D42]/25 bg-[#160A0A]/5 lg:w-[46%]">
          <div className="relative aspect-[16/10]">
            <Image
              src={imageUrl}
              alt={area.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
          <div
            className={`absolute top-4 ${isArabic ? 'left-4' : 'right-4'} flex min-h-[52px] min-w-[52px] items-center justify-center rounded-xl border border-[#B38D42]/55 bg-[#100B0B]/80 px-3 text-xl font-bold tracking-wide text-[#B38D42] backdrop-blur-sm`}
            aria-hidden="true"
          >
            {number}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-[#160A0A] md:text-2xl">{area.title}</h3>
          <div className="mt-1 h-px w-12 bg-[#B38D42]/55" aria-hidden="true" />
          <div className="mt-4 space-y-3">
            {area.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-[#160A0A]/72 md:text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
