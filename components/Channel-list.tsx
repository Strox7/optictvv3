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
// "use client";

// import { useState, useMemo, useEffect } from "react";
// import { VariableSizeList, ListChildComponentProps } from "react-window";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
// } from "@/components/ui/command";
// import { listes, ChannelData } from "@/data/channel-data";
// import { Button } from "./ui/button";
// import { getDictionary } from "@/get-dictionary";

// // Props for ChannelRow component
// interface ChannelRowProps extends ListChildComponentProps {
//   data: ChannelData[];
// }

// // ChannelRow Component for react-window
// const ChannelRow: React.FC<ChannelRowProps> = ({ index, style, data }) => {
//   const { Country, channels } = data[index];
//   return (
//     <div style={style}>
//       <CommandGroup heading={Country}>
//         <div className="relative flex flex-wrap gap-[0.3rem] max-h-24 pb-10">
//           {channels.map((channel, idx) => (
//             <CommandItem className="text-[15px] p-0" key={idx}>
//               <span>{channel}</span>
//             </CommandItem>
//           ))}
//         </div>
//       </CommandGroup>
//     </div>
//   );
// };

// // Props for ChannelsList component
// interface ChannelsListProps {
//   dictionary: Awaited<ReturnType<typeof getDictionary>>["channelList"];
// }

// // ChannelsList Component
// const ChannelsList: React.FC<ChannelsListProps> = ({ dictionary }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [itemSizes, setItemSizes] = useState<number[]>([]); // Array to store sizes for each row

//   // Function to normalize strings by removing spaces and converting to lower case
//   const normalizeString = (str: string) =>
//     str.replace(/\s+/g, "").toLowerCase();

//   // Filtered list based on search term
//   const filteredListes = useMemo(() => {
//     if (!searchTerm) return listes;

//     const normalizedSearchTerm = normalizeString(searchTerm);

//     return listes
//       .map((item) => {
//         const filteredChannels = item.channels.filter((channel) =>
//           normalizeString(channel).includes(normalizedSearchTerm)
//         );

//         if (
//           normalizeString(item.Country).includes(normalizedSearchTerm) ||
//           filteredChannels.length > 0
//         ) {
//           return { ...item, channels: filteredChannels };
//         }

//         return null;
//       })
//       .filter(Boolean) as ChannelData[];
//   }, [searchTerm]);

//   // Effect to dynamically calculate item size for each row based on filtered content
//   useEffect(() => {
//     const newSizes = filteredListes.map((item) => {
//       const channelsCount = item.channels.length;
//       const rows = Math.ceil(channelsCount / 4); // Assuming 4 channels per row
//       return 40 + rows * 35; // Adjust these values as needed
//     });
//     setItemSizes(newSizes);

//     // Debugging logs
//     console.log("Filtered List:", filteredListes);
//     console.log("Item Sizes:", newSizes);
//   }, [searchTerm, filteredListes]);

//   // Function to get item size based on index
//   const getItemSize = (index: number) => {
//     return itemSizes[index] || 145; // Default item size if not calculated
//   };

//   // Calculate the dynamic height
//   const listHeight = Math.min(filteredListes.length * 145, 400); // Max height of 400px or the required height

//   return (
//     <section className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
//       <div className="flex items-center w-full mb-10 flex-col-reverse md:flex-row justify-between">
//         <div className="flex flex-col justify-center items-center md:items-start">
//           <h2 className="text-3xl lg:text-4xl leading-6 text-left tracking-tighter mb-0 mt-8 font-bold text-white">
//             {dictionary.h2}
//           </h2>
//           <p className="mt-4 text-[#888888] text-base text-center md:text-left">
//             {dictionary.p}
//             <a href="" className="underline text-[#b43072]">
//               {dictionary.a}
//             </a>
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <Button className="z-10 relative text-white bg-gradient-to-b from-[#b43072] to-[#092d76] p-[1px] rounded-[1.25rem] w-36">
//             <span className="flex justify-center items-center bg-black w-full h-full rounded-[1.25rem]">
//               {dictionary.button}
//             </span>
//           </Button>
//         </div>
//       </div>
//       <Command className="relative">
//         <div className="relative bg-gradient-to-b from-[#b43072] p-[1px] to-[#092d76] w-full sm:w-[500px] mx-auto rounded-[30px] mb-5">
//           <CommandInput
//             placeholder={dictionary.search.placeholder}
//             value={searchTerm}
//             onValueChange={setSearchTerm}
//           />
//         </div>
//         <div className="bg-gradient-to-b from-[#b43072] p-[1px] to-[#092d76] rounded-[10px]">
//           <CommandList>
//             <CommandEmpty>{dictionary.search.empty}</CommandEmpty>
//             <VariableSizeList
//               height={listHeight} // Dynamic height based on filtered items
//               itemCount={filteredListes.length}
//               itemSize={getItemSize}
//               width="100%"
//               itemData={filteredListes}
//             >
//               {ChannelRow}
//             </VariableSizeList>
//             <CommandSeparator />
//           </CommandList>
//         </div>
//       </Command>
//     </section>
//   );
// };

// export default ChannelsList;
