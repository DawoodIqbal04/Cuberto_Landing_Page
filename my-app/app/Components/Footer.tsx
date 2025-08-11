import Link from "next/link";
import React, { useRef } from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const topTextRef2 = useRef(null);
  const bottomTextRef2 = useRef(null);
  const buttonRef = useRef(null);
  const buttonRef2 = useRef(null);
  const tl = useRef<gsap.core.Timeline>(null);
  const tl2 = useRef<gsap.core.Timeline>(null);
  const tl3 = useRef<gsap.core.Timeline>(null);
  const tl4 = useRef<gsap.core.Timeline>(null);
  const tl5 = useRef<gsap.core.Timeline>(null);
  const tl6 = useRef<gsap.core.Timeline>(null);
  const tl7 = useRef<gsap.core.Timeline>(null);
  const tl8 = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    gsap.set(topTextRef.current, { y: "0%" });
    gsap.set(bottomTextRef.current, { y: "100%" });
    gsap.set(topTextRef2.current, { y: "0%" });
    gsap.set(bottomTextRef2.current, { y: "100%" });
    gsap.set(".toplink", { y: "0%" });
    gsap.set(".bottomlink", { y: "85%", scale: 0.5 });
    gsap.set(".toplink2", { y: "0%" });
    gsap.set(".bottomlink2", { y: "85%", scale: 0.5 });
    gsap.set(".toplink3", { y: "0%" });
    gsap.set(".bottomlink3", { y: "85%", scale: 0.5 });
    gsap.set(".toplink4", { y: "0%" });
    gsap.set(".bottomlink4", { y: "85%", scale: 0.5 });
    gsap.set(".toplink5", { y: "0%" });
    gsap.set(".bottomlink5", { y: "85%", scale: 0.5 });
    gsap.set(".toplink6", { y: "0%" });
    gsap.set(".bottomlink6", { y: "85%", scale: 0.5 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(
        topTextRef.current,
        {
          y: "-150%",
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        bottomTextRef.current,
        {
          y: "0%",
          duration: 0.3,
          ease: "power2.inOut",
        },
        0
      )
      .to(buttonRef.current, {
        scale: 1.03,
        duration: 0.5,
        delay: -0.5,
        ease: "power2.inOut",
      });

    tl2.current = gsap
      .timeline({ paused: true })
      .to(
        topTextRef2.current,
        {
          y: "-150%",
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        bottomTextRef2.current,
        {
          y: "0%",
          duration: 0.3,
          ease: "power2.inOut",
        },
        0
      )
      .to(buttonRef2.current, {
        scale: 1.03,
        duration: 0.5,
        delay: -0.5,
        ease: "power2.inOut",
      });

    tl3.current = gsap
      .timeline({ paused: true })
      .to(
        ".toplink",
        {
          y: "-100%",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".bottomlink",
        {
          y: "0%",
          scale: 1,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );
    tl4.current = gsap
      .timeline({ paused: true })
      .to(
        ".toplink2",
        {
          y: "-100%",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".bottomlink2",
        {
          y: "0%",
          scale: 1,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );
    tl5.current = gsap
      .timeline({ paused: true })
      .to(
        ".toplink3",
        {
          y: "-100%",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".bottomlink3",
        {
          y: "0%",
          scale: 1,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );
    tl6.current = gsap
      .timeline({ paused: true })
      .to(
        ".toplink4",
        {
          y: "-100%",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".bottomlink4",
        {
          y: "0%",
          scale: 1,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );
    tl7.current = gsap
      .timeline({ paused: true })
      .to(
        ".toplink5",
        {
          y: "-100%",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".bottomlink5",
        {
          y: "0%",
          scale: 1,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );
    tl8.current = gsap
      .timeline({ paused: true })
      .to(
        ".toplink6",
        {
          y: "-100%",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        ".bottomlink6",
        {
          y: "0%",
          scale: 1,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );
  }, []);

  const handleMouseEnter = () => {
    tl.current?.play();
  };
  const handleMouseLeave = () => {
    tl.current?.reverse();
  };

  const handleMouseEnter2 = () => {
    tl2.current?.play();
  };
  const handleMouseLeave2 = () => {
    tl2.current?.reverse();
  };

  const handleMouseEnter3 = () => {
    tl3.current?.play();
  };
  const handleMouseLeave3 = () => {
    tl3.current?.reverse();
  };

  return (
    <div className="w-full lg:h-[80vh] md:h-[50vh] h-[105vh] flex flex-col items-start gap-16  bg-[#000000] text-white lg:px-24 md:px-14 px-6 lg:py-40 md:py-0 md:pt-55 py-20">
      <div className="w-full flex md:flex-row flex-col items-start justify-between">
        <div className="flex md:flex-row flex-col md:items-center items-start lg:gap-6 md:gap-10 gap-16 md:w-1/2">
          <div className="flex flex-col items-start gap-6 md:w-1/2 md:pr-0 pr-14">
            <button
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex items-center justify-center w-50 h-10 relative group border border-white rounded-full overflow-hidden"
            >
              <div className="relative h-7 w-full text-xl z-10 overflow-hidden">
                <p
                  ref={topTextRef}
                  className="absolute lg:right- md:right- right-1.5 text-white"
                >
                  info@cuberto.com
                </p>
                <p
                  ref={bottomTextRef}
                  className="absolute lg:right- md:right- right-1.5 font-medium text-black "
                >
                  info@cuberto.com
                </p>
              </div>
              <div className="absolute left-0 bottom-[-100%] bg-white w-full  h-full rounded-[50%] group-hover:rounded-none group-hover:bottom-0 transition-all duration-450"></div>
            </button>
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
            <button
              ref={buttonRef2}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className="flex items-center justify-center w-46 h-10 relative group border border-white rounded-full overflow-hidden"
            >
              <div className="relative h-7 w-full text-xl z-10 overflow-hidden">
                <p
                  ref={topTextRef2}
                  className="absolute lg:right- md:right- right-6 text-white"
                >
                  +1 234 567 890
                </p>
                <p
                  ref={bottomTextRef2}
                  className="absolute lg:right- md:right- right-6 font-medium text-black "
                >
                  +1 234 567 890
                </p>
              </div>
              <div className="absolute left-0 bottom-[-100%] bg-white w-full  h-full rounded-[50%] group-hover:rounded-none group-hover:bottom-0 transition-all duration-450"></div>
            </button>
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
            <button
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              className="flex items-center justify-center h-8 w-30 relative"
            >
              <div className="relative h-7 w-full overflow-hidden">
                <Link
                  href={""}
                  className="toplink absolute lg:right- md:right- right-8 text-white"
                >
                  Serivices
                </Link>
                <Link
                  href={""}
                  className="bottomlink absolute lg:right- md:right- right-8 "
                >
                  Serivices
                </Link>
              </div>
            </button>
            <button
              onMouseEnter={() => tl4.current?.play()}
              onMouseLeave={() => tl4.current?.reverse()}
              className="flex items-center justify-center h-8 w-30 relative"
            >
              <div className="relative h-7 w-full overflow-hidden">
                <Link
                  href={""}
                  className="toplink2 absolute lg:right- md:right- right-9 text-white"
                >
                  Projects
                </Link>
                <Link
                  href={""}
                  className="bottomlink2 absolute lg:right- md:right- right-9 "
                >
                  Projects
                </Link>
              </div>
            </button>
            <button
              onMouseEnter={() => tl5.current?.play()}
              onMouseLeave={() => tl5.current?.reverse()}
              className="flex items-center justify-center h-8 w-30 relative"
            >
              <div className="relative h-7 w-full overflow-hidden">
                <Link
                  href={""}
                  className="toplink3 absolute lg:right- md:right- right-5 text-white"
                >
                  Company
                </Link>
                <Link
                  href={""}
                  className="bottomlink3 absolute lg:right- md:right- right-5 "
                >
                  Company
                </Link>
              </div>
            </button>
          </div>
          <div className="flex flex-col md:text-right text-left gap-3.5 text-xl">
            <button
              onMouseEnter={() => tl6.current?.play()}
              onMouseLeave={() => tl6.current?.reverse()}
              className="flex items-center justify-center h-8 w-30 relative"
            >
              <div className="relative h-7 w-full overflow-hidden">
                <Link
                  href={""}
                  className="toplink4 absolute lg:right- md:right- right-18 text-white"
                >
                  Blog
                </Link>
                <Link
                  href={""}
                  className="bottomlink4 absolute lg:right- md:right- right-18 "
                >
                  Blog
                </Link>
              </div>
            </button>
            <button
              onMouseEnter={() => tl7.current?.play()}
              onMouseLeave={() => tl7.current?.reverse()}
              className="flex items-center justify-center h-8 w-30 relative"
            >
              <div className="relative h-7 w-full overflow-hidden">
                <Link
                  href={""}
                  className="toplink5 absolute lg:right- md:right- right-6 text-white"
                >
                  Workflow
                </Link>
                <Link
                  href={""}
                  className="bottomlink5 absolute lg:right- md:right- right-6 "
                >
                  Workflow
                </Link>
              </div>
            </button>
            <button
              onMouseEnter={() => tl8.current?.play()}
              onMouseLeave={() => tl8.current?.reverse()}
              className="flex items-center justify-center h-8 w-30 relative"
            >
              <div className="relative h-7 w-full overflow-hidden">
                <Link
                  href={""}
                  className="toplink6 absolute lg:right- md:right- right-8 text-white"
                >
                  Contacts
                </Link>
                <Link
                  href={""}
                  className="bottomlink6 absolute lg:right- md:right- right-8 "
                >
                  Contacts
                </Link>
              </div>
            </button>
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
            onMouseEnter={() =>
              gsap.to(".social1", {
                scale: 0.9,
                duration: 0.2,
                ease: "power2.in",
              })
            }
            onMouseLeave={() =>
              gsap.to(".social1", {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
              })
            }
            href={""}
            className="social1 flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaInstagram />
          </Link>
          <Link
            onMouseEnter={() =>
              gsap.to(".social2", {
                scale: 0.9,
                duration: 0.2,
                ease: "power2.in",
              })
            }
            onMouseLeave={() =>
              gsap.to(".social2", {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
              })
            }
            href={""}
            className="social2 flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaYoutube />
          </Link>
          <Link
            onMouseEnter={() =>
              gsap.to(".social3", {
                scale: 0.9,
                duration: 0.2,
                ease: "power2.in",
              })
            }
            onMouseLeave={() =>
              gsap.to(".social3", {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
              })
            }
            href={""}
            className="social3 flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaGithub />
          </Link>
          <Link
            onMouseEnter={() =>
              gsap.to(".social4", {
                scale: 0.9,
                duration: 0.2,
                ease: "power2.in",
              })
            }
            onMouseLeave={() =>
              gsap.to(".social4", {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
              })
            }
            href={""}
            className="social4 flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaFacebook />
          </Link>
          <Link
            onMouseEnter={() =>
              gsap.to(".social5", {
                scale: 0.9,
                duration: 0.2,
                ease: "power2.in",
              })
            }
            onMouseLeave={() =>
              gsap.to(".social5", {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
              })
            }
            href={""}
            className="social5 flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaDribbble />
          </Link>
          <Link
            onMouseEnter={() =>
              gsap.to(".social6", {
                scale: 0.9,
                duration: 0.2,
                ease: "power2.in",
              })
            }
            onMouseLeave={() =>
              gsap.to(".social6", {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
              })
            }
            href={""}
            className="social6 flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-full"
          >
            <FaBehance />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
