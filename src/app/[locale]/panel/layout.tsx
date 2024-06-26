import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "animate.css";

import { unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div>
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold ">
            <span className="">Acme Inc</span>
          </Link>{" "}
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            href={`/panel`}
          >
            Мероприятия
          </Link>

          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            href={`/panel`}
          >
            Команда
          </Link>
        </nav>
      </div>
      <main className="px-9 flex flex-col gap-6 grow ">{children}</main>
    </div>
  );
}
