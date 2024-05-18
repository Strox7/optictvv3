import { getDictionary } from "@/get-dictionary";
import { CheckIcon } from "lucide-react";

function Pricing({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    <section className="pt-16 mx-auto  px-4  sm:px-6 lg:px-8 pb-6 relative overflow-hidden">
      {/* <div className="absolute top-[-7%] w-[500px] h-[500px] left-[-15%] lg:top-[-6%] lg:left-[1%] z-40 lg:h-full lg:w-full bt-gradient pointer-events-none" /> */}

      <h2 className="text-center md:max-w-[800px] md:mx-auto relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
        {dictionary.pricing.h2}
      </h2>
      <p className=" mt-4 text-xl text-[#888888] lg:w-[600px] z-50 relative text-center  mx-auto mb-8">
        {dictionary.pricing.p}
      </p>
      <div className="text-white flex gap-3 flex-wrap md:justify-center relative z-50  mb-10">
        <div className="p-[2px] bg-gradient-to-b from-[#b43072] to-[#092d76] rounded-[20px] w-full md:w-80">
          <div className="bg-black h-full rounded-[20px] w-full p-8">
            <h3 className="text-3xl font-semibold tracking-tighter mb-6 ">
              {dictionary.pricing.onemonth}
            </h3>
            <p className="mb-5 text-[#888888]">{dictionary.pricing.commun.p}</p>
            <div className="flex gap-2 items-end">
              <span className="text-4xl lg:text-5xl  font-semibold tracking-tighter">
                $11.99
              </span>
              <span className="font-medium ">
                {dictionary.pricing.commun.standart}
              </span>
            </div>
            <div className="bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px] mt-6 mb-6 rounded-[30px]">
              <a
                className=" bg-black   block text-center  py-2 rounded-[30px] font-semibold"
                href="#"
              >
                {dictionary.pricing.commun.button}
              </a>
            </div>
            <ul className="flex flex-col gap-3 mt-4 text-[#888888]">
              <li className="flex gap-2">
                <CheckIcon />
                {dictionary.pricing.commun.p1}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p2}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p3}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p4}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p5}
              </li>
            </ul>
          </div>
        </div>
        <div className="p-[2px] bg-gradient-to-b from-[#b43072] to-[#092d76] rounded-[20px] w-full md:w-80">
          <div className="bg-black h-full rounded-[20px] w-full p-8">
            <h3 className="text-3xl font-semibold tracking-tighter mb-6 ">
              {dictionary.pricing.threemonth}
            </h3>
            <p className="mb-5 text-[#888888]">{dictionary.pricing.commun.p}</p>
            <div className="flex gap-2 items-end">
              <span className="text-4xl lg:text-5xl  font-semibold tracking-tighter">
                $11.99
              </span>
              <span className="font-medium ">
                {dictionary.pricing.commun.standart}
              </span>
            </div>
            <div className="bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px] mt-6 mb-6 rounded-[30px]">
              <a
                className=" bg-black   block text-center  py-2 rounded-[30px] font-semibold"
                href="#"
              >
                {dictionary.pricing.commun.button}
              </a>
            </div>
            <ul className="flex flex-col gap-3 mt-4 text-[#888888]">
              <li className="flex gap-2">
                <CheckIcon />
                {dictionary.pricing.commun.p1}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p2}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p3}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p4}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p5}
              </li>
            </ul>
          </div>
        </div>
        <div className="  p-[2px] bg-gradient-to-b from-[#b43072] to-[#092d76] rounded-[20px] w-full md:w-80">
          <div className="bg-black h-full rounded-[20px] w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-semibold tracking-tighter ">
                {dictionary.pricing.elevenmonth}
              </h3>
              <span className=" bg-gradient-to-b from-[#b43072] to-[#092d76] px-3 py-1 rounded-[15px] text-xs font-semibold">
                {dictionary.pricing.discount}
              </span>
            </div>

            <p className="mb-5 text-[#888888]">{dictionary.pricing.commun.p}</p>
            <div className="flex gap-2 items-end">
              <span className="text-4xl lg:text-5xl font-semibold tracking-tighter">
                $58.95
              </span>
              <span className="font-medium">
                {dictionary.pricing.commun.premium}
              </span>
            </div>
            <a
              className=" bg-gradient-to-b from-[#b43072] to-[#092d76] shadow-lg shadow-[#8f00c37c] block text-center mt-6 mb-6 py-2 rounded-[30px] font-semibold"
              href="#"
            >
              {dictionary.pricing.commun.button}
            </a>
            <ul className="flex flex-col gap-3 mt-4 text-[#888888]">
              <li className="flex gap-2">
                <CheckIcon />
                {dictionary.pricing.commun.p1}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p2}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p3}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p4}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p5}
              </li>
            </ul>
          </div>
        </div>
        <div className="p-[2px] bg-gradient-to-b from-[#b43072] to-[#092d76] rounded-[20px] w-full md:w-80">
          <div className="bg-black h-full rounded-[20px] w-full p-8">
            <h3 className="text-3xl font-semibold tracking-tighter mb-6 ">
              {dictionary.pricing.sixmonth}
            </h3>
            <p className="mb-5 text-[#888888]">{dictionary.pricing.commun.p}</p>
            <div className="flex gap-2 items-end">
              <span className="text-4xl lg:text-5xl  font-semibold tracking-tighter">
                $39.99
              </span>
              <span className="font-medium ">
                {dictionary.pricing.commun.standart}
              </span>
            </div>
            <div className="bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px] mt-6 mb-6 rounded-[30px]">
              <a
                className=" bg-black   block text-center  py-2 rounded-[30px] font-semibold"
                href="#"
              >
                {dictionary.pricing.commun.button}
              </a>
            </div>
            <ul className="flex flex-col gap-3 mt-4 text-[#888888]">
              <li className="flex gap-2">
                <CheckIcon />
                {dictionary.pricing.commun.p1}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p2}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p3}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p4}
              </li>
              <li className="flex gap-2">
                <CheckIcon /> {dictionary.pricing.commun.p5}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
