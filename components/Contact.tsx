import { Button } from "./ui/button";
import { Input } from "./ui/input";
import speed from "../public/assets/contact1.jpg";
import Image from "next/image";

function Contact() {
  return (
    <section className="mx-auto  px-4  relative z-50 sm:px-6 lg:px-8 pb-8   xl:pb-16 mt-[-8rem] lg:mt-[-145px] mb-12">
      <div className="flex items-center lg:items-end flex-col lg:flex-row justify-center gap-[25px] sm:gap-[80px]">
        <div className="flex flex-col items-center lg:items-start gap-0 lg:gap-4">
          <Button className=" z-10 relative text-white bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px]   rounded-[1.25rem] w-28">
            <span className="flex justify-center items-center bg-black w-full h-full rounded-[1.25rem]  ">
              24/7 Support
            </span>
          </Button>
          <h3 className="mb-0 text-3xl lg:text-4xl text-center lg:text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full sm:w-[400px]">
            Talk with the Team about OpticTv Service.
          </h3>
          <p className="mt-4 mb-4 text-center md:text-left text-[#888888]">
            Text {""}
            <a className="underline text-[#b43072] " href="">
              +4407553621281
            </a>{" "}
            or complete the form.
          </p>
          <div>
            <Image
              className="w-full sm:w-[23rem] rounded-[10px]"
              src={speed}
              alt="speed"
              width={960}
              height={960}
            />
          </div>
        </div>

        <form className=" flex flex-col justify-center items-center gap-5 ">
          <div className="flex gap-5">
            <div className=" p-[1px] bg-gradient-to-b from-[#b43072] to-[#092d76]  w-[50%] rounded-[5px]">
              <input
                type="text"
                placeholder="First Name"
                className=" w-full h-full  placeholder:text-[#888888] bg-black  p-3 rounded-[5px]"
              />
            </div>
            <div className=" p-[1px] bg-gradient-to-b from-[#b43072] to-[#092d76]  w-[50%] rounded-[5px]">
              <input
                type="text"
                placeholder="Last Name"
                className=" w-full h-full  placeholder:text-[#888888] bg-black  p-3 rounded-[5px]"
              />
            </div>
          </div>
          <div className=" p-[1px] bg-gradient-to-b from-[#b43072] to-[#092d76] sm:w-[504px]  w-full rounded-[5px]">
            <input
              type="text"
              placeholder="Country"
              className=" w-full h-full   placeholder:text-[#888888] bg-black  p-3 rounded-[5px]"
            />
          </div>
          <div className="flex gap-5">
            <div className=" p-[1px] bg-gradient-to-b from-[#b43072] to-[#092d76]  w-[50%] rounded-[5px]">
              <input
                type="text"
                placeholder="Phone"
                className=" w-full h-full  placeholder:text-[#888888] bg-black  p-3 rounded-[5px]"
              />
            </div>
            <div className=" p-[1px] bg-gradient-to-b from-[#b43072] to-[#092d76]  w-[50%] rounded-[5px]">
              <input
                type="text"
                placeholder="Email"
                className=" w-full h-full  placeholder:text-[#888888] bg-black  p-3 rounded-[5px]"
              />
            </div>
          </div>
          <div className=" p-[1px] sm:w-[504px] bg-gradient-to-b from-[#b43072] to-[#092d76] h-[200px]  w-full rounded-[5px]">
            <textarea
              name="text"
              placeholder="Message"
              className="w-full h-full  placeholder:text-[#888888] bg-black  p-3 rounded-[5px]"
            ></textarea>
          </div>
          <Button className="text-left z-10 relative text-white  bg-gradient-to-b from-[#b43072] to-[#092d76]  shadow-lg shadow-[#8f00c37c]  rounded-[1.25rem] w-28 sm:w-40">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
