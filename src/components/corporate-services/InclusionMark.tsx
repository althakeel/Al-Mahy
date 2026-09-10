export default function InclusionMark({ included }: { included: boolean }) {
  if (included) {
    return (
      <span
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#B38D42]/35 bg-[#B38D42]/12 text-sm font-bold text-[#B38D42]"
        aria-label="Included"
      >
        ✓
      </span>
    );
  }

  return (
    <span className="inline-flex h-8 w-8 items-center justify-center text-base font-bold text-white/25" aria-label="Not included">
      ×
    </span>
  );
}
