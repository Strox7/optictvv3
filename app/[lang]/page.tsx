import Compatible from "@/components/Compatible";
import Copatible2 from "@/components/Copatible2";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Films from "@/components/Films";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Leagues from "@/components/Leagues";
import Pricing from "@/components/Pricing";
import Slider from "@/components/Slider";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import Technologies from "@/components/Technologies";
import WorldWide from "@/components/WorldWide";

import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.hero.metaTitle,
    description: dictionary.hero.metaDescription,
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className=" ">
      <Hero dictionary={dictionary.hero} />
      <div className="relative overflow-hidden">
        <Slider dictionary={dictionary.hero} />
        <div className="absolute  top-[2%] left-[-28%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="hidden md:block absolute  top-[7%] left-[57%] z-30 h-[800px] w-full gradient-two pointer-events-none" />

        <Films dictionary={dictionary.hero} />
        <Leagues dictionary={dictionary.hero} />
        {/* <Copatible2 /> */}
        <Compatible dictionary={dictionary.hero} />
        <div className="absolute  top-[22%] left-[-26%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[10%] left-[-53%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[20%] left-[67%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <div className="absolute top-[26%] lg:top-[30%] left-[-53%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[30%] left-[57%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <Technologies dictionary={dictionary.hero} />
        <WorldWide dictionary={dictionary.hero} />
        <Steps dictionary={dictionary.hero} />
        {/* <div className="absolute top-[37%] sm:top-[40%] md:top-[44%] left-[16%] -z-40 h-[800px] w-full gradient-three  pointer-events-none" />
        <div className="absolute top-[37%] sm:top-[40%] md:top-[44%] left-[-12%] -z-40 h-[800px] w-full gradient-three  pointer-events-none" /> */}

        <Pricing dictionary={dictionary.hero} />
        <div className="lg:hidden absolute  top-[44%] left-[-63%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <div className="absolute  top-[60%] left-[-53%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[60%] left-[57%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <Faq dictionary={dictionary.hero} />
        <div className="absolute  top-[75%] left-[-53%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[80%] left-[57%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <Cta dictionary={dictionary.hero} />
      </div>
    </main>
  );
}
