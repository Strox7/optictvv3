import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
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
      {/* <Stats /> */}
    </main>
  );
}
