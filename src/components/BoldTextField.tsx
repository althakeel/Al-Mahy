'use client';

import { useLayoutEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type RichTextFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  dir?: 'ltr' | 'rtl';
  label?: string;
  className?: string;
};

type EditResult = {
  next: string;
  selectionStart: number;
  selectionEnd: number;
};

const btnBase =
  'inline-flex h-8 items-center justify-center rounded-md border px-2.5 text-xs font-semibold transition-colors disabled:opacity-40';
const btnDefault = `${btnBase} border-[#d4d4d4] bg-[#f3f3f3] text-[#222] hover:bg-white`;
const btnBlue = `${btnBase} min-w-8 border-[#3b82f6] bg-[#3b82f6] text-white hover:bg-[#2563eb]`;
const btnGreen = `${btnBase} border-[#22c55e] bg-[#22c55e] text-white hover:bg-[#16a34a]`;
const btnPurple = `${btnBase} border-[#c084fc] bg-[#d8b4fe] text-[#4c1d95] hover:bg-[#c084fc]`;

const wrapInline = (value: string, start: number, end: number, marker: string): EditResult => {
  const selected = value.slice(start, end) || 'text';
  const open = marker;
  const close = marker;
  const before = value.slice(Math.max(0, start - open.length), start);
  const after = value.slice(end, end + close.length);

  if (before === open && after === close) {
    return {
      next: `${value.slice(0, start - open.length)}${value.slice(start, end)}${value.slice(end + close.length)}`,
      selectionStart: start - open.length,
      selectionEnd: end - open.length,
    };
  }

  return {
    next: `${value.slice(0, start)}${open}${selected}${close}${value.slice(end)}`,
    selectionStart: start + open.length,
    selectionEnd: start + open.length + selected.length,
  };
};

