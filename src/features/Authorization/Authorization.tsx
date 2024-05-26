import { Input } from "@/style/Input";
import classNames from "classnames";
import Link from "next/link";

export const Authorization: React.FC = () => {

  return (
    <div className="h-52 pt-10">
      <form action="">
        логин
        <input type="text" className={Input.className} name="" id="" />
        пароль
        <input type="text" className={Input.className} name="" id="" />
      </form>
      <Link href="/ru/login/forgot-password">Forgot paswword</Link>
      <Link href="/ru/login/registration" >Registration</Link>
    </div>
  );
};
