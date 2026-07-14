"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { Locale } from '@/lib/translations';
import {
  BlogPost,
  loadBlogsFromServer,
  loadBlogsPageBannerConfigFromServer,
} from '@/lib/blogs';

const FEATURED_BLOG_SLUG =
  'understanding-the-latest-tax-law-changes-in-the-uae-what-residents-non-residents-and-businesses-should-know';

export default function BlogsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const lang: Locale = locale === 'ar' ? 'ar' : 'en';
  const isRTL = lang === 'ar';
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bannerCardTitle, setBannerCardTitle] = useState('');
  const [bannerCardSub, setBannerCardSub] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const fallbackBanner = '/assets/banner/blogs-background.webp';

  useEffect(() => {
    const loadServerData = async () => {
      setIsLoading(true);
      try {
        const [serverBlogs, bannerConfig] = await Promise.all([
          loadBlogsFromServer(),
          loadBlogsPageBannerConfigFromServer(),
        ]);

        setBlogs(serverBlogs);
        setBannerUrl(bannerConfig.bannerUrl);
        setBannerCardTitle(lang === 'ar' ? bannerConfig.card.titleAr : bannerConfig.card.titleEn);
        setBannerCardSub(lang === 'ar' ? bannerConfig.card.subAr : bannerConfig.card.subEn);
      } finally {
        setIsLoading(false);
      }
    };

    void loadServerData();
  }, [lang]);

  const tx = useMemo(() => ({
    label: lang === 'ar' ? 'رؤى قانونية' : 'Legal Insights',
    exploreTitle: lang === 'ar' ? 'استكشف المقالات' : 'Explore Articles',
    exploreSub:
      lang === 'ar'
        ? 'اطلع على أحدث المقالات القانونية والتحديثات التنظيمية في الإمارات.'
        : 'Browse expert legal articles, UAE updates, and practical guidance from our team.',
    articlesCount: lang === 'ar' ? 'مقال' : 'Articles',
    noBlogs: lang === 'ar' ? 'لا توجد مقالات منشورة بعد.' : 'No articles published yet.',
    readMore: lang === 'ar' ? 'اقرأ المزيد' : 'Read more',
    bannerTitle: lang === 'ar' ? 'المدونة القانونية' : 'LATEST LEGAL UPDATES ',
    bannerSub: lang === 'ar' ? 'مقالات قانونية حديثة من فريقنا.' : 'Stay informed with expert legal articles, UAE regulatory updates, court decisions, and practical guidance for individuals, businesses, and investors.',
    morePosts: lang === 'ar' ? 'المزيد من المقالات' : 'More Posts',
  }), [lang]);

  const effectiveBanner = bannerUrl || fallbackBanner;
  const orderedBlogs = useMemo(
    () =>
      [...blogs].sort((first, second) => {
        if (first.slug === FEATURED_BLOG_SLUG) return -1;
        if (second.slug === FEATURED_BLOG_SLUG) return 1;
        return second.createdAt - first.createdAt;
      }),
    [blogs]
  );

  return (
    <main className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'} style={{ fontFamily: 'Montserrat, sans-serif' }}>

      {/* ── Independent Blogs Page Banner ── */}
      <div
        className="relative w-full overflow-hidden bg-[#1a1a1a]"
        style={{ minHeight: 'clamp(480px, 42vw, 620px)' }}
      >
        {/* Background image */}
        <img
          src={effectiveBanner}
          alt={tx.bannerTitle}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/20" />

        {/* Card overlay */}
        <div
          className={`relative z-10 mx-auto flex w-full max-w-[1320px] items-center px-5 py-10 md:px-10 md:py-14 ${isRTL ? 'justify-start md:justify-end' : 'justify-start'}`}
          style={{ minHeight: 'clamp(480px, 42vw, 620px)' }}
        >
          <div
            className={`w-full max-w-[470px] rounded-2xl border border-white/30 bg-black/35 p-6 shadow-2xl backdrop-blur-md md:p-7 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          >
            <div className={`mb-4 flex items-center gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <span className="inline-block h-[3px] w-8 bg-[#DE3B34]" />
              <p className="text-[10px] tracking-[0.22em] uppercase font-bold text-white/80">
                {tx.label}
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
              {bannerCardTitle || tx.bannerTitle}
            </h2>
            <p className="text-sm leading-relaxed text-white/85 md:text-base">
              {bannerCardSub || tx.bannerSub}
            </p>
          </div>
        </div>
      </div>

      {/* ── Grid Section ── */}
      <section className={`mx-auto mt-8 max-w-[1250px] px-4 pb-24 pt-20 md:px-8 lg:relative ${isRTL ? 'lg:-translate-x-6' : 'lg:translate-x-6'}`}>

        {/* Section heading */}
        {/* <h2 className="text-3xl md:text-4xl font-extrabold text-[#160A0A] mb-10">
          {lang === 'ar' ? 'Legal Articles & UAE Updates' : 'Legal Articles & UAE Updates'}
        </h2> */}


        <div className="relative mb-12 overflow-hidden rounded-3xl border border-[#E6DFD8] bg-gradient-to-br from-[#FFFCFA] via-[#F7F3EF] to-[#F0EBE6] px-6 py-8 shadow-[0_12px_40px_rgba(22,10,10,0.06)] md:px-10 md:py-10">
          <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-[#DE3B34]/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-y-4 left-0 w-1 rounded-full bg-gradient-to-b from-[#DE3B34] via-[#C9A227] to-[#DE3B34]/40" />

          <div className={`relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between ${isRTL ? 'pr-5' : 'pl-5'}`}>
            <div className={`flex items-start gap-5 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#DE3B34]/15 bg-white shadow-sm">
                <svg className="h-7 w-7 text-[#DE3B34]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <div>
                <div className={`mb-3 flex items-center gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                  <span className="inline-block h-[2px] w-10 bg-[#DE3B34]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#DE3B34]">
                    {tx.label}
                  </p>
                </div>
                <h3 className="text-2xl font-extrabold text-[#160A0A] md:text-3xl" style={{ fontFamily: 'Georgia, serif' }}>
                  {tx.exploreTitle}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  {tx.exploreSub}
                </p>
              </div>
            </div>

            {!isLoading && blogs.length > 0 ? (
              <div className={`flex shrink-0 items-center gap-4 rounded-2xl border border-white/80 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-3xl font-bold leading-none text-[#160A0A]">{blogs.length}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {tx.articlesCount}
                  </p>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <a
                  href="#articles"
                  className="inline-flex items-center gap-2 rounded-full bg-[#DE3B34] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-[#c73731]"
                >
                  {lang === 'ar' ? 'عرض الكل' : 'View All'}
                  <span>{isRTL ? '←' : '→'}</span>
                </a>
              </div>
            ) : null}
          </div>
        </div>
        {!isLoading && blogs.length === 0 && (
          <p className="text-slate-400 text-sm">{tx.noBlogs}</p>
        )}

        <div id="articles" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 scroll-mt-24">
          {isLoading && Array.from({ length: 6 }).map((_, index) => (
            <article key={`skeleton-${index}`} className="flex flex-col overflow-hidden rounded-sm border border-slate-200/80 animate-pulse">
              <div className="aspect-[16/10] w-full bg-slate-200" />
              <div className="pt-4 px-5 pb-5">
                <div className="h-5 w-[88%] bg-slate-200 rounded mb-2" />
                <div className="h-5 w-[70%] bg-slate-200 rounded mb-4" />
                <div className="h-3 w-24 bg-slate-200 rounded mb-4" />
                <div className="w-8 h-0.5 bg-slate-200 mb-4" />
                <div className="h-3 w-full bg-slate-200 rounded mb-2" />
                <div className="h-3 w-[95%] bg-slate-200 rounded mb-2" />
                <div className="h-3 w-[80%] bg-slate-200 rounded mb-5" />
                <div className="h-3 w-28 bg-slate-200 rounded" />
              </div>
            </article>
          ))}

          {orderedBlogs.map((blog) => (
            <article key={blog.id} className="flex flex-col group shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden rounded-sm">
              {(() => {
                const cardImage = lang === 'ar' ? blog.imageAr || blog.image : blog.image;
                const cardTitle = lang === 'ar' ? blog.titleAr || blog.title : blog.title;
                const cardShortDescription = lang === 'ar' ? blog.shortDescriptionAr || blog.shortDescription : blog.shortDescription;

                return (
                  <>
              {/* Image */}
              <Link href={`/${locale}/blogs/${blog.slug}`} className="block w-full max-w-full overflow-hidden">
                <img
                  src={cardImage}
                  alt={cardTitle}
                  className="aspect-[16/10] h-auto w-full max-w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>
              <div className="pt-4 px-5 pb-5">
              {/* Title */}
              <Link href={`/${locale}/blogs/${blog.slug}`}>
                <h3 className="text-base font-extrabold text-[#160A0A] leading-snug mb-2 group-hover:text-[#DE3B34] transition-colors line-clamp-2">
                  {cardTitle}
                </h3>
              </Link>
              {/* Meta */}
              <p className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mb-3">
                {blog.date}
              </p>
              {/* Red divider */}
              <div className="w-8 h-0.5 bg-[#DE3B34] mb-3" />
              {/* Excerpt */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">{cardShortDescription}</p>
              {/* Read more */}
              <Link
                href={`/${locale}/blogs/${blog.slug}`}
                className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#DE3B34] hover:gap-3 transition-all"
              >
                {tx.readMore}
                <span className="text-sm leading-none">{isRTL ? '←' : '→'}</span>
              </Link>
              </div>
                  </>
                );
              })()}
            </article>
          ))}
        </div>

        {/* More Posts button */}
        {!isLoading && blogs.length > 0 && (
          <div className="flex justify-center mt-14">
            <button
              className="px-10 py-3 bg-[#DE3B34] text-white text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#9B0F09] transition-colors"
            >
              {tx.morePosts}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

