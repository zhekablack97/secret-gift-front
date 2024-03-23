'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Authorization: React.FC = () => {
  const router = useRouter()

  console.log(router, 'router')

  return (
    <div>
      <form action="">
        логин
        <input type="text" name="" id="" />
        пароль
        <input type="text" name="" id="" />
      </form>
      <Link href="/forgotpaswword">Forgot paswword</Link>
    </div>
  );
};
