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
  const t = useTranslations("Index");
  
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={"/ru/authorization"}>На авторизацию</Link>
    </>
  );
}
