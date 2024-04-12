import { Button } from "./ui/button";

function Cta() {
  return (
    <section className=" text-white  mx-auto  px-4  sm:px-6 lg:px-8 mb-[3rem] ">
      <div className="bg-[#b3386e] px-0 py-[4rem] lg:py-[5rem]  lg:w-[950px] flex-col gap-5 lg:gap-0 lg:flex-row  flex justify-around mx-auto items-center rounded-[10px]">
        <div>
          <h3 className="text-center xl:text-left relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
            Join our service now !
          </h3>
          {/* <p className="text-center mt-4 text-xl xl:text-left text-[#888888] lg:w-[600px] z-50 relative  mx-auto mb-6 md:mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsum
            et nobis odit.
          </p> */}
        </div>
        <div>
          <Button className="z-10 relative text-white border-white border rounded w-28 sm:w-40">
            <a href="">Join now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
export default Cta;
