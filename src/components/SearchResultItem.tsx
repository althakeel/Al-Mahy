'use client';

import Link from 'next/link';
import { SearchResult } from '@/lib/search-index';
import { Locale } from '@/lib/translations';

interface SearchResultItemProps {
  result: SearchResult;
  locale: Locale;
  typeLabel: string;
  onClick?: () => void;
  className?: string;
}

export default function SearchResultItem({
  result,
  locale,
  typeLabel,
  onClick,
  className = '',
}: SearchResultItemProps) {
  const isExternal = result.isExternal || result.type === 'external' || result.href.startsWith('http');
  const content = (
    <>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#4A1C1A] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#F2D6D4]">
          {typeLabel}
        </span>
        {result.source ? (
          <span className="text-[10px] font-medium text-white/45">{result.source}</span>
        ) : null}
        {isExternal ? (
          <svg className="h-3.5 w-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        ) : null}
      </div>
      <h2 className="text-lg font-bold text-white">{result.title}</h2>
      <p className="mt-1 text-sm leading-relaxed text-white/65 line-clamp-2">{result.description}</p>
      {isExternal ? (
        <p className="mt-2 truncate text-xs text-[#DE3B34]/80">{result.href}</p>
      ) : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={result.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#DE3B34]/30 hover:bg-white/10 ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={result.href}
      onClick={onClick}
      className={`block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#DE3B34]/30 hover:bg-white/10 ${className}`}
    >
      {content}
    </Link>
  );
}
