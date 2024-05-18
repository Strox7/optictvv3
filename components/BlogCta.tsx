import { getDictionary } from "@/get-dictionary";
import { Button } from "./ui/button";

function BlogCta() {
  return (
    <section className="relative img h-[70vh]  text-white  mx-auto  px-4  sm:px-6 lg:px-8 mb-[-1rem] ">
      <div className="absolute h-full inset-0 bg-gradient-to-t from-[#00000038] via-[#0000001f] to-[#000000]" />
      {/* <div className="absolute z-10 h-full inset-0 bg-gradient-to-b from-neutral-200/0 via-neutral-950/30  to-[#000000] pointer-events-none" /> */}
      <div className="relative h-full justify-center flex-col   px-0 py-[4rem] lg:py-[5rem]  lg:w-[950px]  gap-5   flex  mx-auto items-center rounded-[10px]">
        <div>
          <h3 className=" text-center   relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-8 text-white sm:text-6xl">
            Take a Seat In The Best IPTV Service.
          </h3>
          {/* <p className="text-center mt-4 text-xl xl:text-left text-[#888888] lg:w-[600px] z-50 relative  mx-auto mb-6 md:mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsum
            et nobis odit.
          </p> */}
        </div>
        <div>
          <Button className="z-10 relative text-white  bg-gradient-to-b from-[#b43072] to-[#092d76] shadow-lg shadow-[#8f00c37c]  rounded-[1.25rem] w-28 sm:w-40">
            <a href="">Take it</a>
          </Button>
        </div>
      </div>
      <div className="absolute h-full inset-0 bg-gradient-to-b from-[#00000038] via-[#0000001f] to-[#000000]" />
    </section>
  );
}
export default BlogCta;
