import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocaleKeys, abbreviations, locales } from "@/constants";
import { Link, usePathname } from "@/navigation";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useLocale } from "next-intl";
import { FC, useState } from "react";

export const ChangeLanguage: FC = () => {
  const locale = useLocale() as LocaleKeys;
  const [position, setPosition] = useState("bottom");
  const pathName = usePathname();

  console.log();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{abbreviations[locale].shortName}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {locales.map((lng) => {
          return (
            <DropdownMenuRadioItem
              key={lng}
              value={lng}
              className="cursor-pointer"
            >
              <Link href={pathName} locale={lng} className="w-full block">
                {abbreviations[lng].name}
              </Link>
            </DropdownMenuRadioItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
