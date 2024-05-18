import Image from "next/image";
import speed from "../public/assets/speed.jpg";
import { Button } from "./ui/button";
import { getDictionary } from "@/get-dictionary";
function Speed({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  return (
    <section className="mx-auto  px-4  relative z-50 sm:px-6 lg:px-8 pb-8   xl:pb-16 mt-[-8rem] lg:mt-[-145px]">
      <div className="flex items-center lg:items-end flex-col lg:flex-row justify-center gap-[25px] sm:gap-[80px]">
        <div className="flex flex-col items-center lg:items-start gap-0 lg:gap-4">
          <Button className=" z-10 relative text-white bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px]   rounded-[1.25rem] w-[137px]">
            <span className="flex justify-center items-center bg-black w-full h-full rounded-[1.25rem]  ">
              {dictionary.speed.button}
            </span>
          </Button>
          <h3 className=" text-3xl lg:text-4xl text-center lg:text-left  leading-6  tracking-tighter mb-8 mt-8 font-bold  text-white w-full sm:w-[400px]">
            {dictionary.speed.h2}
          </h3>
          <div>
            <Image
              className="w-full sm:w-[20rem] rounded-[10px]"
              src={speed}
              alt="speed"
              width={960}
              height={960}
            />
          </div>
        </div>
        <div className="flex flex-col lg:items-start items-center">
          <div className="pb-5">
            <p className="mt-4 text-[#888888] text-base w-full sm:w-[500px]">
              {dictionary.speed.p1}
            </p>
            <p className="mt-4 text-[#888888] text-base w-full sm:w-[500px]">
              {dictionary.speed.p2}
            </p>
          </div>

          <div className="text-white flex items-center gap-5">
            <div className="flex flex-col  gap-0 md:gap-2 w-[67px] sm:w-[94px] justify-start items-start">
              <span className="text-[30px] md:text-4xl font-semibold tracking-tighter">
                3
              </span>
              <span className="text-[#888888]  font-semibold text-sm">
                {dictionary.speed.boxOne}
              </span>
            </div>
            <div className="flex flex-col  gap-0 md:gap-2 w-[67px] sm:w-[94px] justify-start items-start">
              <span className="text-[30px] md:text-4xl font-semibold tracking-tighter">
                31
              </span>
              <span className="text-[#888888]  font-semibold text-sm">
                {dictionary.speed.boxTwo}
              </span>
            </div>
            <div className="flex flex-col  gap-0 md:gap-2 w-[67px] sm:w-[94px] justify-start items-start">
              <span className="text-[30px] md:text-4xl font-semibold tracking-tighter">
                4.7
              </span>
              <span className="text-[#888888]  font-semibold text-sm">
                {dictionary.speed.boxThree}
              </span>
            </div>
            <div className="flex flex-col  gap-0 md:gap-2 w-[67px] sm:w-[94px] justify-start items-start">
              <span className="text-[30px] md:text-4xl font-semibold tracking-tighter">
                24h
              </span>
              <span className="text-[#888888]  font-semibold text-sm">
                {dictionary.speed.boxfoor}
              </span>
            </div>
          </div>
          <a
            href="#"
            className=" mt-10 relative z-50 inline-block rounded-[1.25rem]   bg-gradient-to-b from-[#b43072] to-[#092d76] shadow-lg shadow-[#8f00c37c] px-4 py-3 text-sm  text-center font-medium text-white hover:bg-[#d15289] w-[130px] sm:w-40"
          >
            {dictionary.speed.buttontwo}
          </a>
        </div>
      </div>
    </section>
  );
}
export default Speed;
