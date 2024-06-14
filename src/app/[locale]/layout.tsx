import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";

import { unstable_setRequestLocale } from "next-intl/server";
import PrelineScript from "../components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const locales = ["en", "ru"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>{children}</body>
      <PrelineScript />
    </html>
  );
}
