"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { Locale } from '@/lib/translations';
import { BlogPost, loadBlogBySlugFromServer, loadBlogsFromServer } from '@/lib/blogs';
import { FormattedText } from '@/components/BoldTextField';

export default function BlogDetailsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const slug = (params?.slug as string) || '';
  const lang: Locale = locale === 'ar' ? 'ar' : 'en';
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPage = async () => {
      const [post, allBlogs] = await Promise.all([loadBlogBySlugFromServer(slug), loadBlogsFromServer()]);
      setBlog(post);
      setRecentBlogs(allBlogs.filter((item) => item.slug !== slug).slice(0, 4));
    };
    void loadPage();
  }, [slug]);

  const text = useMemo(
    () => ({
      back: lang === 'ar' ? 'الرجوع إلى المدونة' : 'Back to Blogs',
      notFound: lang === 'ar' ? 'المقالة غير موجودة.' : 'Blog not found.',
      label: lang === 'ar' ? 'رؤى قانونية' : 'Legal Insights',
      published: lang === 'ar' ? 'تاريخ النشر' : 'Published',
      recent: lang === 'ar' ? 'أحدث المقالات' : 'Recent Posts',
      guidance: lang === 'ar' ? 'إرشادات قانونية' : 'Legal Guidance',
      guidanceText:
        lang === 'ar'
          ? 'للحصول على إرشاد مخصص، تواصل مع فريقنا القانوني.'
          : 'For advice tailored to your circumstances, speak with our legal team.',
      contact: lang === 'ar' ? 'تواصل معنا' : 'Contact us',
    }),
    [lang]
  );

  const bannerImage =
    lang === 'ar'
      ? blog?.bannerImageAr || blog?.bannerImage || blog?.imageAr || blog?.image || ''
      : blog?.bannerImage || blog?.image || '';
  const title = lang === 'ar' ? blog?.titleAr || blog?.title || '' : blog?.title || '';
  const shortDescription =
    lang === 'ar' ? blog?.shortDescriptionAr || blog?.shortDescription || '' : blog?.shortDescription || '';
  const content = lang === 'ar' ? blog?.contentAr || blog?.content || '' : blog?.content || '';

  return (
    <main className="min-h-screen bg-white" dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-28 md:px-10 md:pt-36">
        <Link
          href={`/${locale}/blogs`}
          className="inline-flex items-center gap-2 text-sm text-[#DE3B34] transition-colors hover:text-[#9B0F09]"
        >
          <span className="text-base leading-none">{lang === 'ar' ? '→' : '←'}</span>
          {text.back}
        </Link>

        {!blog ? (
          <p className="mt-12 text-[#4B4F58]">{text.notFound}</p>
        ) : (
          <article className={`mt-10 grid gap-10 lg:grid-cols-[minmax(0,72fr)_minmax(220px,28fr)] ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
            <div>
              <header className="pb-8">
                <p className="mb-3 text-sm text-[#DE3B34]">
                  {text.label} <span className="px-2 text-slate-300">/</span> {blog.date}
                </p>
                <h1 className="text-[34px] font-normal leading-[1.35] text-[#3a3a3a] md:text-[40px]" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  {title}
                </h1>
                <FormattedText
                  as="p"
                  text={shortDescription}
                  className="mt-5 max-w-3xl text-base leading-[1.8] text-[#4B4F58]"
                />
              </header>

              {bannerImage && (
                <div className="w-full max-w-full overflow-hidden rounded-sm bg-[#f5f5f5]">
                  <img
                    src={bannerImage}
                    alt={title}
                    className="block w-full max-w-full aspect-[4/3] object-cover object-center sm:aspect-[16/10] md:aspect-[570/352]"
                    loading="eager"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 72vw, 840px"
                  />
                </div>
              )}

              <div className="max-w-3xl py-10 md:py-12">
                <FormattedText
                  as="div"
                  text={content}
                  className="prose prose-slate max-w-none whitespace-pre-line text-[16px] leading-[1.8] text-[#3a3a3a] [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-sm [&_strong]:font-bold"
                />
              </div>
            </div>

            <aside className="h-fit lg:mt-2">
              <div className="overflow-hidden rounded-sm border border-[#e9e3de] bg-[#fffcfa] shadow-[0_12px_32px_rgba(22,10,10,0.06)]">
                <div className="border-b border-[#eadfd9] bg-[#160A0A] px-6 py-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/65">{text.published}</p>
                  <p className="mt-2 text-sm font-semibold">{blog.date}</p>
                </div>

                <div className="px-6 py-7">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#DE3B34]" />
                    <h2 className="text-2xl font-normal text-[#DE3B34]" style={{ fontFamily: 'Lora, Georgia, serif' }}>{text.recent}</h2>
                  </div>
                  <div className="mt-5 divide-y divide-[#eadfd9]">
                    {recentBlogs.map((recentBlog, index) => (
                      <Link
                        key={recentBlog.id}
                        href={`/${locale}/blogs/${recentBlog.slug}`}
                        className={`group flex gap-3 py-4 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}
                      >
                        <span className="mt-0.5 text-[11px] font-bold text-[#DE3B34]/70">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-sm leading-relaxed text-[#3a3a3a] transition-colors group-hover:text-[#DE3B34]">
                          {lang === 'ar' ? recentBlog.titleAr || recentBlog.title : recentBlog.title}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="my-7 h-px bg-[#eadfd9]" />
                  <h2 className="text-xl font-normal text-[#160A0A]" style={{ fontFamily: 'Lora, Georgia, serif' }}>{text.guidance}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B4F58]">{text.guidanceText}</p>
                  <Link
                    href={`/${locale}/contact`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#DE3B34] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#9B0F09]"
                  >
                    {text.contact} <span className="text-base leading-none">{lang === 'ar' ? '←' : '→'}</span>
                  </Link>
                </div>
              </div>
            </aside>
          </article>
        )}
      </section>
    </main>
  );
}
