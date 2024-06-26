import Image from "next/image";
import payment from "../public/assets/Payment process (billing asset).webp";
import { getDictionary } from "@/get-dictionary";

function Steps({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    <section className="text-white mx-auto  px-4  sm:px-6 lg:px-8  pt-10 xl:pt-0 xl:pb-16">
      <div className="flex gap-5 items-start justify-center">
        <div>
          <h2 className="text-center md:max-w-[800px] md:mx-auto  lg:text-6xl text-3xl font-bold relative z-50 tracking-tighter  leading-6 text-white sm:text-6xl mb-9">
            {dictionary.steps.h2}
          </h2>
          <div className="xl:flex xl:items-center xl:justify-center xl:flex-wrap">
            <div className="flex mb-8 items-baseline gap-5 xl:flex-col xl:items-center">
              <div className="bg-gradient-to-b from-[#b43072] to-[#092d76] relative z-50 rounded-[100%] p-[5px]">
                <span className=" bg-black z-50 font-bold text-[25px] text-center  w-0 h-0 flex p-[25px] xl:p-[30px] items-center justify-center  border-[5px] rounded-[100%]  border-transparent ">
                  1
                </span>
              </div>

              <div>
                <div className="flex   flex-col xl:text-center">
                  <span className="mb-[15px] text-2xl font-semibold tracking-tighter relative">
                    {dictionary.steps.firstBox.h3}

                    <div className="after:w-[5px] after:h-[142px]  sm:after:h-[80px] xl:after:h-[332px] rounded-[7px] after:left-[-56px] sm:after:left-[-56px] xl:after:left-[386px]  after:z-10 after:top-[49px] sm:after:top-[49px] xl:after:top-[-221px] after:contents-[''] after:absolute after:bg-gradient-to-b from-[#b43072] to-[#030187] xl:after:rotate-90" />
                  </span>
                  <span className=" block w-full sm:w-[380px] text-[#888888]">
                    {dictionary.steps.firstBox.p}
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex items-baseline mb-8 gap-5 xl:flex-col xl:items-center">
              <div className="bg-gradient-to-b from-[#b43072] to-[#092d76] relative z-50 rounded-[100%] p-[5px]">
                <span className=" bg-black z-50 font-bold text-[25px] text-center  w-0 h-0 flex p-[25px] xl:p-[30px] items-center justify-center  border-[5px] rounded-[100%]  border-transparent ">
                  2
                </span>
              </div>
              <div>
                <div className=" flex   flex-col xl:text-center">
                  <span className=" mb-[15px] text-2xl font-semibold tracking-tighter relative ">
                    {dictionary.steps.secondBox.h3}

                    <div className="after:w-[5px] after:h-[142px]  sm:after:h-[80px] xl:after:h-[332px] rounded-[7px] after:left-[-56px] sm:after:left-[-56px] xl:after:left-[386px]  after:z-10 after:top-[49px] sm:after:top-[49px] xl:after:top-[-221px] after:contents-[''] after:absolute after:bg-gradient-to-b from-[#b43072] to-[#030187] xl:after:rotate-90" />
                  </span>
                  <span className=" block w-full sm:w-[380px] text-[#888888]">
                    {dictionary.steps.secondBox.p}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-baseline mb-8 gap-5 xl:flex-col xl:items-center">
              <div className="bg-gradient-to-b from-[#b43072] to-[#092d76] relative z-50 rounded-[100%] p-[5px]">
                <span className=" bg-black z-50 font-bold text-[25px] text-center  w-0 h-0 flex p-[25px] xl:p-[30px] items-center justify-center  border-[5px] rounded-[100%]  border-transparent ">
                  3
                </span>
              </div>
              <div>
                <div className=" flex   flex-col xl:text-center">
                  <span className="mb-[15px] text-2xl font-semibold tracking-tighter relative">
                    {dictionary.steps.thirdBox.h3}
                  </span>

                  <span className=" block w-full sm:w-[380px] text-[#888888]">
                    {dictionary.steps.thirdBox.p}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Steps;
