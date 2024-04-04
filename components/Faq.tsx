import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <section className="h-full text-white mb-16 mx-auto  px-4  sm:px-6 lg:px-8 pb-6 lg:pt-8 relative">
      {/* <div className="absolute top-[-7%] w-[500px] h-[500px] left-[-15%] lg:top-[-12%] lg:left-[1%] z-40 lg:h-full gradient" /> */}
      <h3 className="text-center relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
        Frequently asked questions
      </h3>
      <p className=" mt-4 text-xl text-[#888888] lg:w-[600px] z-50 relative text-center  mx-auto mb-8">
        Explore our FAQ section for quick answers to common questions about us
      </p>
      <Accordion type="single" collapsible className="lg:w-[800px] mx-auto">
        <AccordionItem className="border-b-[#ffffff30]" value="item-1">
          <AccordionTrigger className="text-lg tracking-tighter font-semibold ">
            What is Optictv?
          </AccordionTrigger>
          <AccordionContent className="text-[#888888] text-base">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[#ffffff30]" value="item-2">
          <AccordionTrigger className="text-lg tracking-tighter font-semibold ">
            Where can i watch?
          </AccordionTrigger>
          <AccordionContent className="text-[#888888] text-base">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[#ffffff30]" value="item-3">
          <AccordionTrigger className="text-lg tracking-tighter font-semibold ">
            What can i watch on Optictv?
          </AccordionTrigger>
          <AccordionContent className="text-[#888888] text-base">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[#ffffff30]" value="item-4">
          <AccordionTrigger className="text-lg tracking-tighter font-semibold ">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-[#888888] text-base">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
export default Faq;
