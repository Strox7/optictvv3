import { Button } from "@/components/ui/button";
import Image from "next/image";
import Stats from "./Stats";
import { getDictionary } from "@/get-dictionary";
import DeskTopHero from "../public/assets/DesktopHero.jpg";
import MobileHero from "../public/assets/MobileHero-min2.webp";

function Hero({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    <div className="relative  h-full md:h-screen -mt-16">
      <Image
        className="hidden absolute bottom-0 top-0 z-0 sm:block h-full object-cover"
        src={DeskTopHero}
        alt="optictv-white-logo"
        width={3840}
        height={2160}
      />
      <Image
        className=" absolute top-0 bottom-0 z-0 sm:hidden h-full object-cover"
        src={MobileHero}
        alt="optictv"
        width={2160}
        height={3840}
        loading="eager"
      />
      <div className=" flex flex-col gap-y-80 items-center">
        <h1 className=" text-white styled-h1 z-50 relative text-4xl mt-32 font-extrabold tracking-tighter text-center lg:mt-40 sm:text-5xl sm:mt-28">
          {dictionary.hf}
          <br />
          {dictionary.hs}
        </h1>
        <div className="flex gap-2">
          <Button className=" z-10 relative text-white border-white border rounded w-28 sm:w-40">
            {dictionary.buttons.buy}
          </Button>
          <Button className=" z-10 relative text-white border-white border rounded w-28 sm:w-40">
            {dictionary.buttons.trial}
          </Button>
        </div>
      </div>
      <Stats dictionary={dictionary} />
      <div className="absolute h-full inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#000000]" />
    </div>
  );
}
export default Hero;
