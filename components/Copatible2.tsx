import {
  LaptopIcon,
  SmartphoneIcon,
  Table2Icon,
  TabletIcon,
  TabletSmartphoneIcon,
  TvIcon,
} from "lucide-react";

function Copatible2() {
  return (
    <section className="text-white mx-auto  px-4  sm:px-6 lg:px-8 pb-[3rem] mt-16 xl:mt-0 pt-16">
      <h3 className="text-center mb-10 relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
        Watch Everywhere
      </h3>

      <div className="flex justify-center flex-wrap gap-x-4 gap-y-10">
        <div className="w-[19rem] boxes p-8 rounded-[15px]">
          <div>
            {" "}
            <div>
              {" "}
              <TabletSmartphoneIcon size="38px" />
            </div>
            <h3 className="text-2xl font-semibold mt-5 mb-1">Phone & Tablet</h3>
          </div>
          <p className="text-[#888888]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            laborum!
          </p>
        </div>
        {/* <div className="w-[19rem] boxes p-8 rounded-[15px]">
          <TabletIcon size="38px" />
          <h3 className="text-2xl font-semibold mt-5 mb-1">Tablet</h3>
          <p className="text-[#888888]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            laborum!
          </p>
        </div> */}
        <div className="w-[19rem] boxes p-8 rounded-[15px]">
          <TvIcon size="38px" />
          <h3 className="text-2xl font-semibold mt-5 mb-1">Tv</h3>
          <p className="text-[#888888]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            laborum!
          </p>
        </div>
        <div className="w-[19rem] boxes p-8 rounded-[15px]">
          <LaptopIcon size="38px" />
          <h3 className="text-2xl font-semibold mt-5 mb-1">Laptop</h3>
          <p className="text-[#888888]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            laborum!
          </p>
        </div>
      </div>
    </section>
  );
}
export default Copatible2;
