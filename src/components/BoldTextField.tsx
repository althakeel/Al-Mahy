'use client';

import { useRef, type ReactNode, type ElementType } from 'react';

type BoldTextFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  dir?: 'ltr' | 'rtl';
  label?: string;
  className?: string;
};

const wrapBold = (value: string, start: number, end: number) => {
  const selected = value.slice(start, end);

  if (selected) {
    const beforeMarker = value.slice(Math.max(0, start - 2), start) === '**';
    const afterMarker = value.slice(end, end + 2) === '**';

    if (beforeMarker && afterMarker) {
      return {
        next: `${value.slice(0, start - 2)}${selected}${value.slice(end + 2)}`,
        selectionStart: start - 2,
        selectionEnd: end - 2,
      };
    }

    if (selected.startsWith('**') && selected.endsWith('**') && selected.length >= 4) {
      const unwrapped = selected.slice(2, -2);
      return {
        next: `${value.slice(0, start)}${unwrapped}${value.slice(end)}`,
        selectionStart: start,
        selectionEnd: start + unwrapped.length,
      };
    }

    return {
      next: `${value.slice(0, start)}**${selected}**${value.slice(end)}`,
      selectionStart: start + 2,
      selectionEnd: end + 2,
    };
  }

  return {
    next: `${value.slice(0, start)}****${value.slice(end)}`,
    selectionStart: start + 2,
    selectionEnd: start + 2,
  };
};

export default function BoldTextField({
  value,
  onChange,
  placeholder,
  rows = 3,
  dir,
  label,
  className = '',
}: BoldTextFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const applyBold = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const { next, selectionStart, selectionEnd } = wrapBold(value, start, end);

    onChange(next);

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(selectionStart, selectionEnd);
    });
  };

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center gap-2">
        {label ? <p className="text-xs font-semibold text-slate-600">{label}</p> : null}
        <button
          type="button"
          onClick={applyBold}
          title="Bold"
          aria-label="Bold"
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CECDCB] bg-white text-sm font-bold text-[#160A0A] transition-colors hover:border-[#DE3B34] hover:text-[#DE3B34]"
        >
          B
        </button>
        <span className="text-[11px] text-slate-500">Select text, then click B</span>
      </div>
      <textarea
        ref={textareaRef}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={rows}
        dir={dir}
        className={`w-full rounded-xl border border-[#CECDCB] bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#DE3B34] ${className}`}
      />
    </div>
  );
}

/** Renders plain text with **bold** markers as real bold text. */
export function FormattedText({
  text,
  as: Component = 'span',
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(<strong key={`b-${key++}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <Component className={className}>{nodes.length ? nodes : text}</Component>;
}
