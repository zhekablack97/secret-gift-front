"use client";
import { useAuthMutation } from "@/api/auth/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useRouter } from "@/navigation";
import { login } from "../../slice/authSlice";
import { AuthType } from "@/types/AuthType";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { cn } from "@/lib";

export const Authorization: React.FC = () => {
  const t = useTranslations("authorization");
  const [auth] = useAuthMutation();
  const authState = useAppSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<AuthType>();

  const expires = new Date(new Date().getTime() + 24 * 6 * 60 * 60 * 1000);

  const onSubmit: SubmitHandler<AuthType> = (data) => {
    auth(data)
      .unwrap()
      .then((response) => {
        // Handle success.
        dispatch(login({ isLogin: true, jwt: response.jwt }));
        Cookies.set("token", response.jwt, {
          expires,
        });
        router.push("/panel/");
      })
      .catch((error) => {
        // Обрабатываем ошибку

        const res = JSON.parse(error.data);

        if (
          res.error.status === 400 &&
          res.error?.message === "Invalid identifier or password"
        ) {
          setError("root", { message: t("errorInvalidCredentials") }); // Сообщение о неверных данных
        } else {
          setError("root", { message: t("errorUnknown") }); // Общая ошибка
        }
      });
  };

  console.log(errors, "errors");

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
              <>
                <Input
                  placeholder="First name"
                  onBlur={onBlur}
                  className={cn(
                    errors.root || errors.identifier ? "border-red-600" : ""
                  )}
                  onChange={onChange}
                  value={value}
                />
                <span>{errors.identifier?.message}</span>
              </>
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
              <>
                <Input
                  type="password"
                  placeholder="First name"
                  onBlur={onBlur}
                  onChange={onChange}
                  className={cn(
                    errors.root || errors.password ? "border-red-600" : ""
                  )}
                  value={value}
                />
                <span className="text-red-600">{errors.password?.message}</span>
              </>
            )}
            name="password"
          />
        </div>
        <span className="text-red-600">{errors.root?.message}</span>
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
