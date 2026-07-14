import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchStructuredData from "@/components/SearchStructuredData";
import { isValidLocale, getLocaleDirection } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Almahy Legal Service",
  description: "Professional accounting services",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const isValidLoc = isValidLocale(locale);

  return (
    <>
      <SearchStructuredData locale={isValidLoc ? (locale as "en" | "ar") : "en"} />
      <Navbar locale={isValidLoc ? locale : "en"} />
      {children}
      <Footer locale={isValidLoc ? locale : "en"} />
    </>
  );
}
