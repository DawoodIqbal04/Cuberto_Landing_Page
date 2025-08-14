"use client";

import React, { useRef } from "react";
import Roboto from "./Roboto";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Resources = () => {
  const parentRef = useRef(null);
  const swiperRef = useRef(null);
  const paragraphRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    gsap.set(topTextRef.current, { y: "0%" });
    gsap.set(bottomTextRef.current, { y: "100%" });

    tl.current = gsap
      .timeline({ paused: true })
      .to(
        topTextRef.current,
        {
          y: "-100%",
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

    const split = SplitText.create(paragraphRef.current, { type: "lines" });

    gsap.from(".reshead", {
      y: 80,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 80%",
      },
    });
    gsap.from(swiperRef.current, {
      y: 120,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: swiperRef.current,
        start: "top 70%",
      },
    });
    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });
    gsap.from(buttonRef.current, {
      y: 100,
      duration: 1,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const handleMouseEnter = () => {
    tl.current?.play();
  };
  const handleMouseLeave = () => {
    tl.current?.reverse();
  };

  return (
    <div
      ref={parentRef}
      className="w-full overflow-x-hidden min-h-screen text-white bg-[#1a1a1a] lg:rounded-t-[60px] rounded-t-4xl lg:py-44 lg:px-0 md:px-30 px-6 py-20"
    >
      <div className="flex flex-col lg:text-[120px] text-5xl font-medium lg:leading-25 tracking-tighter lg:pl-34">
        <div className=" block md:hidden lg:block lg:h-30 h-13 w-max overflow-hidden">
          <h1 className="reshead ">Development</h1>
        </div>
        <div className=" block md:hidden lg:block lg:h-30 h-13 w-max overflow-hidden">
          <h1 className="reshead ">and design</h1>
        </div>
        <div className="tracking-normal block md:hidden lg:block lg:h-24 lg:w-141 h-11 w-63 overflow-hidden">
          <div className="reshead w-full h-full">
            <Roboto text="resources" />
          </div>
        </div>
        <div className="hidden md:block lg:hidden h-13 w-max overflow-hidden ">
          <h1 className="reshead ">Development and</h1>
        </div>
        <div className="hidden md:flex lg:hidden items-center gap-4 h-14 w-100 overflow-hidden ">
          <div className=" h-full">
            <h1 className="reshead ">design</h1>
          </div>
          <div className="reshead h-full">
            <Roboto text="resources" />
          </div>
        </div>
      </div>
      <div
        ref={swiperRef}
        className="w-full flex lg:px-34 md:pr-30 lg:pr-0 py-34"
      >
        <Swiper
          modules={[FreeMode]}
          spaceBetween={260}
          slidesPerView={2.55}
          breakpoints={{
            768: {
              spaceBetween: 230,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 0,
              slidesPerView: 2.55,
            },
          }}
          freeMode={{
            momentum: true,
            enabled: true,
            sticky: false,
            momentumVelocityRatio: 1.2,
            momentumRatio: 1.2,
            momentumBounce: true,
            momentumBounceRatio: 3.2,
          }}
          className="w-full swiperparent cursor-none"
          style={{ overflow: "visible" }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6 lg:h-86 h-66 lg:w-104 w-84 ">
              <div className="lg:h-59 lg:w-104 w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={"/images/resource1.png"}
                  alt="Resource 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1>How to Make UI/UX Website // HTML and CSS Development</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6 lg:h-86 h-66 lg:w-104 w-84">
              <div className="lg:h-59 lg:w-104 w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={"/images/resource2.png"}
                  alt="Resource 2"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1>How to Cook an Emotional Site // Web Development</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6 lg:h-86 h-66 lg:w-104 w-84">
              <div className="lg:h-59 lg:w-104 w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={"/images/resource3.png"}
                  alt="Resource 3"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1>How to Make Epic Website // Frontend Development</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6 lg:h-86 h-60 lg:w-104 w-84">
              <div className="lg:h-59 lg:w-104 w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={"/images/resource4.png"}
                  alt="Resource 4"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1>Cuberto Mouse Flower</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6 lg:h-86 h-66 lg:w-104 w-84">
              <div className="lg:h-59 lg:w-104 w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={"/images/resource5.jpg"}
                  alt="Resource 5"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1>Making Switch with SVG Distortation Effect</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6 lg:h-86 h-60 lg:w-104 w-84">
              <div className="lg:h-59 lg:w-104 w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={"/images/resource6.png"}
                  alt="Resource 6"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1>UI/UX Design Tips / Volume 9</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:ml-auto lg:pr-66 font-86 text-xl lg:w-1/2 flex flex-col leading-6 lg:items-start items-center gap-10">
        <div className="text-center lg:text-left md:text-3xl">
          <h1 ref={paragraphRef}>
            We regularly release design courses, offer advice to newbie
            designers, walk you through creating awesome effects, and share
            source files.
          </h1>
        </div>
        <button
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-center w-full px-4 lg:h-10 md:h-14 h-12 relative group border border-white rounded-full overflow-hidden"
        >
          <div className="relative w-full lg:h-6 md:h-8 h-6 text-base md:text-2xl lg:text-base font-medium z-10 overflow-hidden">
            <p
              ref={topTextRef}
              className="absolute lg:right-20 md:right-38 right-16 text-white"
            >
              VIEW ALL RESOURCES
            </p>
            <p
              ref={bottomTextRef}
              className="absolute lg:right-20 md:right-38 right-16 font-semibold text-black"
            >
              VIEW ALL RESOURCES
            </p>
          </div>
          <div className="absolute left-0 bottom-[-100%] bg-white w-full  h-full rounded-[50%] group-hover:rounded-none group-hover:bottom-0 transition-all duration-450"></div>
        </button>
      </div>
    </div>
  );
};

export default Resources;
