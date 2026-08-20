export type TeamMemberCard = {
  order: number;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  image: string;
  slug?: string;
  featured?: boolean;
  pending?: boolean;
};

/**
 * Display order for the Our Team section on `/about`.
 * Image folder: `public/images/team/`
 */
export const team: TeamMemberCard[] = [
  {
    order: 1,
    nameEn: "Almahy Mohamed",
    nameAr: "المحي محمد",
    roleEn: "Founder & Managing Partner",
    roleAr: "المؤسس والمدير العام",
    image: "/images/team/team-13.webp",
    slug: "dr-almahy",
    featured: true,
  },
  {
    order: 2,
    nameEn: "Amin Kamel",
    nameAr: "أمين كامل",
    roleEn: "Chief Financial Officer",
    roleAr: "المدير المالي",
    image: "/images/team/amin-kamel.png",
    slug: "amin-kamel",
  },
  {
    order: 3,
    nameEn: "Mohamed Hassanein",
    nameAr: "محمد حسنين",
    roleEn: "Legal Consultant",
    roleAr: "مستشار قانوني",
    image: "/images/team/mohamed-hassanein-v2.png",
    slug: "mohamed-hassanein",
  },
  {
    order: 4,
    nameEn: "Maged Nafea",
    nameAr: "ماجد نافع",
    roleEn: "Legal Consultant",
    roleAr: "مستشار قانوني",
    image: "/images/team/team-02.png",
    slug: "maged-nafea",
  },
  {
    order: 5,
    nameEn: "Nasef Abdel Aal",
    nameAr: "ناصف عبد العال",
    roleEn: "Legal Consultant",
    roleAr: "مستشار قانوني",
    image: "/images/team/team-08.png",
    slug: "nasef-abdel-aal",
  },
  {
    order: 6,
    nameEn: "Mudasir Yaseen",
    nameAr: "مدثر ياسين",
    roleEn: "Accountant",
    roleAr: "محاسب",
    image: "/images/team/mudasir-yaseen.png",
    slug: "mudasir-yaseen",
  },
  {
    order: 7,
    nameEn: "Mahmoud Salah El Din",
    nameAr: "محمود صلاح الدين",
    roleEn: "Accountant",
    roleAr: "محاسب",
    image: "/images/team/mahmoud-salah-el-din.png",
    slug: "mahmoud-salah-eldein",
  },
  {
    order: 8,
    nameEn: "Mahmoud Abdel Fadeel",
    nameAr: "محمود عبد الفضيل",
    roleEn: "Legal Consultant",
    roleAr: "مستشار قانوني",
    image: "/images/team/team-10.png",
    slug: "mahmoud-abdel-fadeel",
  },
  {
    order: 9,
    nameEn: "Ahmed Osama",
    nameAr: "أحمد أسامة",
    roleEn: "Accountant",
    roleAr: "محاسب",
    image: "/images/team/ahmed-osama.png",
    slug: "ahmed-osama",
  },
  {
    order: 10,
    nameEn: "Dalia Ghonem",
    nameAr: "داليا غنيم",
    roleEn: "Legal Consultant",
    roleAr: "مستشارة قانونية",
    image: "/images/team/team-06.png",
    slug: "dalia-ghonem",
  },
  {
    order: 11,
    nameEn: "Rohith Sagar M",
    nameAr: "روهيث ساغار م",
    roleEn: "Full Stack Developer",
    roleAr: "مطور برمجيات متكامل",
    image: "/images/team/ROHI.png",
    slug: "rohith-sagar-m",
  },
  {
    order: 12,
    nameEn: "Amritha",
    nameAr: "أمريثا",
    roleEn: "Full Stack Developer",
    roleAr: "مطورة برمجيات متكاملة",
    image: "/images/team/team-03.png",
    slug: "amritha",
  },
  {
    order: 13,
    nameEn: "Rocky CS",
    nameAr: "روكي",
    roleEn: "Customer Support",
    roleAr: "دعم العملاء",
    image: "/images/team/team-12.png",
    slug: "rocky-cs",
  },
];

export function getTeamCards() {
  return [...team].sort((a, b) => a.order - b.order);
}
