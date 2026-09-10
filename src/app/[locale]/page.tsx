import HomePage from "@/components/HomePage";
import { Locale } from "@/lib/translations";
import { isValidLocale } from "@/lib/utils";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const lang: Locale = isValidLocale(locale) ? locale : "en";

  return <HomePage locale={lang} />;
}
