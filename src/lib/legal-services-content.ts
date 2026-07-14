import { Locale } from '@/lib/translations';

export type LegalArea = {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
};

const images = {
  arbitration: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=700&fit=crop',
  bankruptcy: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=700&fit=crop',
  civil: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=700&fit=crop',
  competition: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=700&fit=crop',
  criminal: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=700&fit=crop',
  realEstate: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&h=700&fit=crop',
  maritime: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&h=700&fit=crop',
  family: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=700&fit=crop',
  insurance: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=700&fit=crop',
  ip: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&h=700&fit=crop',
  employment: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=700&fit=crop',
  injury: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=700&fit=crop',
  wills: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=700&fit=crop',
  corporate: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=700&fit=crop',
  licensing: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=700&fit=crop',
};

const legalAreasEn: LegalArea[] = [
  {
    id: 'arbitration',
    title: 'Arbitration, Banking & Tax',
    image: images.arbitration,
    paragraphs: [
      'Our arbitration, banking, and tax lawyers in Dubai advise businesses, financial institutions, and investors on commercial disputes, arbitration proceedings, banking regulations, corporate tax planning, VAT compliance, and cross-border financial matters across the UAE.',
      'We represent clients before arbitration tribunals and assist with arbitration agreements, enforcement of arbitral awards, financial regulatory compliance, and complex commercial transactions.',
    ],
  },
  {
    id: 'bankruptcy',
    title: 'Bankruptcy & Insolvency',
    image: images.bankruptcy,
    paragraphs: [
      'Our bankruptcy and insolvency lawyers in Dubai advise businesses, creditors, and individuals on restructuring, insolvency proceedings, debt recovery, and liquidation across the UAE.',
      'We assist with corporate restructuring, creditor negotiations, bankruptcy filings, court-supervised liquidation, asset recovery, and dispute resolution.',
    ],
  },
  {
    id: 'civil',
    title: 'Civil Law',
    image: images.civil,
    paragraphs: [
      'Our civil lawyers in Dubai represent individuals and businesses in contract disputes, property matters, compensation claims, tort liability, debt recovery, and commercial litigation across the UAE.',
      'Our team handles civil disputes through negotiation, mediation, and litigation with careful case preparation and strong courtroom advocacy.',
    ],
  },
  {
    id: 'competition',
    title: 'Competition',
    image: images.competition,
    paragraphs: [
      'As the UAE continues opening to global markets, compliance with competition law is essential. We advise on UAE Competition Law, merger control regulations, and anti-competitive risk.',
      'Our services include agreement reviews, merger clearance support, defense in cartel and dominance investigations, and pricing policy guidance.',
    ],
  },
  {
    id: 'criminal',
    title: 'Criminal',
    image: images.criminal,
    paragraphs: [
      'Our criminal defense lawyers in Dubai represent individuals and businesses in criminal investigations, financial crimes, fraud, cybercrime, breach of trust, defamation, and other criminal matters across the UAE.',
      'Our team assists with police investigations, prosecution proceedings, bail applications, criminal appeals, and legal defense before UAE courts.',
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    image: images.realEstate,
    paragraphs: [
      'Our real estate lawyers in Dubai advise property owners, developers, investors, landlords, and tenants across the UAE on transactions, leasing, off-plan investments, due diligence, and real estate disputes.',
    ],
  },
  {
    id: 'maritime',
    title: 'Shipping, Maritime & Aviation',
    image: images.maritime,
    paragraphs: [
      'Our shipping and maritime lawyers in Dubai advise shipping companies, logistics providers, airlines, and freight operators on UAE maritime and aviation law, vessel disputes, cargo claims, and regulatory matters.',
    ],
  },
  {
    id: 'family',
    title: 'Family Law',
    image: images.family,
    paragraphs: [
      'Our family lawyers in Dubai assist UAE residents and expatriates with divorce, child custody, alimony, guardianship, inheritance, and family disputes before Sharia and civil courts.',
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance Law',
    image: images.insurance,
    paragraphs: [
      'Our insurance lawyers in Dubai represent policyholders, insurers, brokers, and businesses in insurance disputes, claim disputes, policy interpretation, and insurance litigation.',
    ],
  },
  {
    id: 'ip',
    title: 'Intellectual Property Services',
    image: images.ip,
    paragraphs: [
      'Our intellectual property lawyers in Dubai help businesses protect trademarks, patents, copyrights, trade secrets, and industrial designs through registration, licensing, and enforcement.',
    ],
  },
  {
    id: 'employment',
    title: 'Employment & Labor Services',
    image: images.employment,
    paragraphs: [
      'Our employment lawyers in Dubai advise employers and employees on UAE labour law, employment contracts, wrongful termination, MOHRE matters, end-of-service benefits, and labour court cases.',
    ],
  },
  {
    id: 'injury',
    title: 'Personal Injury & Tort',
    image: images.injury,
    paragraphs: [
      'Our personal injury lawyers in Dubai represent individuals seeking compensation for traffic accidents, workplace injuries, medical negligence, product liability, and other personal injury claims.',
    ],
  },
  {
    id: 'wills',
    title: 'Wills, Trust & Probate Services',
    image: images.wills,
    paragraphs: [
      'Our wills and probate lawyers in Dubai assist UAE residents and expatriates with will drafting, probate, estate administration, inheritance planning, and DIFC Wills.',
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate & Commercial',
    image: images.corporate,
    paragraphs: [
      'Our corporate lawyers in Dubai advise businesses on company formation, shareholder agreements, commercial contracts, mergers and acquisitions, corporate restructuring, and business disputes.',
    ],
  },
  {
    id: 'licensing',
    title: 'Licensing & Regulatory',
    image: images.licensing,
    paragraphs: [
      'Our licensing lawyers assist companies with business licenses, regulatory approvals, government permits, compliance, renewals, and free zone and mainland requirements across the UAE.',
    ],
  },
];

const legalAreasAr: LegalArea[] = [
  {
    id: 'arbitration',
    title: 'التحكيم والمصارف والضرائب',
    image: images.arbitration,
    paragraphs: [
      'يقدّم محامونا في دبي استشارات في النزاعات التجارية، إجراءات التحكيم، الأنظمة المصرفية، التخطيط الضريبي للشركات، امتثال ضريبة القيمة المضافة، والمعاملات المالية العابرة للحدود في الإمارات.',
      'نمثل العملاء أمام هيئات التحكيم ونساعد في اتفاقيات التحكيم، تنفيذ أحكام التحكيم، والامتثال التنظيمي المالي.',
    ],
  },
  {
    id: 'bankruptcy',
    title: 'الإفلاس والتصفية',
    image: images.bankruptcy,
    paragraphs: [
      'نقدّم استشارات في إعادة الهيكلة، إجراءات الإفلاس، استرداد الديون، والتصفية للشركات والدائنين والأفراد في الإمارات.',
      'نساعد في إعادة هيكلة الشركات، التفاوض مع الدائنين، تقديم طلبات الإفلاس، التصفية القضائية، واسترداد الأصول.',
    ],
  },
  {
    id: 'civil',
    title: 'القانون المدني',
    image: images.civil,
    paragraphs: [
      'نمثل الأفراد والشركات في نزاعات العقود، المسائل العقارية، مطالبات التعويض، المسؤولية التقصيرية، واسترداد الديون والتقاضي التجاري في الإمارات.',
      'نتولى النزاعات المدنية عبر التفاوض والوساطة والتقاضي مع إعداد قوي للقضايا والتمثيل أمام المحاكم.',
    ],
  },
  {
    id: 'competition',
    title: 'قانون المنافسة',
    image: images.competition,
    paragraphs: [
      'مع توسع أسواق الإمارات، أصبح الامتثال لقوانين المنافسة ضرورياً. نقدّم استشارات حول قانون المنافسة الإماراتي وضوابط الاندماج والمخاطر المنافسية.',
      'تشمل خدماتنا مراجعة الاتفاقيات، دعم موافقات الاندماج، والدفاع في تحقيقات الكارتيل والهيمنة.',
    ],
  },
  {
    id: 'criminal',
    title: 'القضايا الجنائية',
    image: images.criminal,
    paragraphs: [
      'نمثل الأفراد والشركات في التحقيقات الجنائية، الجرائم المالية، الاحتيال، الجرائم الإلكترونية، خيانة الأمانة، والقذف وغيرها من القضايا الجنائية في الإمارات.',
      'نساعد في تحقيقات الشرطة، إجراءات الادعاء، طلبات الكفالة، الاستئناف الجنائي، والدفاع أمام محاكم الإمارات.',
    ],
  },
  {
    id: 'real-estate',
    title: 'القانون العقاري',
    image: images.realEstate,
    paragraphs: [
      'نقدّم استشارات للملاك والمطورين والمستثمرين والمؤجرين والمستأجرين في المعاملات العقارية، الإيجار، الاستثمار على الخارطة، والفحص القانوني والنزاعات العقارية.',
    ],
  },
  {
    id: 'maritime',
    title: 'الشحن والبحرية والطيران',
    image: images.maritime,
    paragraphs: [
      'نقدّم استشارات لشركات الشحن والخدمات اللوجستية وشركات الطيران في قانون البحرية والطيران الإماراتي، نزاعات السفن، مطالبات الشحن، والامتثال التنظيمي.',
    ],
  },
  {
    id: 'family',
    title: 'قانون الأسرة',
    image: images.family,
    paragraphs: [
      'نساعد المقيمين والمغتربين في الإمارات في الطلاق، حضانة الأطفال، النفقة، الوصاية، الميراث، ونزاعات الأسرة أمام المحاكم الشرعية والمدنية.',
    ],
  },
  {
    id: 'insurance',
    title: 'قانون التأمين',
    image: images.insurance,
    paragraphs: [
      'نمثل حاملي الوثائق وشركات التأمين والوسطاء في نزاعات التأمين، مطالبات التعويض، تفسير الوثائق، والتقاضي التأميني.',
    ],
  },
  {
    id: 'ip',
    title: 'الملكية الفكرية',
    image: images.ip,
    paragraphs: [
      'نساعد الشركات على حماية العلامات التجارية وبراءات الاختراع وحقوق النشر والأسرار التجارية عبر التسجيل والترخيص ومكافحة التعدي.',
    ],
  },
  {
    id: 'employment',
    title: 'قانون العمل والعمالة',
    image: images.employment,
    paragraphs: [
      'نقدّم استشارات لأصحاب العمل والموظفين في قانون العمل الإماراتي، عقود العمل، الفصل التعسفي، شؤون وزارة الموارد البشرية، ومستحقات نهاية الخدمة.',
    ],
  },
  {
    id: 'injury',
    title: 'الإصابات الشخصية والمسؤولية',
    image: images.injury,
    paragraphs: [
      'نمثل الأفراد في مطالبات التعويض عن حوادث المرور، إصابات العمل، الأخطاء الطبية، مسؤولية المنتجات، وغيرها من قضايا الإصابات الشخصية.',
    ],
  },
  {
    id: 'wills',
    title: 'الوصايا والتركات والوصايا الدولية',
    image: images.wills,
    paragraphs: [
      'نساعد المقيمين والمغتربين في صياغة الوصايا، إجراءات التركة، تخطيط الميراث، ترتيبات الوصاية، ووصايا مركز دبي المالي.',
    ],
  },
  {
    id: 'corporate',
    title: 'الشركات والتجارة',
    image: images.corporate,
    paragraphs: [
      'نقدّم استشارات في تأسيس الشركات، اتفاقيات المساهمين، العقود التجارية، الاندماج والاستحواذ، إعادة الهيكلة، ونزاعات الأعمال.',
    ],
  },
  {
    id: 'licensing',
    title: 'التراخيص والتنظيم',
    image: images.licensing,
    paragraphs: [
      'نساعد الشركات في الحصول على التراخيص التجارية، الموافقات التنظيمية، التصاريح الحكومية، التجديدات، ومتطلبات المناطق الحرة والبر الرئيسي.',
    ],
  },
];

export const getLegalAreas = (locale: Locale): LegalArea[] =>
  locale === 'ar' ? legalAreasAr : legalAreasEn;

export const getLegalServicesCopy = (locale: Locale) =>
  locale === 'ar'
    ? {
        badge: 'الخدمات القانونية',
        title: 'المحي للخدمات القانونية',
        subtitle:
          'حلول قانونية شاملة في التحكيم، المصارف، الضرائب، القضايا المدنية والجنائية، العقارات، الأحوال الشخصية، العمل، والتقاضي أمام المحاكم والجهات المختصة في دولة الإمارات.',
        description:
          'تقدّم المحي للخدمات القانونية استشارات قانونية شاملة في دبي للأفراد والشركات والمستثمرين في جميع أنحاء الإمارات. يقدّم فريقنا من المحامين ذوي الخبرة الاستشارات القانونية والتقاضي وقانون الشركات والعقارات وقانون الأسرة وتسوية النزاعات بحلول عملية تركز على العميل.',
        bookConsultation: 'احجز استشارة',
        latestNews: 'آخر الأخبار',
        expertiseLabel: 'خبرة متعددة التخصصات',
        expertiseTitle: 'التحكيم والمنازعات التجارية',
        newsTitle: 'أحدث الأخبار القانونية',
        newsSub:
          'آخر المستجدات القانونية والتنظيمية ذات الصلة بالأعمال والتقاضي في الإمارات.',
        autoUpdated: 'تحديث تلقائي',
        readMore: 'اقرأ المزيد',
      }
    : {
        badge: 'Legal Services',
        title: 'ALMAHY FOR LEGAL SERVICES',
        subtitle: 'Comprehensive Legal Services in Dubai.',
        description:
          'Almahy for Legal Services provides comprehensive legal services in Dubai for individuals, businesses, and investors across the UAE. Our experienced lawyers offer legal consultation, litigation, corporate law, real estate law, family law, and dispute resolution with practical, client-focused solutions.',
        bookConsultation: 'Book Consultation',
        latestNews: 'Latest News',
        expertiseLabel: 'Multi-disciplinary expertise',
        expertiseTitle: 'Arbitration & Commercial Disputes',
        newsTitle: 'Latest UAE Legal News & Updates',
        newsSub:
          'Stay informed with the latest UAE legal news, regulatory updates, court decisions, and practical legal insights from our experienced lawyers.',
        autoUpdated: 'Auto-updated',
        readMore: 'Read more',
      };
