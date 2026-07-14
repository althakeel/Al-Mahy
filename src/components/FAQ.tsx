'use client';

import { useState } from 'react';
import { Locale } from '@/lib/translations';

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
      question: "Why should I choose Almahy for Legal Services? ",
      answer: "We combine 38 years of legal expertise with practical solutions, personalized advice, and dedicated client support."
    },
    {
      question: "How can I schedule a consultation with your legal team? ",
      answer: "You can book a consultation by phone, email, WhatsApp, or through our website."
    },
    {
      question: "Do you assist both individuals and businesses? ",
      answer: "We provide legal services for individuals, startups, SMEs, and large corporations."
    },
    {
      question: "Can I receive legal advice without visiting your office? ",
      answer: "We offer legal consultations online, by phone, and through video meetings."
    },
    {
      question: "How quickly can I speak with a legal expert? ",
      answer: "We aim to arrange consultations as quickly as possible, often on the same business day."
    },
    {
      question: "Do you serve clients outside the UAE",
      answer: "We assist international clients with legal matters in the UAE through remote consultations."
    },
    {
      question: "What should I prepare before my first legal consultation? ",
      answer: "Bring any relevant documents and a summary of your legal matter for an effective consultation."
    },
    {
      question: "Are your legal consultations confidential? ",
      answer: "All consultations are handled with complete confidentiality and professional discretion."
    },
     {
      question: "How do you determine the legal strategy for a new case? ",
      answer: "We carefully review your case, assess the legal position, and develop a strategy tailored to your object"
    },
    {
      question: "Can your team communicate in multiple languages?",
      answer: "Our team assists clients in multiple languages to ensure clear and effective communication."
    },

  ],
  ar: [
    {
      question: "كم تكلف خدمات المحاسبة أو الضرائب؟",
      answer: "تختلف الأسعار حسب حجم الشركة واحتياجاتك. اتصل بنا للحصول على عرض سعر مخصص."
    },
    {
      question: "هل تقدمون باقات شهرية أو سنوية؟",
      answer: "نعم، نقدم باقات شهرية وسنوية حسب متطلبات عملك."
    },
    {
      question: "هل أنتم مسجلون لدى الهيئة الاتحادية للضرائب؟",
      answer: "نعم، نحن وكلاء ضرائب معتمدون لدى الهيئة الاتحادية للضرائب."
    },
    {
      question: "هل ستمثلوننا أمام الهيئة في حالة التدقيق؟",
      answer: "نعم، نقدم التمثيل الكامل أمام الهيئة الاتحادية للضرائب."
    },
    {
      question: "هل تقبلون البيانات إلكترونياً؟",
      answer: "نعم، نقبل البيانات الإلكترونية ونعمل مع جميع الأنظمة المحاسبية الرئيسية."
    },
    {
      question: "هل تساعدون في تنظيم الملفات القديمة أو المتأخرة؟",
      answer: "نعم، يمكننا مساعدتك في تنظيم وأرشفة سجلاتك."
    },
  ]
};

export default function FAQ({ locale }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = faqData[locale];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-yellow-50 py-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Title & Icon */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
            {locale === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl">
            {locale === 'en'
              ? "Find answers to common questions about our legal consultation, corporate services, notary services, and legal solutions in Dubai and across the UAE."
              : 'اطّلع على إجابات لأكثر الأسئلة شيوعًا حول خدماتنا القانونية، بما في ذلك الاستشارات القانونية، والخدمات المؤسسية، وخدمات الكاتب العدل، والحلول القانونية في دبي وجميع أنحاء دولة الإمارات العربية المتحدة.'}
          </p>
        </div>
        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-lg border border-gray-200 transition-all duration-300 overflow-hidden px-0 md:px-2"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-7 text-left group focus:outline-none focus:ring-2 focus:ring-[#DE3B34]/40"
              >
                <span className="font-bold text-gray-900 text-lg md:text-xl pr-4 group-hover:text-[#c73731] transition-colors">
                  {faq.question}
                </span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#DE3B34] transition-colors group-hover:border-[#DE3B34]/30 group-hover:bg-[#DE3B34]/5">
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {/* Answer */}
              <div
                className={`px-8 pb-7 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                style={{overflow: 'hidden'}}
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
