import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { listes } from "@/data/channel-data";
import { Button } from "./ui/button";
import { getDictionary } from "@/get-dictionary";

function ChannelList({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["channelList"];
}) {
  return (
    <section className="mx-auto max-w-5xl  px-2  sm:px-6 lg:px-8">
      <div className="flex items-center w-full mb-10 flex-col-reverse md:flex-row   justify-between ">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className=" text-3xl lg:text-4xl  leading-6 text-left tracking-tighter mb-0 mt-8 font-bold  text-white">
            {dictionary.h2}
          </h2>
          <p className="mt-4 text-[#888888] text-base text-center md:text-left">
            {dictionary.p}
            <a href="" className="underline text-[#b43072]">
              {dictionary.a}
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <Button className=" z-10 relative text-white bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px]  rounded-[1.25rem] w-36">
            <span className="flex justify-center items-center bg-black w-full h-full rounded-[1.25rem]">
              {" "}
              {dictionary.button}
            </span>
          </Button>
        </div>
      </div>
      <Command className="relative">
        <div className="relative bg-gradient-to-b from-[#b43072] p-[1px] to-[#092d76] w-full sm:w-[500px] mx-auto rounded-[30px] mb-5">
          <CommandInput placeholder={dictionary.search.placeholder} />
        </div>
        <div className="bg-gradient-to-b from-[#b43072] p-[1px] to-[#092d76] rounded-[10px] ">
          <CommandList>
            <CommandEmpty>{dictionary.search.empty}</CommandEmpty>
            {listes.map((data) => {
              return (
                <CommandGroup key={data.Country} heading={data.Country}>
                  <div className="relative flex flex-wrap   gap-[0.3rem] max-h-24">
                    {data.channels.map((channel, idx) => (
                      <CommandItem className=" text-[15px] p-0" key={idx}>
                        <span>{channel}</span>
                      </CommandItem>
                    ))}
                    {/* <CommandItem>
                    <span>{data.channels}</span>
                  </CommandItem> */}
                  </div>
                </CommandGroup>
              );
            })}
            <CommandSeparator />
          </CommandList>
        </div>
      </Command>
    </section>
  );
}
export default ChannelList;
