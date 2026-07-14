'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/translations';

interface ServicesSectionProps {
  locale: Locale;
}

const servicesData = {
  en: {
    title: 'Almahy Legal Services',
    services: [
      {
        title: 'LEGAL SERVICES',
        description: 'Expert legal services in Dubai for individuals and businesses, including legal consultation, contract drafting, dispute resolution, litigation support, and strategic legal advice. Our experienced lawyers provide practical solutions tailored to your legal needs across the UAE.',
        image: '/assets/services/legal.webp',
        alt: 'Legal consultation and legal services in Dubai',
        url: '/legal-services'
      },
      {
        title: 'CORPORATE SERVICES',
        description: 'Comprehensive corporate services for startups, SMEs, and established businesses, including company formation, business setup, governance, compliance, licensing, restructuring, and ongoing corporate legal support throughout the UAE.',
        image: '/assets/services/corporate.webp',
        alt: 'Corporate legal services and business setup in Dubai',
        url: '/corporate-services'
      },
      {
        title: 'NOTARY PUBLIC SERVICES',
        description: 'Professional notary public services, including power of attorney preparation, document notarization, legal declarations, attestations, and certification to ensure your documents meet all legal and government requirements.',
        image: '/assets/services/notory.webp',
        alt: 'Notary public services in Dubai',
        url: '/notary-public-services'
      },
      {
        title: 'ACCOUNTING SERVICES',
        description:"Reliable accounting services designed to help businesses maintain financial accuracy, regulatory compliance, VAT and corporate tax obligations, bookkeeping, payroll, and financial reporting across the UAE.",
        image: '/assets/services/accounting.webp',
        alt: 'Accounting and tax services in the UAE',
        url: '/accounting-services'
      },
      {
        title: 'SECOND PASSPORT',
        description: "Professional guidance on second citizenship and residency-by-investment programs, including eligibility assessment, document preparation, application management, and end-to-end support for international mobility.",
        image: '/assets/services/passport.webp',
        alt: 'Second citizenship and residency advisory services',
        url: '/second-passport'
      },
      {
        title: 'EXPERT REPORTS',
        description: "Preparation of professional expert reports and legal documentation to support commercial disputes, court proceedings, arbitration, insurance claims, and technical matters with clear, evidence-based analysis",
        image: '/assets/services/reports.webp',
        alt: 'Professional legal expert reports in Dubai',
        url: '/expert-reports'
      }
    ]
  },
  ar: {
    title: 'خدماتنا',
    services: [
      {
        title: 'الخدمات القانونية',
        description: 'دعم قانوني شامل للأفراد والشركات، يشمل الاستشارات والصياغة والمراجعة ووضع الاستراتيجيات القانونية في مختلف المجالات.',
        image: '/assets/services/legal.webp',
        alt: 'Legal consultation and legal services in Dubai',
        url: '/legal-services'
      },
      {
        title: 'خدمات الشركات',
        description: 'تأسيس الشركات وإعادة الهيكلة والحوكمة والامتثال بما يتناسب مع الشركات الناشئة والمؤسسات الصغيرة والمتوسطة والشركات الكبرى في الإمارات.',
        image: '/assets/services/corporate.webp',
        alt: 'Corporate legal services and business setup in Dubai',
        url: '/corporate-services'
      },
      {
        title: 'خدمات الكاتب العدل',
        description: 'مساندة في إجراءات التوثيق وتجهيز معاملات التصديق على المستندات والتأكد من توافقها مع المتطلبات القانونية.',
        image: '/assets/services/notory.webp',
        alt: 'Notary public services in Dubai',
        url: '/notary-public-services'
      },
      {
        title: 'خدمات المحاسبة',
        description: 'توفر شركة الخليج ستار للمحاسبة خدمات محاسبية من خلال محاسبين محترفين مؤهلين يتمتعون بخبرة واسعة في مختلف أنشطة الشركات، ونجاح أي مؤسسة يعتمد على فعالية نظامها المحاسبي والمالي، والمحاسب المحترف المختص هو حجر الزاوية في هذا النظام',
        image: '/assets/services/accounting.webp',
        alt: 'Accounting and tax services in the UAE',
        url: '/accounting-services'
      },
      {
        title: 'الجواز الثاني',
        description: 'استشارات متخصصة لمسارات الحصول على جواز سفر ثانٍ أو جنسية ثانية، بما يشمل مراجعة الأهلية وتجهيز المستندات ومتابعة الإجراءات.',
        image: '/assets/services/passport.webp',
        alt: 'Second citizenship and residency advisory services',
        url: '/second-passport'
      },
      {
        title: 'تقارير الخبرة',
        description: 'إعداد تقارير خبرة فنية وقانونية واضحة ومنظمة لدعم النزاعات والمطالبات والإجراءات القضائية.',
        image: '/assets/services/reports.webp',
        alt: 'Professional legal expert reports in Dubai',
        url: '/expert-reports'
      }
    ]
  }
};

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const content = servicesData[locale];

  return (
    <section className="w-full relative">
      {/* Background Section */}
      <div 
        className="relative w-full py-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=600&fit=crop")'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#DE3B34'}}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#CECDCB'}}></div>
        </div>

        <div className="relative px-4 md:px-8">
          <div className="max-w-[1250px] mx-auto">
            {/* Title with decorative elements */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 backdrop-blur-sm rounded-full mb-6" style={{backgroundColor: 'rgba(248, 228, 139, 0.1)', border: '1px solid rgba(248, 228, 139, 0.2)'}}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#DE3B34'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-sm" style={{color: '#DE3B34'}}>
                  {locale === 'en' ? 'What We Offer' : 'ما نقدمه'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {content.title}
              </h2>
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 rounded" style={{backgroundColor: '#DE3B34'}}></div>
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#DE3B34'}}></div>
                  <div className="h-1 w-12 rounded" style={{backgroundColor: '#DE3B34'}}></div>
                </div>
              </div>
            </div>

            {/* Services Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {content.services.map((service, index) => (
                <Link
                  key={index}
                  href={`/${locale}${service.url}`}
                  className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl block"
                  style={{
                    '--shadow-color': 'rgba(191, 156, 74, 0.2)'
                  } as React.CSSProperties}
                >
                  {/* Image Container with Overlay */}
                  <div className="relative w-full h-[240px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" style={{backgroundColor: '#CECDCB'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />}
                        {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                        {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                        {index > 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />}
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    {/* Title with accent */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-1 h-8 rounded-full flex-shrink-0" style={{backgroundColor: '#DE3B34'}}></div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight transition-colors duration-300" style={{color: '#160A0A'}} onMouseEnter={(e) => {e.currentTarget.style.color = '#CECDCB'}} onMouseLeave={(e) => {e.currentTarget.style.color = '#160A0A'}}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300" style={{color: '#FFB6B6'}} onMouseEnter={(e) => {e.currentTarget.style.color = '#CECDCB'}} onMouseLeave={(e) => {e.currentTarget.style.color = '#FFB6B6'}}>
                      <span>{locale === 'en' ? 'Learn More' : 'اعرف المزيد'}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-1 w-0 bg-gradient-to-r from-[#DE3B34] to-[#F0716B] group-hover:w-full transition-all duration-500"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
