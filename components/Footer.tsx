import Image from "next/image";
import logo from "../public/assets/White Logo wordmark.webp";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-white mx-auto  px-4  sm:px-6 lg:px-8 pb-6 border-t border-[#ffffff30] pt-12 ">
      <div className="flex flex-wrap gap-12 lg:gap-32 justify-center border-b border-[#ffffff30] pb-16">
        <div className="flex items-center justify-center flex-col lg:block">
          <Image
            className="w-36"
            src={logo}
            alt="optictv-white-logo"
            width={882}
            height={199}
          />
          <p className="text-center lg:text-left sm:w-96 mt-3 text-[#888888] tracking-tighter">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            fugiat!
          </p>
          {/* <div className="flex gap-2 text-[#888888] mt-3">
            <div className="border-r border-[#888888] pr-2">
              <InstagramIcon size="20px" />
            </div>
            <div>
              <FacebookIcon size="20px" />
            </div>
          </div> */}
        </div>
        <div className="flex sm:gap-32 gap-x-16 gap-y-10 justify-center ga flex-wrap">
          <div className="">
            <h4 className="text-xl font-semibold tracking-tighter">
              Usefull Links
            </h4>
            <ul className="mt-5 flex flex-col gap-2 text-[#888888] tracking-tighter">
              <li>
                <Link
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                >
                  Channels
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold tracking-tighter">
              Community
            </h4>
            <ul className="flex flex-col gap-2 mt-5 tracking-tighter text-[#888888]">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                >
                  Tiktok
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:block">
            <h4 className="text-xl font-semibold tracking-tighter">Contact</h4>
            <ul className="mt-5 flex flex-col gap-2 text-[#888888] tracking-tighter text-center lg:text-left">
              <li>
                <a
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                  href="#"
                >
                  support@optictv.online
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#fafafa] transition duration-300 text-base"
                  href="#"
                >
                  +4407553621281
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center  pt-5 ">
        <p className="text-xs lg:text-sm tracking-tighter font-medium ">
          Copyright © 2022 OpticTv All Rights Reserved
        </p>
        {/* <div className="flex gap-2 ">
          <InstagramIcon size="20px" />
          <LinkedinIcon size="20px" />
        </div> */}
      </div>
    </footer>
  );
}
export default Footer;
