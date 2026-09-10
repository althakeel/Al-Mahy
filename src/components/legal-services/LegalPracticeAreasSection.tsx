import { LegalArea } from '@/lib/legal-services-content';
import PracticeAreaCard from '@/components/legal-services/PracticeAreaCard';

interface LegalPracticeAreasSectionProps {
  areas: LegalArea[];
  badge: string;
  title: string;
  summary: string;
  getImageUrl: (url?: string) => string;
  isArabic: boolean;
}

export default function LegalPracticeAreasSection({
  areas,
  badge,
  title,
  summary,
  getImageUrl,
  isArabic,
}: LegalPracticeAreasSectionProps) {
  return (
    <section id="practice-areas" className="scroll-mt-24 bg-white py-14 md:py-16">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div
          className={`mb-10 flex flex-col gap-4 border-b border-[#B38D42]/15 pb-8 md:flex-row md:items-end md:justify-between ${
            isArabic ? 'text-right' : 'text-left'
          }`}
        >
          <div>
            <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
              <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B38D42]">{badge}</p>
            </div>
            <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{title}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#160A0A]/55">{summary}</p>
        </div>

        <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
          {areas.map((area, index) => (
            <PracticeAreaCard
              key={area.id}
              area={area}
              number={String(index + 2).padStart(2, '0')}
              imageUrl={getImageUrl(area.image)}
              isArabic={isArabic}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
