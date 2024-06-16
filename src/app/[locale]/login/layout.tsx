"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChangeLanguage } from "@/features/ChangeLanguage";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <div className="grid md:grid-cols-2 p-4 bg-orange-300 min-h-screen">
          <div></div>
          <div className="bg-white container rounded-xl flex justify-center  relative items-center">
            <div className="absolute top-4 right-4">
              <ChangeLanguage />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