const prefixLines = (value: string, start: number, end: number, prefix: string): EditResult => {
  const lineStart = value.lastIndexOf('\n', Math.max(0, start - 1)) + 1;
  const lineEndIndex = value.indexOf('\n', end);
  const lineEnd = lineEndIndex === -1 ? value.length : lineEndIndex;
  const block = value.slice(lineStart, lineEnd);
  const lines = block.split('\n');
  const nextLines = lines.map((line) => {
    const cleaned = line.replace(/^(#{1,6}\s+|[-*]\s+|\d+\.\s+)/, '');
    if (prefix === 'ol') {
      return `1. ${cleaned || 'List item'}`;
    }
    if (prefix === 'ul') {
      return `- ${cleaned || 'List item'}`;
    }
    return `${prefix}${cleaned || 'Heading'}`;
  });
  const replacement = nextLines.join('\n');
  // Keep the caret on the same edited line (end of that line).
  const caret = lineStart + (nextLines[0]?.length ?? replacement.length);
  return {
    next: `${value.slice(0, lineStart)}${replacement}${value.slice(lineEnd)}`,
    selectionStart: caret,
    selectionEnd: caret,
  };
};

const insertBlock = (value: string, start: number, end: number, block: string): EditResult => {
  const needsLeadingNewline = start > 0 && value[start - 1] !== '\n';
  const needsTrailingNewline = end < value.length && value[end] !== '\n';
  const insertion = `${needsLeadingNewline ? '\n' : ''}${block}${needsTrailingNewline ? '\n' : ''}`;
  return {
    next: `${value.slice(0, start)}${insertion}${value.slice(end)}`,
    selectionStart: start + insertion.length,
    selectionEnd: start + insertion.length,
  };
};

const toEmbedUrl = (url: string): string | null => {
  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      return `https://www.youtube.com/embed/${parsed.pathname.replace('/', '')}`;
    }

    if (host.includes('youtube.com')) {
      const id = parsed.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
      const parts = parsed.pathname.split('/');
      const embedIndex = parts.indexOf('embed');
      if (embedIndex >= 0 && parts[embedIndex + 1]) {
        return `https://www.youtube.com/embed/${parts[embedIndex + 1]}`;
      }
      const shortsIndex = parts.indexOf('shorts');
      if (shortsIndex >= 0 && parts[shortsIndex + 1]) {
        return `https://www.youtube.com/embed/${parts[shortsIndex + 1]}`;
      }
    }

    if (host.includes('vimeo.com')) {
      const id = parsed.pathname.split('/').filter(Boolean).pop();
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
  } catch {
    return null;
  }

  return null;
};

export default function RichTextField({
  value,
  onChange,
  placeholder,
  rows = 6,
  dir,
  label,
  className = '',
}: RichTextFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const historyRef = useRef<string[]>([value]);
  const historyIndexRef = useRef(0);
  const savedSelectionRef = useRef({ start: 0, end: 0 });
  const pendingSelectionRef = useRef<{ start: number; end: number } | null>(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const syncHistoryButtons = () => {
    setCanUndo(historyIndexRef.current > 0);
    setCanRedo(historyIndexRef.current < historyRef.current.length - 1);
  };

  const rememberSelection = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    savedSelectionRef.current = {
      start: textarea.selectionStart,
      end: textarea.selectionEnd,
    };
  };

  const restoreSelection = (start: number, end: number) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const max = textarea.value.length;
    const nextStart = Math.max(0, Math.min(start, max));
    const nextEnd = Math.max(0, Math.min(end, max));
    textarea.focus();
    textarea.setSelectionRange(nextStart, nextEnd);
    savedSelectionRef.current = { start: nextStart, end: nextEnd };
  };

  useLayoutEffect(() => {
    if (!pendingSelectionRef.current) return;
    const { start, end } = pendingSelectionRef.current;
    pendingSelectionRef.current = null;
    restoreSelection(start, end);
  }, [value]);

  const commitValue = (next: string, selection?: { start: number; end: number }) => {
    const stack = historyRef.current.slice(0, historyIndexRef.current + 1);
    if (stack[stack.length - 1] !== next) {
      historyRef.current = [...stack, next].slice(-60);
      historyIndexRef.current = historyRef.current.length - 1;
    }
    if (selection) {
      pendingSelectionRef.current = selection;
    }
    onChange(next);
    syncHistoryButtons();
  };

  const applyEdit = (result: EditResult) => {
    commitValue(result.next, {
      start: result.selectionStart,
      end: result.selectionEnd,
    });
  };

  const withSelection = (editor: (start: number, end: number) => EditResult) => {
    const { start, end } = savedSelectionRef.current;
    applyEdit(editor(start, end));
  };

  const undo = () => {
    if (historyIndexRef.current <= 0) return;
    historyIndexRef.current -= 1;
    const next = historyRef.current[historyIndexRef.current] || '';
    const caret = Math.min(savedSelectionRef.current.end, next.length);
    pendingSelectionRef.current = { start: caret, end: caret };
    onChange(next);
    syncHistoryButtons();
  };

  const redo = () => {
    if (historyIndexRef.current >= historyRef.current.length - 1) return;
    historyIndexRef.current += 1;
    const next = historyRef.current[historyIndexRef.current] || '';
    const caret = Math.min(savedSelectionRef.current.end, next.length);
    pendingSelectionRef.current = { start: caret, end: caret };
    onChange(next);
    syncHistoryButtons();
  };

  const keepSelectionOnToolbar = (event: ReactMouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('button')) return;
    // Keep textarea focus/selection when clicking toolbar buttons.
    event.preventDefault();
    rememberSelection();
  };

  const promptAndInsert = (message: string, builder: (input: string) => string) => {
    const input = window.prompt(message);
    if (!input?.trim()) return;
    withSelection((start, end) => insertBlock(value, start, end, builder(input.trim())));
  };

  return (
    <div className="w-full">
      {label ? <p className="mb-2 text-xs font-semibold text-slate-600">{label}</p> : null}

      <div
        className="mb-2 space-y-2 rounded-xl border border-[#CECDCB] bg-[#fafafa] p-2"
        onMouseDown={keepSelectionOnToolbar}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          <button type="button" className={btnDefault} title="Bold" onClick={() => withSelection((s, e) => wrapInline(value, s, e, '**'))}>
            <span className="font-extrabold">B</span>
          </button>
          <button type="button" className={btnDefault} title="Italic" onClick={() => withSelection((s, e) => wrapInline(value, s, e, '_'))}>
            <span className="italic">I</span>
          </button>
          <button type="button" className={btnDefault} title="Strikethrough" onClick={() => withSelection((s, e) => wrapInline(value, s, e, '~~'))}>
            <span className="line-through">S</span>
          </button>
          <button type="button" className={btnDefault} title="Heading 1" onClick={() => withSelection((s, e) => prefixLines(value, s, e, '# '))}>
            H1
          </button>
          <button type="button" className={btnDefault} title="Heading 2" onClick={() => withSelection((s, e) => prefixLines(value, s, e, '## '))}>
            H2
          </button>
          <button type="button" className={btnDefault} title="Heading 3" onClick={() => withSelection((s, e) => prefixLines(value, s, e, '### '))}>
            H3
          </button>
          <button type="button" className={btnDefault} title="Bullet list" onClick={() => withSelection((s, e) => prefixLines(value, s, e, 'ul'))}>
            • List
          </button>
          <button type="button" className={btnDefault} title="Numbered list" onClick={() => withSelection((s, e) => prefixLines(value, s, e, 'ol'))}>
            1. List
          </button>
          <button
            type="button"
            className={btnDefault}
            title="Table"
            onClick={() =>
              withSelection((s, e) =>
                insertBlock(
                  value,
                  s,
                  e,
                  `| Column 1 | Column 2 | Column 3 |\n| --- | --- | --- |\n| Cell | Cell | Cell |\n| Cell | Cell | Cell |`
                )
              )
            }
          >
            ▦ Table
          </button>
          <button type="button" className={btnBlue} title="Undo" onClick={undo} disabled={!canUndo}>
            ←
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            className={btnDefault}
            title="Horizontal rule"
            onClick={() => withSelection((s, e) => insertBlock(value, s, e, '---'))}
          >
            ↔
          </button>
          <button
            type="button"
            className={btnBlue}
            title="Redo"
            onClick={redo}
            disabled={!canRedo}
          >
            →
          </button>
          <button
            type="button"
            className={btnGreen}
            title="Image"
            onClick={() =>
              promptAndInsert('Image URL', (url) => {
                const alt = window.prompt('Image alt text (optional)', 'Image') || 'Image';
                return `![${alt}](${url})`;
              })
            }
          >
            🖼 Image
          </button>
          <button
            type="button"
            className={btnPurple}
            title="Video"
            onClick={() =>
              promptAndInsert('YouTube or Vimeo URL', (url) => `[Watch video](${url})`)
            }
          >
            🎥 Video
          </button>
          <button
            type="button"
            className={btnDefault}
            title="Link"
            onClick={() => {
              const { start, end } = savedSelectionRef.current;
              const selected = value.slice(start, end) || 'link text';
              const url = window.prompt('Link URL');
              if (!url?.trim()) return;
              applyEdit({
                next: `${value.slice(0, start)}[${selected}](${url.trim()})${value.slice(end)}`,
                selectionStart: start + 1,
                selectionEnd: start + 1 + selected.length,
              });
            }}
          >
            🔗 Link
          </button>
          <button
            type="button"
            className={btnDefault}
            title="Highlight block"
            onClick={() =>
              withSelection((s, e) => {
                const selected = value.slice(s, e) || 'Highlighted note';
                return insertBlock(value, s, e, `> ${selected.replace(/\n/g, '\n> ')}`);
              })
            }
          >
            ▬
          </button>
        </div>
      </div>

      <textarea
        ref={textareaRef}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          rememberSelection();
          commitValue(event.target.value);
        }}
        onSelect={rememberSelection}
        onClick={rememberSelection}
        onKeyUp={rememberSelection}
        rows={rows}
        dir={dir}
        className={`w-full rounded-xl border border-[#CECDCB] bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#DE3B34] ${className}`}
      />
    </div>
  );
}

