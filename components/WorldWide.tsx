import Image from "next/image";
import phone from "../public/assets/Phone.webp";

function WorldWide() {
  return (
    <section className="relative overflow-hidden  pt-10  xl:pt-8 lg:mb-24 mb-12">
      {/* <div className=" absolute top-[-19%] left-0   -z-10 h-full w-full grady pointer-events-none" /> */}
      <h3 className="text-center relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
        We are worldwide
      </h3>
      <p className=" mt-4 text-xl text-[#888888] lg:w-[600px] z-50 relative text-center  mx-auto mb-8">
        Entertainment made easy with flexible pricing. Find your perfect plan
        for seamless streaming today
      </p>
      <div className="relative image h-[40vh] md:h-[60vh]  mt-[115px]  ">
        <Image
          className="absolute top-[223px] left-[50%] -translate-x-2/4 -translate-y-1/2 w-[18rem] h-[37rem] lg:w-[20rem] lg:h-[40rem] object-cover"
          src={phone}
          width={2000}
          height={2000}
          alt="wolrd"
        />
        <div className="absolute h-full inset-0 bg-gradient-to-b from-neutral-200/0 via-[#000000b8] to-[#000000]" />
      </div>
      <div className="text-white bg-black flex justify-center relative gap-x-[25px] gap-y-[25px] md:gap-12 flex-wrap items-center">
        <div className="flex flex-col items-center gap-0 md:gap-2">
          <span className=" text-[30px] md:text-4xl font-semibold tracking-tighter">
            All
          </span>
          <span className="text-[#888888]  font-semibold">Contries</span>
        </div>
        <div className="flex flex-col items-center gap-0 md:gap-2">
          <span className="text-[30px] md:text-4xl font-semibold tracking-tighter">
            500+
          </span>
          <span className="text-[#888888]  font-semibold">Servers</span>
        </div>
        <div className="flex flex-col items-center gap-0 md:gap-2">
          <span className="text-[30px] md:text-4xl font-semibold tracking-tighter">
            15,000+
          </span>
          <span className="text-[#888888]  font-semibold">Channels</span>
        </div>
        <div className="flex flex-col items-center gap-0 md:gap-2">
          <span className="text-[30px] md:text-4xl font-semibold tracking-tighter">
            50,000+
          </span>
          <span className="text-[#888888]  font-semibold">Movies & series</span>
        </div>
      </div>
    </section>
  );
}
export default WorldWide;
