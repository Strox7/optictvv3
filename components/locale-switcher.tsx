"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../i18n-config";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { LanguagesIcon } from "lucide-react";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <NavigationMenu className="rounde">
        <NavigationMenuList className="border-none rounde">
          <NavigationMenuItem className=" rounde">
            <NavigationMenuTrigger className="p-0 rounde">
              <LanguagesIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="uppercase rounde border-none flex flex-col w-20 sm:w-20 lg:w-20 p-3 rounded-sm bg-white text-black">
              {i18n.locales.map((locale) => {
                return (
                  <NavigationMenuLink
                    asChild
                    key={locale}
                    className="cursor-pointer "
                  >
                    <Link href={redirectedPathName(locale)}>{locale}</Link>
                  </NavigationMenuLink>
                );
              })}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
