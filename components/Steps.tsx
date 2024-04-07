import Image from "next/image";
import payment from "../public/assets/Payment process (billing asset).webp";

function Steps() {
  return (
    <section className="text-white mx-auto  px-4  sm:px-6 lg:px-8  pt-10">
      <div className="flex gap-5 items-start justify-center">
        <div>
          <h3 className="text-center xl:text-left relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl mb-9">
            It just takes three steps
          </h3>
          <div>
            <div className="flex mb-8 items-baseline gap-5">
              <span className="font-bold text-[25px] text-center  w-[135px] h-[75px] sm:w-[85px] sm:h-[85px] flex items-center justify-center  border-[5px] rounded-[100%]   border-[#b3386e]">
                1
              </span>
              <div>
                <div className="flex   flex-col">
                  <span className="mb-[15px] text-2xl font-semibold tracking-tighter">
                    Place order
                  </span>
                  <span className=" block w-full sm:w-[380px] text-[#888888]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus, sint?
                  </span>
                </div>
              </div>
            </div>
            <div className=" relative flex items-baseline mb-8 gap-5">
              <span className="font-bold text-[25px] text-center w-[135px] h-[75px] sm:w-[85px] sm:h-[85px] flex items-center justify-center border-[5px] rounded-[100%]    border-[#b3386e]">
                2
              </span>
              <div>
                <div className="before:w-[5px] before:h-[97px]  sm:before:h-[68px] rounded-[7px] before:left-[9%] sm:before:left-[7%]  before:z-10 before:top-[-69%] sm:before:top-[-56%] before:contents-[''] before:absolute before:bg-[#b3386e] flex   flex-col">
                  <span className="mb-[15px] text-2xl font-semibold tracking-tighter relative">
                    Check Whatsapp
                  </span>
                  <span className=" block w-full sm:w-[380px] text-[#888888]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus, sint?
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-baseline mb-8 gap-5 relative">
              <span className="relative font-bold text-[25px] text-center w-[135px] h-[75px] sm:w-[85px] sm:h-[85px] flex items-center justify-center border-[5px] rounded-[100%]    border-[#b3386e]">
                3
              </span>
              <div>
                <div className="before:w-[5px] before:h-[97px]  sm:before:h-[68px] rounded-[7px] before:left-[9%] sm:before:left-[7%]  before:z-10 before:top-[-69%] sm:before:top-[-56%] before:contents-[''] before:absolute before:bg-[#b3386e] flex   flex-col">
                  <span className="mb-[15px] text-2xl font-semibold tracking-tighter">
                    Enjoy IPTV
                  </span>
                  <span className=" block w-full sm:w-[380px] text-[#888888]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus, sint?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            className="lg:w-[600px] m-auto"
            src={payment}
            alt="devices"
            width={1920}
            height={1200}
          />
        </div>
      </div>
    </section>
  );
}
export default Steps;
