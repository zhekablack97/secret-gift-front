"use client";
import { Authorization } from "@/features/Authorization/Authorization";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AuthorizationPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      router.push("/");
    }, 200);
  };

  return (
    <div
      className={classNames(
        "h-[calc(100vh_-_16px_-_16px)] mt-4 mx-4 rounded-2xl bg-white w-[calc(50vw_-_16px_-_16px)] p-4 flex items-center justify-center relative animate__animated ",
        isOpen ? "animate__fadeInLeft" : "animate__fadeOutLeft"
      )}
    >
      <button onClick={handleClose} className="absolute right-4 top-4">
        Скрыть
      </button>
      <div>
        <h1 className="font-bold text-7xl">Регистрация </h1>
        {/* <div className="h-56 pt-8">
          <form action="">
            логин
            <input type="text" className="block" name="" id="" />
            пароль
            <input type="text" name="" id="" />
          </form>
          <Link href="/ru/forgotpaswword">Forgot paswword</Link>
        </div> */}
        <Authorization />
      </div>
    </div>
  );
};

export default AuthorizationPage;