/** Renders markdown (bold, italic, lists, tables, media, etc.) on the frontend. */
export function FormattedText({
  text,
  className,
  compact = false,
}: {
  text: string;
  className?: string;
  compact?: boolean;
}) {
  if (!text) return null;

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className={`font-bold text-[#160A0A] ${compact ? 'mb-2 text-xl' : 'mb-4 text-3xl'}`}>{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className={`font-bold text-[#160A0A] ${compact ? 'mb-2 text-lg' : 'mb-3 text-2xl'}`}>{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className={`font-semibold text-[#160A0A] ${compact ? 'mb-1 text-base' : 'mb-2 text-xl'}`}>{children}</h3>
          ),
          p: ({ children }) => (
            <p className={`${compact ? 'mb-2' : 'mb-4'} leading-[1.8] text-inherit`}>{children}</p>
          ),
          strong: ({ children }) => <strong className="font-bold text-inherit">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          del: ({ children }) => <del className="line-through opacity-80">{children}</del>,
          ul: ({ children }) => <ul className={`${compact ? 'mb-2' : 'mb-4'} list-disc space-y-1 pl-5`}>{children}</ul>,
          ol: ({ children }) => <ol className={`${compact ? 'mb-2' : 'mb-4'} list-decimal space-y-1 pl-5`}>{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-4 border-l-4 border-[#DE3B34] bg-[#fff7f6] px-4 py-3 text-[#3a3a3a]">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-6 border-[#e5e5e5]" />,
          a: ({ href, children }) => {
            const embed = href ? toEmbedUrl(href) : null;
            if (embed && !compact) {
              return (
                <div className="my-5 aspect-video w-full overflow-hidden rounded-lg bg-black">
                  <iframe
                    src={embed}
                    title="Embedded video"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            }
            return (
              <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#DE3B34] underline underline-offset-2">
                {children}
              </a>
            );
          },
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src || ''}
              alt={alt || ''}
              className={`${compact ? 'my-2 max-h-40' : 'my-5'} h-auto w-full max-w-full rounded-sm object-cover`}
              loading="lazy"
            />
          ),
          table: ({ children }) => (
            <div className="my-5 w-full overflow-x-auto">
              <table className="min-w-full border-collapse border border-[#e5e5e5] text-left text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-[#f7f4f2]">{children}</thead>,
          th: ({ children }) => <th className="border border-[#e5e5e5] px-3 py-2 font-semibold">{children}</th>,
          td: ({ children }) => <td className="border border-[#e5e5e5] px-3 py-2 align-top">{children}</td>,
          code: ({ children }) => (
            <code className="rounded bg-[#f1efef] px-1.5 py-0.5 text-[0.9em] text-[#160A0A]">{children}</code>
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}

// Backward-compatible alias used by older imports.
export { RichTextField as BoldTextField };
