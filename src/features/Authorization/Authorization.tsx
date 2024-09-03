"use client";
import { useAuthMutation } from "@/api/auth/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthType } from "@/types/AuthType";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export const Authorization: React.FC = () => {
  const t = useTranslations("authorization");
  const [auth] = useAuthMutation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthType>();
  const onSubmit: SubmitHandler<AuthType> = (data) => {
    console.log(data);
    auth(data)
      .unwrap()
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  console.log(watch("identifier")); // watch input value by passing the name of it

  return (
    <div className="w-full flex flex-col gap-20 max-w-sm">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {t("title")}
      </h1>
      <form
        action=""
        className="flex gap-4 flex-col w-full "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">{t("inputName")}</Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="First name"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="identifier"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="picture">{t("inputPassword")}</Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="First name"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="password"
          />
        </div>
        <Button size={"lg"} type="submit">
          {t("buttonLogin")}
        </Button>
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
