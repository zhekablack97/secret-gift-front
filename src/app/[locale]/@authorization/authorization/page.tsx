import { Authorization } from "@/features/Authorization/Authorization";
import Link from "next/link";

const AuthorizationPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh_-_24px_-_24px)] mt-6 mx-6 rounded-2xl bg-white w-[calc(50vw_-_24px_-_24px)] p-4 flex items-center justify-center relative">
      <Link href={"/"} className="absolute right-4 top-4">
        Скрыть
      </Link>
      <div>
        <h1 className="font-bold text-7xl">Регистрация </h1>
        <Authorization />
      </div>
    </div>
  );
};

export default AuthorizationPage;
