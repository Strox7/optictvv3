import Compatible from "@/components/Compatible";
import Faq from "@/components/Faq";
import Films from "@/components/Films";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Slider from "@/components/Slider";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
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
      <Compatible />
      <Steps />
      <Pricing />
      <Faq />
    </main>
  );
}
