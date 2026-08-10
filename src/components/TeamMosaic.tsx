"use client";

import Image from "next/image";
import Link from "next/link";
import { TeamMemberCard } from "@/data/team";

type TeamMosaicProps = {
  members: TeamMemberCard[];
  locale: "en" | "ar";
};

export default function TeamMosaic({ members, locale }: TeamMosaicProps) {
  const isRTL = locale === "ar";

  return (
    <div
      className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {members.map((member) => {
        const name = isRTL ? member.nameAr : member.nameEn;
        const role = isRTL ? member.roleAr : member.roleEn;
        const label = name || (isRTL ? "قريباً" : "Coming soon");

        const className =
          "group block overflow-hidden rounded-2xl border border-[#160A0A]/10 bg-white shadow-[0_8px_24px_-18px_rgba(22,10,10,0.35)] transition duration-400 hover:-translate-y-1 hover:border-[#DE3B34]/35 hover:shadow-[0_18px_36px_-20px_rgba(22,10,10,0.4)]";

        const body = (
          <>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#eeeae6]">
              <Image
                src={member.image}
                alt={label}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-top transition duration-700 group-hover:scale-[1.05]"
                priority={member.featured}
              />
            </div>
            <div className={`px-4 py-4 ${isRTL ? "text-right" : "text-left"}`}>
              {name ? (
                <>
                  <h4
                    className={`text-[15px] font-semibold leading-snug text-[#160A0A] ${
                      !isRTL ? "uppercase tracking-[0.04em]" : ""
                    }`}
                  >
                    {name}
                  </h4>
                  {role ? (
                    <p className="mt-1 text-xs font-medium text-[#DE3B34]">{role}</p>
                  ) : null}
                </>
              ) : (
                <p className="text-sm font-medium text-gray-400">{label}</p>
              )}
            </div>
          </>
        );

        if (member.slug && !member.pending) {
          return (
            <Link
              key={`${member.order}-${member.slug}`}
              href={`/${locale}/about/team/${member.slug}`}
              className={className}
              aria-label={name ? `${name} — ${role}` : label}
            >
              {body}
            </Link>
          );
        }

        return (
          <div key={`pending-${member.order}`} className={className} aria-label={label}>
            {body}
          </div>
        );
      })}
    </div>
  );
}
