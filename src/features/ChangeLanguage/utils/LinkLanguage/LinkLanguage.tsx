"use client";
import { DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { LocaleKeys, abbreviations } from "@/constants";
import { Link, usePathname } from "@/navigation";
import { FC } from "react";

interface ILinkLanguag {
  lng: LocaleKeys;
}

export const LinkLanguag: FC<ILinkLanguag> = ({ lng }) => {
  const pathName = usePathname();
  return (
    <DropdownMenuRadioItem value={lng} className="cursor-pointer">
      <Link href={pathName} locale={lng} className="w-full block">
        {abbreviations[lng].name}
      </Link>
    </DropdownMenuRadioItem>
  );
};
