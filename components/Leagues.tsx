"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import seria from "../public/assets/4.webp";
import mls from "../public/assets/8.webp";
import premierLeague from "../public/assets/6.webp";
import rsl from "../public/assets/16.webp";
import bundesliga from "../public/assets/11.webp";
import league1 from "../public/assets/10.webp";

function Leagues() {
  return (
    <section className="relative mx-auto  px-4  sm:px-6 lg:px-8 mb-[6.5rem]">
      <h3 className="mb-14 text-center relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
        Enjoy all football leagues
      </h3>

      {/* <div className="flex flex-col justify-center items-center">
        <h3 className="mb-10 text-center xl:text-left relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
          Watch all football leagues
        </h3>
        <div className="flex  gap-4  ">
          <Image
            className="rounded-[10px]"
            src={seria}
            alt="seria"
            width={350}
            height={495}
          />
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-4 ">
              <Image
                className="h-[250px] w-[184px] rounded-[10px]"
                src={mls}
                alt="mls"
                width={350}
                height={495}
              />
              <Image
                className="h-[250px] w-[184px] rounded-[10px]"
                src={premierLeague}
                alt="premierleague"
                width={350}
                height={495}
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <Image
                className="h-[250px] w-[184px] rounded-[10px]"
                src={rsl}
                alt="rsl"
                width={350}
                height={495}
              />
              <Image
                className="h-[250px] w-[184px] rounded-[10px]"
                src={bundesliga}
                alt="bundesliga"
                width={350}
                height={495}
              />
            </div>

            <Image
              className="h-[250px] w-[184px] rounded-[10px]"
              src={league1}
              alt="league1"
              width={350}
              height={495}
            />
          </div>
        </div>
      </div> */}
      <Carousel
        className="w-full max-w-5xl md:max-w-3xl lg:max-w-5xl  m-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <div className="absolute z-10 h-full inset-0 bg-gradient-to-r from-neutral-200/0 via-neutral-950/5  to-[#000000f3] pointer-events-none" />
        <CarouselContent className="items-center">
          <CarouselItem className="basis-1/2  md:basis-1/5 lg:basis-1/4 ">
            <Image
              className=""
              src={seria}
              alt="ucl-logo"
              width={350}
              height={495}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2  md:basis-1/5 lg:basis-1/4 ">
            <Image
              className=""
              src={premierLeague}
              alt="cricket-logo"
              width={350}
              height={495}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2  md:basis-1/5 lg:basis-1/4 ">
            <Image
              className=""
              src={mls}
              alt="tennis-logo"
              width={350}
              height={495}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2  md:basis-1/5 lg:basis-1/4 ">
            <Image
              className=""
              src={bundesliga}
              alt="volleyball"
              width={350}
              height={495}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2  md:basis-1/5 lg:basis-1/4 ">
            <Image
              className=""
              src={league1}
              alt="tabbleTennis"
              width={350}
              height={495}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2  md:basis-1/5 lg:basis-1/4 ">
            <Image className="" src={rsl} alt="golf" width={350} height={495} />
          </CarouselItem>
        </CarouselContent>
        <div className="absolute z-10 h-full inset-0 bg-gradient-to-l from-neutral-200/0 via-neutral-950/5  to-[#000000f3] pointer-events-none" />
        {/* <div className="absolute z-10 h-full inset-0 bg-gradient-to-l from-gray-200/0 via-black-900/25 to-[#000000] pointer-events-none" /> */}
      </Carousel>
    </section>
  );
}
export default Leagues;
