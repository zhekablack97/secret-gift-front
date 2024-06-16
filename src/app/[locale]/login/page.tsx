import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

const locales = ["en", "ru"];

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <h1 className="text-white text-8xl font-black">вход в личный кабинет </h1>
      <Link href={`/${locale}/login/authorization`}>Войти в систему </Link>
    </div>
  );
}
