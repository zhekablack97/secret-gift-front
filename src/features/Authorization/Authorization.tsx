import classNames from "classnames";
import Link from "next/link";

export const Authorization: React.FC = () => {
  return (
    <div className="h-52 pt-10">
      <form action="">
        <div className="max-w-sm space-y-3">
          <div className="relative">
            <input
              type="email"
              id="hs-floating-input-email-value"
              className="peer
               p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus-visible:border-blue-500  focus:ring-blue-500 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2
    border-[1px]"
              placeholder="you@email.com"
            />
            <label
              htmlFor="hs-floating-input-email-value"
              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="hs-floating-input-passowrd-value"
              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2 border-[1px]"
              placeholder="********"
            />
            <label
              htmlFor="hs-floating-input-passowrd-value"
              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
            >
              Password
            </label>
          </div>
        </div>
      </form>
      <Link href="/ru/login/forgot-password">Forgot paswword</Link>
      <Link href="/ru/login/registration">Registration</Link>
    </div>
  );
};
