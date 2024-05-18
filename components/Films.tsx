import Image from "next/image";
import road from "../public/assets/roadHouse_.jpg";
import { getDictionary } from "@/get-dictionary";
export default function Films({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    <div className="mb-24 relative overflow-hidden mt-6 md:mt-20  md:mb-20 h-full">
      <div className="pb-[370px] pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="absolute z-10 h-full inset-0 bt-gradient pointer-events-none" />
          <div className="sm:max-w-[38rem] relative z-50">
            <h2 className=" text-center sm:text-left z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
              {dictionary.films.h2}
            </h2>
            <p className="text-center sm:text-left mt-4 text-xl text-[#888888]">
              {dictionary.films.p}
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src={road}
                          alt=""
                          className="h-full w-full object-cover object-center rounded"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE8xZbi8r7ImwqImi3Wow7AoKwATmbFldLmtbbu5O9w&s"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={2430}
                          height={3600}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <Image
                          src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={1000}
                          height={1482}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://m.media-amazon.com/images/M/MV5BZWM0ZDVlMDgtNDdhMy00NWVlLWE1MmItNmViODMzNmUyMDU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                          alt=""
                          width={1500}
                          height={2222}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={1000}
                          height={1500}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUWeEZDE3iUvCOYRlfFY1oypVWRdn-olrszL23YVqFg&s"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={1500}
                          height={2222}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={1080}
                          height={1350}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="relative z-50 inline-block rounded-[1.25rem]  bg-gradient-to-b from-[#b43072] to-[#092d76] shadow-lg shadow-[#8f00c37c] px-4 py-3 text-sm  text-center font-medium text-white hover:bg-[#d15289] w-28 sm:w-40"
              >
                {dictionary.films.button}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-10 h-full inset-0 bg-gradient pointer-events-none" />
    </div>
  );
}
