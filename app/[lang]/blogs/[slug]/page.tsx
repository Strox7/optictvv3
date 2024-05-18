import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import kmage from "../../../../public/assets/2151005448.jpg";
import { PortableText } from "@portabletext/react";
import Cta from "@/components/Cta";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import BlogCta from "@/components/BlogCta";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: fullBlog = await getData(params.slug);
  return {
    title: data.title,
    description: data.smallDescription,
  };
}

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == "${slug}"] {
      "currentSlug": slug.current,
        title,
        content,
        titleImage,
        smallDescription
    }[0]
    `;

  const data = await client.fetch(query);
  return data;
}

export default async function pages({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="text-white mt-[-80px] z-20   relative overflow-hidden mx-auto       pt-8 lg:pt-28 ">
      <div className="absolute  top-[40%] left-[55%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
      <div className="relative mt-[-90px] h-screen">
        <Image
          src={kmage}
          className="absolute top-0 opacity-70  object-cover h-screen"
          width={4608}
          height={3072}
          alt="kmage"
        />

        <div className="flex relative z-50 pt-[16rem] md:pt-[15rem] justify-center mb-20 flex-wrap  px-4  sm:px-6 lg:px-8 ">
          <div className="md:flex">
            <span className=" text-center uppercase md:font-medium   block  mb-3 md:mb-0 text-base  md:mr-8 mt-4  tracking-tighter text-white md:text-gradient ">
              Article
            </span>

            <div>
              {" "}
              <h1 className="capitalize sm:max-w-[1000px] text-center md:text-left relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-7 text-white sm:text-6xl">
                {data.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute h-full inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#000000]" />
      </div>
      <div className="absolute  top-[50%] left-[-55%] z-30 h-[800px] w-full gradient pointer-events-none" />
      <div className="absolute  top-[10%] left-[55%] z-30 h-[800px] w-full gradient-two pointer-events-none" />

      <div className="mt-[-8rem]  mx-auto  px-4  sm:px-6 lg:px-8 lg:mt-[-145px] relative z-50 pb-20">
        {/* <h1 className=" relative  z-50 lg:text-5xl text-3xl font-bold tracking-tighter mx-auto  leading-8 text-white sm:text-6xl max-w-4xl ">
          
        </h1> */}
        <div className="mt-8  w-full">
          <Image
            src={urlFor(data.titleImage).url()}
            alt="image"
            width={800}
            height={800}
            className="rounded-[10px] mx-auto w-full object-cover md:w-[800px] "
          />
        </div>

        <div className="mt-10 prose-base lg:prose-lg prose-blue max-w-5xl mx-auto">
          <PortableText value={data.content} />
        </div>
      </div>
      {/* <Cta dictionary={dictionary.hero} /> */}
      <BlogCta />
    </div>
  );
}
