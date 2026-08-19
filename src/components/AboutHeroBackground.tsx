"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  "/images/about/team-bg-v6.png",
  "/images/about/team-bg-1.png",
  "/images/about/team-bg-2.png",
] as const;

const INTERVAL_MS = 5000;

export default function AboutHeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {SLIDES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[#160A0A]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#160A0A]/35 via-transparent to-[#160A0A]/10" />
    </div>
  );
}
