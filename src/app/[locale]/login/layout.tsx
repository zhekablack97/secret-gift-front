import { ChangeLanguage } from "@/features/ChangeLanguage";

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
        <div className="grid  md:grid-cols-2 p-4 bg-orange-300 min-h-screen">
          <div className="bg-white md:col-start-2 container rounded-xl flex justify-center  relative items-center">
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
