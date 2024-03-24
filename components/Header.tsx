import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlignJustify,
  BriefcaseBusiness,
  CircleUser,
  HomeIcon,
  MessageCircleMore,
  MessageSquareMore,
  MonitorPlayIcon,
  TvIcon,
  WalletIcon,
} from "lucide-react";
import LocaleSwitcher from "./locale-switcher";
import OptictvWhite from "../public/assets/White Logo wordmark.webp";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center pt-[1.1rem] px-9 z-50 relative
      container
    "
    >
      <Image
        className="w-36"
        src={OptictvWhite}
        alt="optictv-white-logo"
        width={882}
        height={199}
      />
      <div className="hidden md:flex text-sm text-white font-semibold items-center">
        <nav className="flex gap-5 pr-5 border-r ">
          <li className=" tracking-tighter">
            <Link href="/">Home</Link>
          </li>
          <li className="  tracking-tighter">
            <Link href="/">Channels</Link>
          </li>
          <li className=" tracking-tighter">
            <Link href="/">Pricing</Link>
          </li>
          <li className=" tracking-tighter">
            <Link href="/">Contact Us</Link>
          </li>
          <li className=" tracking-tighter">
            <Link href="/">About Us</Link>
          </li>
        </nav>
        <div className="flex items-center gap-2">
          {" "}
          <CircleUser className="ml-4 cursor-pointer" />
          <LocaleSwitcher />
        </div>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <AlignJustify className="text-white" />
        </SheetTrigger>
        <SheetContent className="text-white bg-black bg-opacity-90  border-[#ffffff30] ">
          <Image
            className="w-36"
            src={OptictvWhite}
            alt="optictv-white-logo"
            width={882}
            height={199}
          />
          <div className="pt-20">
            <span className="uppercase text-gradient text-sm tracking-tighter">
              Navigation
            </span>
            <nav className="flex flex-col gap-4  ml-4 mt-5 text-white font-semibold">
              <li className=" tracking-tighter">
                <Link className="flex gap-2 items-center" href="/">
                  <HomeIcon />
                  Home
                </Link>
              </li>
              <li className="  tracking-tighter">
                <Link className="flex gap-2 items-center" href="/">
                  <TvIcon />
                  Channels
                </Link>
              </li>
              <li className=" tracking-tighter">
                <Link className="flex gap-2 items-center" href="/">
                  <WalletIcon />
                  Pricing
                </Link>
              </li>
              <li className=" tracking-tighter">
                <Link className="flex gap-2 items-center" href="/">
                  <MessageSquareMore />
                  Contact Us
                </Link>
              </li>
              <li className=" tracking-tighter">
                <Link className="flex gap-2 items-center" href="/">
                  <BriefcaseBusiness />
                  About Us
                </Link>
              </li>
            </nav>
          </div>

          <div className="mt-5  ">
            <span className="uppercase text-gradient text-sm tracking-tighter">
              Settings
            </span>
            <div className="flex flex-col gap-4 ml-4 mt-5  ">
              <Link
                className="flex gap-2 items-center tracking-tighter font-semibold"
                href="/"
              >
                <CircleUser className=" cursor-pointer" />
                Account
              </Link>
              <LocaleSwitcher />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Header;
