import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, CircleUser } from "lucide-react";
import LocaleSwitcher from "./locale-switcher";
import OptictvWhite from "../public/assets/White Logo wordmark.webp";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center pt-[1.1rem] px-9 z-50 relative
      container
    "
    >
      <Image
        className="w-28"
        src={OptictvWhite}
        alt="optictv-white-logo"
        width={882}
        height={199}
      />
      <div className="hidden sm:flex text-sm text-white font-semibold items-center">
        <nav className="flex gap-5 pr-5 border-r ">
          <li>Home</li>
          <li>Channels</li>
          <li>Pricing</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </nav>
        <div className="flex items-center gap-2">
          {" "}
          <CircleUser className="ml-4 cursor-pointer" />
          <LocaleSwitcher />
        </div>
      </div>

      <Sheet>
        <SheetTrigger className="sm:hidden">
          <AlignJustify className="text-white" />
        </SheetTrigger>
        <SheetContent className="text-white bg-black bg-opacity-90  border-[#ffffff30] ">
          <Image
            className="w-28"
            src={OptictvWhite}
            alt="optictv-white-logo"
            width={882}
            height={199}
          />
          <nav className="flex flex-col gap-7 pt-28 items-center text-white font-semibold">
            <li>Home</li>
            <li>Channels</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </nav>
          <div className="mt-5 mx-auto text-center">
            <LocaleSwitcher />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Header;
