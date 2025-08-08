import Link from "next/link";
import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full lg:h-[80vh] md:h-[50vh] h-[105vh] flex flex-col items-start gap-16  bg-[#000000] text-white lg:px-24 px-6 lg:py-40 md:py-0 md:pt-55 py-20">
      <div className="w-full flex md:flex-row flex-col items-start justify-between">
        <div className="flex md:flex-row flex-col md:items-center items-start md:gap-6 gap-16 md:w-1/2">
          <div className="flex flex-col items-start gap-6 md:w-1/2 md:pr-0 pr-14">
            <div className="flex items-center justify-center tracking-tight w-50 h-10 text-xl border border-white rounded-full">
              <p>info@cuberto.com</p>
            </div>
            <div className="lg:text-sm">
              <p>
                <span className="text-neutral-500 tracking-tighter">
                  MAIN OFFICE
                </span>{" "}
                901 N Pitt Street Alexandria VA, 22314
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 md:w-1/2 md:pr-0 pr-14">
            <div className="flex items-center justify-center w-46 h-10 text-xl border border-white rounded-full">
              <p>+1 234 567 8900</p>
            </div>
            <div className="lg:text-sm">
              <p>
                <span className="text-neutral-500 tracking-tighter">
                  SECOND OFFICE
                </span>{" "}
                Na Perstyne 342/1, 11000 Prague
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-13 md:pt-0 pt-16">
          <div className="flex flex-col md:text-right text-left gap-3.5 text-xl">
            <p>
              <Link href={""}>Services</Link>
            </p>
            <p>
              <Link href={""}>Projects</Link>
            </p>
            <p>
              <Link href={""}>Company</Link>
            </p>
          </div>
          <div className="flex flex-col md:text-right text-left gap-3.5 text-xl">
            <p>
              <Link href={""}>Blog</Link>
            </p>
            <p>
              <Link href={""}>Workflow</Link>
            </p>
            <p>
              <Link href={""}>Contacts</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col-reverse md:items-center items-start md:justify-between md:gap-0 gap-16">
        <div className="flex items-center gap-4 text-sm">
          <p>
            <Link href={""}> Privacy Policy</Link>
          </p>
          <p className="text-neutral-500">2025, Cuberto</p>
        </div>
        <div className="flex items-center md:gap-5 gap-2.5">
          <Link
            href={""}
            className="flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaInstagram />
          </Link>
          <Link
            href={""}
            className="flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaYoutube />
          </Link>
          <Link
            href={""}
            className="flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaGithub />
          </Link>
          <Link
            href={""}
            className="flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaFacebook />
          </Link>
          <Link
            href={""}
            className="flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaDribbble />
          </Link>
          <Link
            href={""}
            className="flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaBehance />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
