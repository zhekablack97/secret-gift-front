import { Authorization } from "@/features/Authorization/Authorization";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <>
      регистрация <Link href="/ru/login/forgot-password">Forgot paswword</Link>
    </>
  );
};

export default Page;
