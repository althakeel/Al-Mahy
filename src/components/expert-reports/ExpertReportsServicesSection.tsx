import Image from 'next/image';

type GalleryImage = {
  src: string;
  alt: string;
};

function GalleryCard({ image }: { image: GalleryImage }) {
  return (
    <div className="group overflow-hidden rounded-[18px] border border-[#B38D42]/20 bg-white shadow-[0_12px_28px_rgba(20,15,7,0.06)] transition-all duration-250 hover:border-[#B38D42]/45 hover:shadow-[0_18px_36px_rgba(20,15,7,0.1)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

interface ExpertReportsServicesSectionProps {
  isArabic: boolean;
  title: string;
  descriptionHtml: string;
  images: GalleryImage[];
}

export default function ExpertReportsServicesSection({
  isArabic,
  title,
  descriptionHtml,
  images,
}: ExpertReportsServicesSectionProps) {
  return (
    <section className="border-b border-[#B38D42]/10 bg-[#F1EFF0] py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-8">
        <div className={`mb-7 max-w-3xl ${isArabic ? 'ms-auto text-right' : ''}`}>
          <div className={`mb-3 flex items-center gap-3 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-[#B38D42]" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-[#160A0A] md:text-4xl">{title}</h2>
          </div>
          <p
            className="text-sm leading-7 text-[#160A0A]/75 md:text-[15px] [&_b]:font-bold [&_b]:text-[#160A0A]"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col gap-4 md:gap-6">
            {images.slice(0, 2).map((image) => (
              <GalleryCard key={image.src} image={image} />
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            {images.slice(2, 4).map((image) => (
              <GalleryCard key={image.src} image={image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
