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
              <span className=" bg-black z-50 font-bold text-[25px] text-center  w-0 h-0 flex p-[30px] items-center justify-center  border-[5px] rounded-[100%]   border-[#b3386e]">
                1
              </span>
              <div>
                <div className="flex   flex-col">
                  <span className="mb-[15px] text-2xl font-semibold tracking-tighter relative">
                    Place order
                    <div className="after:w-[5px] after:h-[142px]  sm:after:h-[80px] rounded-[7px] after:left-[-56px] sm:after:left-[-56px]  after:z-10 after:top-[49px] sm:after:top-[49px] after:contents-[''] after:absolute after:bg-[#b3386e]" />
                  </span>
                  <span className=" block w-full sm:w-[380px] text-[#888888]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus, sint?
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex items-baseline mb-8 gap-5">
              <span className="bg-black z-50 font-bold text-[25px] text-center w-0 h-0 p-[30px] flex items-center justify-center border-[5px] rounded-[100%]    border-[#b3386e]">
                2
              </span>
              <div>
                <div className=" flex   flex-col">
                  <span className=" mb-[15px] text-2xl font-semibold tracking-tighter relative">
                    Check Whatsapp
                    <div className="after:w-[5px] after:h-[142px]  sm:after:h-[80px] rounded-[7px] after:left-[-56px] sm:after:left-[-56px]  after:z-10 after:top-[49px] sm:after:top-[49px] after:contents-[''] after:absolute after:bg-[#b3386e]" />
                  </span>
                  <span className=" block w-full sm:w-[380px] text-[#888888]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus, sint?
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-baseline mb-8 gap-5 ">
              <span className="bg-black z-50 relative font-bold text-[25px] text-center p-[30px] w-0 h-0 flex items-center justify-center border-[5px] rounded-[100%]    border-[#b3386e]">
                3
              </span>
              <div>
                <div className=" flex   flex-col">
                  <span className="mb-[15px] text-2xl font-semibold tracking-tighter relative">
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
