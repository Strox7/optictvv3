import { CheckIcon } from "lucide-react";

function Pricing() {
  return (
    <section className="pt-16 mx-auto  px-4  sm:px-6 lg:px-8 pb-6 relative overflow-hidden">
      {/* <div className="absolute top-[-7%] w-[500px] h-[500px] left-[-15%] lg:top-[-6%] lg:left-[1%] z-40 lg:h-full lg:w-full bt-gradient pointer-events-none" /> */}
      <div className="absolute top-[-4%] w-[500px] h-[500px] left-[-9%] lg:top-[-8%] lg:left-[1%] z-40 lg:h-full lg:w-full gradient pointer-events-none" />
      <h3 className="text-center relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
        Discover Your Best Fit
      </h3>
      <p className=" mt-4 text-xl text-gray-500 lg:w-[600px] z-50 relative text-center  mx-auto mb-8">
        Entertainment made easy with flexible pricing. Find your perfect plan
        for seamless streaming today
      </p>
      <div className="text-white flex gap-3 flex-wrap md:justify-center relative z-50  mb-10">
        <div className="border  p-8 border-[#ffffff30] rounded-[20px] w-full md:w-80">
          <h3 className="text-3xl font-semibold tracking-tighter mb-6 ">
            1Month
          </h3>
          <p className="mb-5 text-gray-400">
            The essentials to provide your best work for clients.
          </p>
          <div className="flex gap-2 items-end">
            <span className="text-4xl lg:text-5xl  font-semibold tracking-tighter">
              $11.99
            </span>
            <span className="font-medium ">Standart</span>
          </div>
          <a
            className="bg-[#b3386e] block text-center mt-6 mb-6 py-2 rounded-[7px] font-semibold"
            href="#"
          >
            Buy plan
          </a>
          <ul className="flex flex-col gap-3 mt-4 text-gray-400">
            <li className="flex gap-2">
              <CheckIcon />
              HD/FHD/4K
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 15,000 Channels
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 45,000 Vod
            </li>
            <li className="flex gap-2">
              <CheckIcon /> All devices
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 24/7 support
            </li>
          </ul>
        </div>
        <div className="border  p-8 border-[#ffffff30] rounded-[20px] w-full md:w-80">
          <h3 className="text-3xl font-semibold tracking-tighter mb-6">
            3Months
          </h3>
          <p className="mb-5 text-gray-400">
            The essentials to provide your best work for clients.
          </p>
          <div className="flex gap-2 items-end">
            <span className="text-4xl lg:text-5xl font-semibold tracking-tighter">
              $24.95
            </span>
            <span className="font-medium">Standart</span>
          </div>
          <a
            className="bg-[#b3386e] block text-center mt-6 mb-6 py-2 rounded-[7px] font-semibold"
            href="#"
          >
            Buy plan
          </a>
          <ul className="flex flex-col gap-3 mt-4 text-gray-400">
            <li className="flex gap-2">
              <CheckIcon />
              HD/FHD/4K
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 15,000 Channels
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 45,000 Vod
            </li>
            <li className="flex gap-2">
              <CheckIcon /> All devices
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 24/7 support
            </li>
          </ul>
        </div>
        <div className="border-[2px]  p-8 border-[#b3386e] rounded-[20px] w-full md:w-80">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-semibold tracking-tighter ">
              12Months
            </h3>
            <span className="bg-[#b3386e] px-3 py-1 rounded-[15px] text-xs font-semibold">
              Most popular
            </span>
          </div>

          <p className="mb-5 text-gray-400">
            The essentials to provide your best work for clients.
          </p>
          <div className="flex gap-2 items-end">
            <span className="text-4xl lg:text-5xl font-semibold tracking-tighter">
              $58.95
            </span>
            <span className="font-medium">Premium</span>
          </div>
          <a
            className="bg-[#b3386e] block text-center mt-6 mb-6 py-2 rounded-[7px] font-semibold"
            href="#"
          >
            Buy plan
          </a>
          <ul className="flex flex-col gap-3 mt-4 text-gray-400">
            <li className="flex gap-2">
              <CheckIcon />
              HD/FHD/4K
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 15,000 Channels
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 45,000 Vod
            </li>
            <li className="flex gap-2">
              <CheckIcon /> All devices
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 24/7 support
            </li>
          </ul>
        </div>
        <div className="border  p-8 border-[#ffffff30] rounded-[20px] w-full md:w-80">
          <h3 className="text-3xl font-semibold tracking-tighter mb-6">
            6Months
          </h3>
          <p className="mb-5 text-gray-400">
            The essentials to provide your best work for clients.
          </p>
          <div className="flex gap-2 items-end">
            <span className="text-4xl lg:text-5xl font-semibold tracking-tighter">
              $39.99
            </span>
            <span className="font-medium">Super</span>
          </div>
          <a
            className="bg-[#b3386e] block text-center mt-6 mb-6 py-2 rounded-[7px] font-semibold"
            href="#"
          >
            Buy plan
          </a>
          <ul className="flex flex-col gap-3 mt-4 text-gray-400">
            <li className="flex gap-2">
              <CheckIcon />
              HD/FHD/4K
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 15,000 Channels
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 45,000 Vod
            </li>
            <li className="flex gap-2">
              <CheckIcon /> All devices
            </li>
            <li className="flex gap-2">
              <CheckIcon /> 24/7 support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
