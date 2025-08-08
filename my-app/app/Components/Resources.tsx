"use client";

import React from "react";
import Roboto from "./Roboto";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

const Resources = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen text-white bg-[#1a1a1a] lg:rounded-t-[60px] rounded-t-4xl lg:py-44 lg:px-0 md:px-30 px-6 py-20">
      <div className="flex flex-col lg:text-[120px] text-5xl font-medium lg:leading-25 tracking-tighter lg:pl-34">
        <div className=" block md:hidden lg:block">
          <h1>Development</h1>
        </div>
        <div className=" block md:hidden lg:block">
          <h1>and design</h1>
        </div>
        <div className="tracking-normal block md:hidden lg:block">
          <Roboto text="resources" />
        </div>
        <div className="hidden md:block lg:hidden">
          <h1>Development and</h1>
        </div>
        <div className="hidden md:flex lg:hidden items-center gap-4">
          <h1>design</h1>
          <Roboto text="resources" />
        </div>
      </div>
      <div className="w-full flex lg:px-34 md:pr-30 lg:pr-0 py-34">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={260}
          slidesPerView={2.55}
          breakpoints={{
            768: {
              spaceBetween: 230,
              slidesPerView: 2
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
          className="w-full"
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
          <h1>
            We regularly release design courses, offer advice to newbie
            designers, walk you through creating awesome effects, and share
            source files.
          </h1>
        </div>
        <div className="flex items-center justify-center w-max px-4 lg:h-10 md:h-14 h-10 border border-white rounded-full">
          <h1 className="text-base md:text-2xl lg:text-base font-medium ">VIEW ALL RESOURCES</h1>
        </div>
      </div>
    </div>
  );
};

export default Resources;
