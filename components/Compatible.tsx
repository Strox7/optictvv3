import Image from "next/image";
import devices from "../public/assets/Devices asset.webp";

function Compatible() {
  return (
    <section className="relative overflow-hidden mx-auto  px-4  sm:px-6 lg:px-8 pb-6">
      <div className="absolute top-[-27%] left-0 lg:top-[-3%] lg:left-[38%] z-40 h-full w-full gradient pointer-events-none" />
      <div>
        <div className="text-center relative ">
          <h3 className="text-center relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
            Watch Everywhere
          </h3>
          <p className="mt-4 text-xl text-gray-500 lg:w-[600px] z-50 relative  mx-auto mb-6">
            Stream anywhere, anytime! Our IPTV service works on all your devices
            for uninterrupted entertainment
          </p>
        </div>
        <div className="relative z-30 w-full">
          <Image
            className="lg:w-[820px] m-auto"
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
