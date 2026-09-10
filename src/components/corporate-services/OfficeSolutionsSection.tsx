import Image from 'next/image';
import InclusionMark from '@/components/corporate-services/InclusionMark';

type OfficePackage = {
  name: string;
  price: string;
  subtitle: string;
  image: string;
};

type OfficeInclusion = {
  en: string;
  ar: string;
  virtual: boolean;
  shared: boolean;
  private: boolean;
};

interface OfficeSolutionsSectionProps {
  isArabic: boolean;
  sectionTitle: string;
  sectionDescription: string;
  packages: OfficePackage[];
  inclusions: OfficeInclusion[];
  getImageUrl: (url: string | undefined, pool: string[], index: number) => string;
  imagePool: string[];
}

export default function OfficeSolutionsSection({
  isArabic,
  sectionTitle,
  sectionDescription,
  packages,
  inclusions,
  getImageUrl,
  imagePool,
}: OfficeSolutionsSectionProps) {
  const planKeys = ['virtual', 'shared', 'private'] as const;

  return (
    <section className="bg-[#F1EFF0] py-12 md:py-14">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-8 max-w-2xl ${isArabic ? 'ms-auto text-right' : ''}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B38D42]">
              {isArabic ? 'باقات المكاتب' : 'Office Plans'}
            </p>
          </div>
          <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{sectionTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-[#160A0A]/65 md:text-[15px]">{sectionDescription}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((plan, index) => (
            <div
              key={plan.name}
              className="overflow-hidden rounded-[18px] border border-[#B38D42]/30 bg-white shadow-[0_12px_28px_rgba(20,15,7,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#B38D42]/55 hover:shadow-[0_18px_36px_rgba(20,15,7,0.1)]"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={getImageUrl(plan.image, imagePool, index)}
                  alt={plan.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100B0B]/55 to-transparent" aria-hidden="true" />
              </div>
              <div className={`p-5 text-center ${isArabic ? 'text-right md:text-center' : ''}`}>
                <h3 className="text-xl font-bold text-[#B38D42]">{plan.name}</h3>
                <p className="mt-2 text-2xl font-extrabold text-[#160A0A]">{plan.price}</p>
                <p className="mt-1 text-sm text-[#160A0A]/55">{plan.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="corporate-inclusions-table mt-8 overflow-hidden rounded-[18px] border border-[#B38D42]/25 bg-white shadow-[0_12px_28px_rgba(20,15,7,0.06)]">
          <div className="max-h-[520px] overflow-auto">
            <table className="min-w-[980px] w-full border-collapse text-sm">
              <thead className="sticky top-0 z-10 bg-[#160A0A] shadow-[0_2px_0_rgba(179,141,66,0.25)]">
                <tr>
                  <th className="border-b border-[#B38D42]/25 px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
                    Inclusions
                  </th>
                  {packages.map((plan) => (
                    <th
                      key={plan.name}
                      className="border-b border-l border-[#B38D42]/20 px-4 py-4 text-center"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B38D42]">
                        {plan.name}
                      </div>
                      <div className="mt-1 text-base font-bold text-white">{plan.price}</div>
                      <div className="text-[11px] text-white/55">{plan.subtitle}</div>
                    </th>
                  ))}
                  <th className="border-b border-l border-[#B38D42]/20 px-4 py-4 text-right text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
                    المحتويات
                  </th>
                </tr>
              </thead>
              <tbody>
                {inclusions.map((row, rowIndex) => (
                  <tr
                    key={row.en}
                    className={rowIndex % 2 === 0 ? 'bg-[#FBFAF7]' : 'bg-white'}
                  >
                    <td className="border-b border-[#160A0A]/8 px-4 py-3.5 text-[#160A0A]/85">{row.en}</td>
                    {planKeys.map((key) => (
                      <td key={key} className="border-b border-l border-[#160A0A]/8 px-4 py-3.5 text-center">
                        <InclusionMark included={row[key]} />
                      </td>
                    ))}
                    <td className="border-b border-l border-[#160A0A]/8 px-4 py-3.5 text-right text-[#160A0A]/75">
                      {row.ar}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
