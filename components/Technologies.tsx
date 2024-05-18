import Image from "next/image";
import speedTechnologie from "../public/assets/speed-technologie-min.webp";
import compressionTechnologie from "../public/assets/compression-technologie-min.webp";
import worldTechnologie from "../public/assets/wordl-technologie-min.webp";
import { Button } from "./ui/button";
import { getDictionary } from "@/get-dictionary";

function Technologies({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    <section className="relative z-50 text-white  mx-auto  px-4  sm:px-6 lg:px-8 pb-8  pt-0 xl:pb-16">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex items-center w-full mb-3 md:mb-0 flex-col md:flex-row md:w-[750px] justify-between ">
          <h2 className=" text-3xl lg:text-4xl  leading-6 text-left tracking-tighter mb-8 mt-8 font-bold  text-white">
            {dictionary.technologies.h2}
          </h2>
          <div className="flex gap-2">
            <Button className=" z-10 relative text-white bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px]  rounded-[1.25rem] w-28">
              <span className="flex justify-center items-center bg-black w-full h-full rounded-[1.25rem]">
                {" "}
                {dictionary.technologies.buttons.first}
              </span>
            </Button>
            <Button className=" z-10 relative text-white bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px]  rounded-[1.25rem] w-28">
              <span className="flex justify-center items-center bg-black w-full h-full rounded-[1.25rem]">
                {" "}
                {dictionary.technologies.buttons.second}
              </span>
            </Button>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-[23rem] lg:w-96 bg-gradient-to-b from-[#b43072] to-[#092d76] p-[1px] rounded-[10px]">
            <div className="bg-black rounded-[10px]">
              <div className="relative ">
                <div className="absolute h-full inset-0 rounded-[10px] bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-[#000000]" />
                <Image
                  src={compressionTechnologie}
                  width={382}
                  height={191}
                  alt="speed"
                  className="rounded-[10px] w-full object-cover md:w-[381px] h-[140px]"
                />
                <div className="absolute h-full inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#000000]" />
              </div>

              <div className="p-4">
                <h4 className="relative z-50 lg:text-3xl text-xl font-bold tracking-tighter text-left  leading-6 text-white sm:text-3xl ">
                  {dictionary.technologies.firstBox.h3}
                </h4>
                <p className="mt-4 text-[#888888] text-sm">
                  {dictionary.technologies.firstBox.p}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[23rem] bg-gradient-to-b from-[#b43072] to-[#092d76] p-[1px] rounded-[10px]">
            <div className="bg-black rounded-[10px]">
              <div className="relative rounded-[10px]">
                <div className="absolute h-full inset-0 rounded-[10px] bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-[#000000]" />
                <Image
                  src={speedTechnologie}
                  width={2000}
                  height={1100}
                  alt="speed"
                  className="w-full rounded-[10px] object-cover md:w-[381px] h-[140px]"
                />
                <div className="absolute h-full inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#000000]" />
              </div>

              <div className="p-4">
                <h4 className=" relative z-50 lg:text-3xl text-xl font-bold tracking-tighter text-left  leading-6 text-white sm:text-3xl">
                  {dictionary.technologies.secondBox.h3}
                </h4>
                <p className="mt-4 text-[#888888] text-sm">
                  {dictionary.technologies.secondBox.p}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[766px] md:w-[750px] bg-gradient-to-b from-[#b43072] to-[#092d76] p-[1px] rounded-[10px]">
          <div className="bg-black rounded-[10px] gap-1 flex items-center flex-col md:flex-row">
            <div className="relative ">
              <div className="absolute h-full inset-0 rounded-[10px] bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-[#000000]" />
              <div className="absolute h-full inset-0 rounded-[10px] bg-gradient-to-r from-gray-200/0 via-gray-900/25 to-[#000000]" />
              <Image
                src={worldTechnologie}
                width={2000}
                height={1100}
                alt="speed"
                className="rounded-[10px] w-[750px] h-[140px] md:h-[270px]"
              />
              <div className=" absolute h-full inset-0 rounded-[10px] bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#000000]" />
            </div>

            <div className="p-4">
              <h4 className=" relative z-50 lg:text-3xl text-xl font-bold tracking-tighter text-left  leading-6 text-white sm:text-3xl">
                {dictionary.technologies.thirdBox.h3}
              </h4>
              <p className="mt-4 text-[#888888] text-sm">
                {dictionary.technologies.thirdBox.p}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Technologies;
