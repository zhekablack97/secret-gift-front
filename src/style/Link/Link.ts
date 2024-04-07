import classNames from "classnames";

export const BaseNavLink = {
  className: "text-white h-12 flex items-center justify-center font-semibold ",
};

export const NavLink = {
  className: classNames(
    BaseNavLink.className,
    "bg-white text-slate-800 rounded-lg"
  ),
};

export const NavLinkWithChildren = {
  className: classNames(
    BaseNavLink.className,
    "bg-white text-slate-800 rounded-t-lg"
  ),
};

export const NavLinkChildren = {
  className: classNames("font-medium"),
};

export const NavActiveLink = {
  className: classNames(BaseNavLink.className, " bg-zinc-900 rounded-lg"),
};
