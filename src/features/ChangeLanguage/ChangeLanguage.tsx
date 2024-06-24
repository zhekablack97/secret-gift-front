import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocaleKeys, abbreviations, locales } from "@/constants";

import { useLocale } from "next-intl";
import { FC } from "react";
import { LinkLanguag } from "./utils/LinkLanguage";

export const ChangeLanguage: FC = () => {
  const locale = useLocale() as LocaleKeys;

  console.log();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{abbreviations[locale].shortName}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {locales.map((lng) => {
          return <LinkLanguag key={lng} lng={lng} />;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
