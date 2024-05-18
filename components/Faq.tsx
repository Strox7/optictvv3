import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getDictionary } from "@/get-dictionary";

function Faq({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    <section className="h-full z-50 text-white lg:mb-16 mx-auto  px-4  sm:px-6 lg:px-8 pb-6 lg:pt-8 relative">
      {/* <div className="absolute top-[-7%] w-[500px] h-[500px] left-[-15%] lg:top-[-12%] lg:left-[1%] z-40 lg:h-full gradient" /> */}
      <h2 className="text-center relative md:max-w-[800px] md:mx-auto z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
        {dictionary.faq.h2}
      </h2>
      <p className=" mt-4 text-xl text-[#888888] lg:w-[600px] z-50 relative text-center  mx-auto mb-8">
        {dictionary.faq.p}
      </p>
      <Accordion type="single" collapsible className="lg:w-[800px] mx-auto">
        <div className="rounded-[10px] bg-gradient-to-b from-[#b43072] to-[#092d76] h-fit p-[1px]  mb-4">
          <AccordionItem
            className="bg-black rounded-[10px] border-none px-4  "
            value="item-1"
          >
            <AccordionTrigger className=" text-lg tracking-tighter font-semibold ">
              {dictionary.faq.items.itemOne.h4}
            </AccordionTrigger>
            <AccordionContent className="text-[#888888] text-base">
              {dictionary.faq.items.itemOne.p}
            </AccordionContent>
          </AccordionItem>
        </div>

        <div className="rounded-[10px] bg-gradient-to-b from-[#b43072] to-[#092d76] h-fit p-[1px]  mb-4">
          <AccordionItem
            className="bg-black rounded-[10px] border-none px-4  "
            value="item-2"
          >
            <AccordionTrigger className=" text-lg tracking-tighter font-semibold ">
              {dictionary.faq.items.itemTwo.h4}
            </AccordionTrigger>
            <AccordionContent className="text-[#888888] text-base">
              {dictionary.faq.items.itemTwo.p}
            </AccordionContent>
          </AccordionItem>
        </div>
        <div className="rounded-[10px] bg-gradient-to-b from-[#b43072] to-[#092d76] h-fit p-[1px]  mb-4">
          <AccordionItem
            className="bg-black rounded-[10px] border-none px-4  "
            value="item-3"
          >
            <AccordionTrigger className=" text-lg tracking-tighter font-semibold ">
              {dictionary.faq.items.itemThree.h4}
            </AccordionTrigger>
            <AccordionContent className="text-[#888888] text-base">
              {dictionary.faq.items.itemThree.p}
            </AccordionContent>
          </AccordionItem>
        </div>
        <div className="rounded-[10px] bg-gradient-to-b from-[#b43072] to-[#092d76] h-fit p-[1px]  mb-4">
          <AccordionItem
            className="bg-black rounded-[10px] border-none px-4  "
            value="item-4"
          >
            <AccordionTrigger className=" text-lg tracking-tighter font-semibold ">
              {dictionary.faq.items.itemFour.h4}
            </AccordionTrigger>
            <AccordionContent className="text-[#888888] text-base">
              {dictionary.faq.items.itemFour.p}
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
    </section>
  );
}
export default Faq;
