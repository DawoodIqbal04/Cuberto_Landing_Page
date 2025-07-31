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
    <div className="w-full min-h-screen text-white bg-[#000000] rounded-t-[60px] py-44">
      <div className="flex flex-col text-[120px] leading-25 tracking-tighter pl-34">
        <div>
          <h1>Development</h1>
        </div>
        <div>
          <h1>and design</h1>
        </div>
        <div className="tracking-normal">
          <Roboto text="resources" />
        </div>
      </div>
      <div className="w-full flex px-34 py-34">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={150}
          slidesPerView={2.55}
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
            <div className="flex flex-col items-start gap-6">
              <div className="h-59 w-104 rounded-3xl overflow-hidden">
                <Image
                  src={"/resource1.png"}
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
            <div className="flex flex-col items-start gap-6">
              <div className="h-59 w-104 rounded-3xl overflow-hidden">
                <Image
                  src={"/resource2.png"}
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
            <div className="flex flex-col items-start gap-6">
              <div className="h-59 w-104 rounded-3xl overflow-hidden">
                <Image
                  src={"/resource3.png"}
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
            <div className="flex flex-col items-start gap-6">
              <div className="h-59 w-104 rounded-3xl overflow-hidden">
                <Image
                  src={"/resource4.png"}
                  alt="Resource 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1>Cuberto Mouse Flower</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="h-59 w-104 rounded-3xl overflow-hidden">
                <Image
                  src={"/resource5.jpg"}
                  alt="Resource 1"
                  width={450}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1>Making Switch with SVG Distortation Effect</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="h-59 w-104 rounded-3xl overflow-hidden">
                <Image
                  src={"/resource6.png"}
                  alt="Resource 2"
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
      <div className="ml-auto pr-66 font-medium text-xl w-1/2 flex flex-col leading-6 items-start gap-10">
        <div>
          <h1>
            We regularly release design courses, offer advice to newbie
            designers, walk you through creating awesome effects, and share
            source files.
          </h1>
        </div>
        <div className="flex items-center justify-center w-58 h-10 border border-white rounded-full">
          <h1 className="text-base font-medium ">VIEW ALL RESOURCES</h1>
        </div>
      </div>
    </div>
  );
};

export default Resources;