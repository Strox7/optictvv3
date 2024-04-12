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
    <main className="">
      <Hero dictionary={dictionary.hero} />
      <Slider dictionary={dictionary.hero} />
      <Films />
      <Leagues />
      {/* <Copatible2 /> */}
      <Compatible />
      <Steps />
      <WorldWide />
      <Pricing />
      <Faq />
      <Cta />
    </main>
  );
}
