'use client';

import { useEffect, useState } from 'react';
import { LegalArea } from '@/lib/legal-services-content';

interface LegalPracticeNavProps {
  areas: LegalArea[];
  isArabic: boolean;
}

export default function LegalPracticeNav({ areas, isArabic }: LegalPracticeNavProps) {
  const [activeId, setActiveId] = useState(areas[0]?.id ?? '');

  useEffect(() => {
    const sectionIds = areas.map((area) => area.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.15, 0.4] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [areas]);

  return (
    <section className="sticky top-0 z-30 border-b border-[#B38D42]/15 bg-[#F1EFF0]/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div
          className={`flex gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isArabic ? 'flex-row-reverse justify-end' : ''
          }`}
        >
          {areas.map((area) => {
            const isActive = activeId === area.id;
            return (
              <a
                key={area.id}
                href={`#${area.id}`}
                onClick={() => setActiveId(area.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 ${
                  isActive
                    ? 'border-[#B38D42] bg-[#B38D42] text-white shadow-[0_4px_14px_rgba(179,141,66,0.35)]'
                    : 'border-transparent bg-white/70 text-[#160A0A]/65 hover:border-[#B38D42]/35 hover:bg-white hover:text-[#B38D42]'
                }`}
              >
                {area.title}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
