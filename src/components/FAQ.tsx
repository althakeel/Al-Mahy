'use client';

import { useState } from 'react';
import { Locale } from '@/lib/translations';

const GOLD = '#B38D42';

interface FAQProps {
  locale: Locale;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<Locale, FAQItem[]> = {
  en: [
    {
      question: 'Why should I choose Almahy for Legal Services?',
      answer:
        'We combine 38 years of legal expertise with practical solutions, personalized advice, and dedicated client support.',
    },
    {
      question: 'How can I schedule a consultation with your legal team?',
      answer: 'You can book a consultation by phone, email, WhatsApp, or through our website.',
    },
    {
      question: 'Do you assist both individuals and businesses?',
      answer: 'We provide legal services for individuals, startups, SMEs, and large corporations.',
    },
    {
      question: 'Can I receive legal advice without visiting your office?',
      answer: 'We offer legal consultations online, by phone, and through video meetings.',
    },
    {
      question: 'How quickly can I speak with a legal expert?',
      answer: 'We aim to arrange consultations as quickly as possible, often on the same business day.',
    },
    {
      question: 'Do you serve clients outside the UAE?',
      answer: 'We assist international clients with legal matters in the UAE through remote consultations.',
    },
    {
      question: 'What should I prepare before my first legal consultation?',
      answer:
        'Bring any relevant documents and a summary of your legal matter for an effective consultation.',
    },
    {
      question: 'Are your legal consultations confidential?',
      answer: 'All consultations are handled with complete confidentiality and professional discretion.',
    },
    {
      question: 'How do you determine the legal strategy for a new case?',
      answer:
        'We carefully review your case, assess the legal position, and develop a strategy tailored to your objectives.',
    },
    {
      question: 'Can your team communicate in multiple languages?',
      answer: 'Our team assists clients in multiple languages to ensure clear and effective communication.',
    },
  ],
  ar: [
    {
      question: 'لماذا يجب أن أختار المحامy للخدمات القانونية؟',
      answer: 'نجمع بين 38 عامًا من الخبرة القانونية والحلول العملية والإرشاد المخصص ودعم العملاء المتفاني.',
    },
    {
      question: 'كيف يمكنني حجز استشارة مع فريقكم القانوني؟',
      answer: 'يمكنك حجز استشارة عبر الهاتف أو البريد الإلكتروني أو WhatsApp أو من خلال موقعنا.',
    },
    {
      question: 'هل تقدمون المساعدة للأفراد والشركات؟',
      answer: 'نقدم خدمات قانونية للأفراد والشركات الناشئة والشركات الصغيرة والمتوسطة والمؤسسات الكبيرة.',
    },
    {
      question: 'هل يمكنني الحصول على استشارة قانونية دون زيارة مكتبكم؟',
      answer: 'نقدم استشارات قانونية عبر الإنترنت والهاتف ومكالمات الفيديو.',
    },
    {
      question: 'ما مدى سرعة التحدث مع خبير قانوني؟',
      answer: 'نسعى لترتيب الاستشارات في أسرع وقت ممكن، وغالبًا في نفس يوم العمل.',
    },
    {
      question: 'هل تخدمون عملاء من خارج الإمارات؟',
      answer: 'نساعد العملاء الدوليين في المسائل القانونية داخل الإمارات من خلال استشارات عن بُعد.',
    },
    {
      question: 'ماذا يجب أن أجهّز قبل أول استشارة قانونية؟',
      answer: 'يرجى إحضار أي مستندات ذات صلة وملخص لمسألتك القانونية لضمان استشارة فعّالة.',
    },
    {
      question: 'هل الاستشارات القانونية سرية؟',
      answer: 'جميع الاستشارات تتم بسرية تامة وباحترافية مهنية كاملة.',
    },
    {
      question: 'كيف تحددون الاستراتيجية القانونية للقضية الجديدة؟',
      answer: 'نراجع قضيتك بعناية، ونقيّم الموقف القانوني، ونضع استراتيجية مخصصة لأهدافك.',
    },
    {
      question: 'هل يمكن لفريقكم التواصل بعدة لغات؟',
      answer: 'يساعد فريقنا العملاء بعدة لغات لضمان تواصل واضح وفعّال.',
    },
  ],
};

function ScalesIcon() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B38D42]/35 bg-[rgba(179,141,66,0.07)]">
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="4.5" r="1.5" fill={GOLD} />
        <path d="M16 6v4.5" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 12.5h18" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 12.5c0 3.2-1.8 5.8-4 7.2" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M25 12.5c0 3.2 1.8 5.8 4 7.2" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M3 19.7h6" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M23 19.7h6" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M3.5 20.2c0 1.4 1.2 2.5 2.7 2.5s2.7-1.1 2.7-2.5M23.1 20.2c0 1.4 1.2 2.5 2.7 2.5s2.7-1.1 2.7-2.5"
          stroke={GOLD}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path d="M16 10.5v9.5" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10 27.5h12" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 24.5h8l1 3H11l1-3Z" stroke={GOLD} strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function FAQ({ locale }: FAQProps) {
  const isArabic = locale === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = faqData[locale];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] px-4 py-5 md:px-8 md:py-5">
      <div
        className="pointer-events-none absolute left-0 top-0 h-36 w-36 opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 0% 0%, rgba(179,141,66,0.14), transparent 62%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 100% 100%, rgba(179,141,66,0.12), transparent 62%)',
        }}
      />

      <div className="relative mx-auto max-w-[1250px]">
        {/* Header */}
        <div className="mb-8 text-center md:mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#B38D42]/60" aria-hidden="true" />
            <ScalesIcon />
            <span className="h-px w-12 bg-[#B38D42]/60" aria-hidden="true" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#B38D42]">
            {isArabic ? 'الأسئلة الشائعة' : 'F A Q'}
          </p>
          <h2 className="mt-5 text-3xl font-bold text-[#160A0A] md:text-4xl">
            {isArabic ? 'الأسئلة المتكررة' : 'Frequently Asked Questions'}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[#B38D42]/55" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#160A0A]/65 md:text-base">
            {isArabic
              ? 'اطّلع على إجابات لأكثر الأسئلة شيوعًا حول استشاراتنا القانونية والخدمات المؤسسية وخدمات الكاتب العدل والحلول القانونية في دبي وجميع أنحاء الإمارات.'
              : 'Find answers to common questions about our legal consultation, corporate services, notary services, and legal solutions in Dubai and across the UAE.'}
          </p>
        </div>

        {/* FAQ grid — items-start prevents sibling cards stretching when one opens */}
        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`w-full self-start overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
                  isOpen
                    ? 'border border-[#B38D42] shadow-[0_10px_28px_rgba(179,141,66,0.14)]'
                    : 'border border-[#160A0A]/[0.06] shadow-[0_8px_22px_rgba(22,10,10,0.05)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className={`flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B38D42] md:px-6 md:py-5 ${
                    isArabic ? 'flex-row-reverse text-right' : ''
                  }`}
                >
                  <span
                    className="flex-1 text-[15px] font-semibold leading-snug text-[#160A0A] md:text-[16px]"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'border border-[#B38D42] bg-gradient-to-b from-[#C9A55A] to-[#B38D42] text-white shadow-[0_4px_12px_rgba(179,141,66,0.35)]'
                        : 'border border-[#B38D42]/65 bg-white text-[#B38D42]'
                    }`}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen ? (
                  <div className={`px-5 pb-5 md:px-6 md:pb-6 ${isArabic ? 'text-right' : 'text-left'}`}>
                    <div className="mb-4 h-px w-full bg-[#160A0A]/10" aria-hidden="true" />
                    <p className="text-[14px] leading-[1.75] text-[#160A0A]/70">{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
