import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Authorization: React.FC = () => {
  const t = useTranslations("authorization");
  return (
    <div className="w-full flex flex-col gap-20 max-w-sm">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {t("title")}
      </h1>
      <form action="" className="flex gap-4 flex-col w-full ">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">{t("inputName")}</Label>
          <Input id="picture" type="text" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">{t("inputPassword")}</Label>
          <Input id="picture" type="password" />
        </div>
        <Button size={"lg"}>{t("buttonLogin")}</Button>
      </form>
      <div className="flex flex-col gap-2">
        <Button asChild variant={"outline"} size={"lg"}>
          <Link href="/ru/login/forgot-password">
            {t("linkForgotPassword")}
          </Link>
        </Button>
        <Button asChild variant={"outline"} size={"lg"}>
          <Link href="/ru/login/registration">{t("linkRegistration")}</Link>
        </Button>
      </div>
    </div>
  );
};
