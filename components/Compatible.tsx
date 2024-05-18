import Image from "next/image";
import devices from "../public/assets/Devices asset.webp";
import { getDictionary } from "@/get-dictionary";

function Compatible({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    <section className="relative overflow-hidden mx-auto  px-4  sm:px-6 lg:px-8 pb-[3rem] mt-16 xl:mt-0 lg:pb-16 pt-8 lg:pt-12">
      <div className="flex flex-row xl:gap-10 justify-center xl:items-center flex-wrap xl:flex-nowrap">
        <div className="text-center relative ">
          <h2 className="text-center xl:text-left relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
            {dictionary.compatible.h2}
          </h2>
          <p className="text-center mt-4 text-xl xl:text-left text-[#888888] lg:w-[600px] z-50 relative   mb-6 md:mb-0">
            {dictionary.compatible.p}
          </p>
        </div>
        <div className="relative z-30 ">
          <Image
            className="md:w-[600px] "
            src={devices}
            alt="devices"
            width={1920}
            height={1200}
          />
          <div className="absolute h-full bottom-0 toto w-full" />
        </div>
      </div>
      {/* <div className="hidden lg:block absolute top-[-27%] left-0 lg:top-[-3%] lg:left-[-38%] z-50 h-2/3 w-2/3 gradient pointer-events-none" /> */}
    </section>
  );
}
export default Compatible;
