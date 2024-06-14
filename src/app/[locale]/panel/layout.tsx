import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "animate.css";

import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

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
      <body>
        <div className="flex p-3">
          <nav className="shrink-0 bg-gradient-to-b from-[#FF4E4B] to-[#B40713] rounded-lg p-2 w-56 min-h-[calc(100vh_-_1.5rem)]">
            <ul className="flex gap-2 flex-col">
              <li>
                <Link href={`/${locale}/panel`}>Главная</Link>
              </li>
              <li>
                <Link href={`/${locale}/panel`}>Мероприятия</Link>
                <ul className="rounded-b-lg bg-slate-100 p-2">
                  <li>
                    <Link href={`/${locale}/panel`}>Secret santa</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/panel`}>team building</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/panel`}>День Рождение Ан...</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/panel`}>День Рождение Аб...</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={`/${locale}/panel`}>Команда</Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
