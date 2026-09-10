interface ExpertReportsInlineCtaProps {
  text: string;
}

export default function ExpertReportsInlineCta({ text }: ExpertReportsInlineCtaProps) {
  return (
    <section className="border-t border-[#B38D42]/15 bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1250px] px-4 text-center md:px-8">
        <span className="inline-block rounded-full border border-[#B38D42]/45 bg-[#B38D42]/10 px-6 py-3.5 text-base font-semibold leading-7 text-[#B38D42] shadow-[0_8px_24px_rgba(179,141,66,0.12)] md:text-lg">
          {text}
        </span>
      </div>
    </section>
  );
}
