import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Image from "next/image";
import kmage from "../../../public/assets/2151005448.jpg";
import ChannelList from "@/components/Channel-list";

function page() {
  return (
    <div className="text-white mt-[-80px] z-20   relative overflow-hidden mx-auto       pt-8 lg:pt-28 ">
      <div className="absolute  top-[40%] left-[55%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
      <div className="relative mt-[-90px] h-screen">
        <Image
          src={kmage}
          className="absolute top-0 opacity-70  object-cover h-screen"
          width={4608}
          height={3072}
          alt="kmage"
        />

        <div className="flex relative z-50 pt-[16rem] md:pt-[15rem] justify-center mb-20 flex-wrap  px-4  sm:px-6 lg:px-8 ">
          <div className="md:flex">
            <span className=" text-center uppercase md:font-medium   block  mb-3 md:mb-0 text-base  md:mr-8 mt-4  tracking-tighter text-white md:text-gradient ">
              Channel list
            </span>

            <div>
              {" "}
              <h1 className="sm:w-[635px] text-center md:text-left relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
                {"we'd"} love to Build more Transparency.
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute h-full inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#000000]" />
      </div>
      <div className="absolute  top-[50%] left-[-55%] z-30 h-[800px] w-full gradient pointer-events-none" />
      <div className="absolute  top-[10%] left-[55%] z-30 h-[800px] w-full gradient-two pointer-events-none" />

      <div className="mt-[-8rem] lg:mt-[-145px] relative z-50 pb-20">
        <ChannelList />
      </div>
      <Cta />
    </div>
  );
}
export default page;
