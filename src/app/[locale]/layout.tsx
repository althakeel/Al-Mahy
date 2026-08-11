import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchStructuredData from "@/components/SearchStructuredData";
import { isValidLocale } from "@/lib/utils";

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
