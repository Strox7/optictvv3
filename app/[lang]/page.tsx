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

        <Films />
        <Leagues />
        {/* <Copatible2 /> */}
        <Compatible />
        <div className="absolute  top-[22%] left-[-26%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[10%] left-[-53%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[20%] left-[67%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <div className="absolute top-[26%] lg:top-[30%] left-[-53%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[30%] left-[57%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <Technologies />
        <WorldWide />
        <Steps />
        {/* <div className="absolute top-[37%] sm:top-[40%] md:top-[44%] left-[16%] -z-40 h-[800px] w-full gradient-three  pointer-events-none" />
        <div className="absolute top-[37%] sm:top-[40%] md:top-[44%] left-[-12%] -z-40 h-[800px] w-full gradient-three  pointer-events-none" /> */}

        <Pricing />
        <div className="lg:hidden absolute  top-[44%] left-[-63%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <div className="absolute  top-[60%] left-[-53%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[60%] left-[57%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <Faq />
        <div className="absolute  top-[75%] left-[-53%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[80%] left-[57%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
        <Cta />
      </div>
    </main>
  );
}
