import Cta from "@/components/Cta";
import Image from "next/image";
import kmage from "../../../public/assets/2151005448.jpg";
import { client, urlFor } from "@/lib/sanity";
import { simipleBlogCard } from "@/lib/interface";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getData() {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
        title,
          smallDescription,
          "currentSlug" : slug.current,
          titleImage
      }`;

  const data = await client.fetch(query);
  return data;
}

async function page() {
  const data: simipleBlogCard[] = await getData();
  console.log(data);

  return (
    <div>
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
                Blogs
              </span>

              <div>
                {" "}
                <h1 className="sm:w-[750px] text-center md:text-left relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-7 text-white sm:text-6xl">
                  Delivering Valuable Content To Our Customers.
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute h-full inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#000000]" />
        </div>
        <div className="absolute  top-[50%] left-[-55%] z-30 h-[800px] w-full gradient pointer-events-none" />
        <div className="absolute  top-[10%] left-[55%] z-30 h-[800px] w-full gradient-two pointer-events-none" />

        <div className="mx-auto max-w-7xl  px-4  sm:px-6 lg:px-8 mt-[-8rem] lg:mt-[-145px] relative z-50 pb-20">
          <div className="max-w-[1173px] mx-auto flex items-center w-full mb-10 flex-col-reverse md:flex-row   justify-between">
            <h3 className=" text-3xl lg:text-4xl  leading-6 text-left tracking-tighter mb-0 mt-8 font-bold  text-white">
              From Our Blog
            </h3>

            <div className="flex gap-2">
              <Button className=" z-10 relative text-white bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px]  rounded-[1.25rem] w-36">
                <span className="flex justify-center items-center bg-black w-full h-full rounded-[1.25rem]">
                  {" "}
                  Sharing Value
                </span>
              </Button>
            </div>
          </div>

          <div className="flex gap-3 gap-y-6 justify-center flex-wrap">
            {data.map((post, idx) => (
              <div
                key={idx}
                className="w-full md:w-[23rem] lg:w-96 bg-gradient-to-b from-[#b43072] to-[#092d76] p-[1px] rounded-[20px]"
              >
                <div className="bg-black rounded-[20px] h-full">
                  <div className="relative ">
                    <div className="absolute h-full inset-0 rounded-[20px] bg-gradient-to-t from-gray-200/0 via-[#00000000] to-[#000000]" />
                    <Image
                      src={urlFor(post.titleImage).url()}
                      alt="image"
                      width={800}
                      height={800}
                      className="rounded-[20px] w-full object-cover md:w-[381px] h-[210px]"
                    />
                    <div className="absolute h-full inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#000000]" />
                  </div>

                  <div className="p-4">
                    <h4 className="line-clamp-2 relative z-50 lg:text-2xl text-xl font-bold tracking-tighter text-left  leading-6 text-white ">
                      {post.title}
                    </h4>
                    <p className="line-clamp-3 mt-4 text-[#888888] text-sm">
                      {post.smallDescription}
                    </p>
                    <div className="mt-4 bg-gradient-to-b from-[#b43072] to-[#092d76]  p-[1px] w-36 mx-auto rounded-[30px]">
                      <Link
                        className="bg-black   block text-center mx-auto   py-2 rounded-[30px] font-semibold"
                        href={`blogs/${post.currentSlug}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              //   <div >
              //     <Image

              //     />
              //     <h3>}</h3>
              //   </div>
            ))}
          </div>
        </div>
        <Cta />
      </div>
    </div>
  );
}
export default page;
