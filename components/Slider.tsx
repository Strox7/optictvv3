"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import ucl from "../public/assets/ucl-logo.png";
import baseball from "../public/assets/Baseball LOGO.webp";
import boxing from "../assets/public/Boxing league.webp";
import cricket from "../public/assets/Cricket logo.webp";
import golf from "../public/assets/Golf league.webp";
import nba from "../public/assets/NBA LOGO.webp";
import rugby from "../public/assets/Rugby League.webp";
import tennis from "../public/assets/Tennis logo.webp";
import ufc from "../public/assets/UFC LOGO.webp";
import volleyball from "../public/assets/Volleyball logo (1).webp";
import tabbleTennis from "../public/assets/table tennis.webp";
import { getDictionary } from "@/get-dictionary";

function Slider({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    // 50% on small screens and 33% on larger screens.
    <div className="relative  mt-20 md:mt-0 container">
      <h3 className=" text-3xl lg:text-4xl  leading-6 text-center tracking-tighter mb-8 mt-8 font-bold  text-white">
        {dictionary.slider.h3}
      </h3>
      <Carousel
        className="w-full max-w-5xl md:max-w-3xl lg:max-w-5xl  m-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <div className="absolute z-10 h-full inset-0 bg-gradient-to-r from-neutral-200/0 via-neutral-950/30  to-[#000000] pointer-events-none" />
        <CarouselContent className="items-center">
          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-20"
              src={ucl}
              alt="ucl-logo"
              width={2100}
              height={1995}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-20"
              src={cricket}
              alt="cricket-logo"
              width={2100}
              height={1995}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-20"
              src={tennis}
              alt="tennis-logo"
              width={2100}
              height={1995}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-24"
              src={volleyball}
              alt="volleyball"
              width={2100}
              height={1995}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-24"
              src={tabbleTennis}
              alt="tabbleTennis"
              width={2100}
              height={1995}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-20"
              src={golf}
              alt="golf"
              width={2100}
              height={1995}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-24"
              src={ufc}
              alt="ufc"
              width={2100}
              height={1995}
            />
          </CarouselItem>

          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-24"
              src={baseball}
              alt="baseball"
              width={2100}
              height={1995}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-24"
              src={rugby}
              alt="rugby"
              width={2100}
              height={1995}
            />
          </CarouselItem>

          <CarouselItem className="basis-1/3  md:basis-1/5 lg:basis-1/6 ">
            <Image
              className="w-9"
              src={nba}
              alt="nba"
              width={826}
              height={1995}
            />
          </CarouselItem>
        </CarouselContent>

        {/* <div className="absolute z-10 h-full inset-0 bg-gradient-to-l from-gray-200/0 via-black-900/25 to-[#000000] pointer-events-none" /> */}
      </Carousel>
    </div>
  );
}
export default Slider;
