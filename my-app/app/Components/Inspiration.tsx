"use client";

import React from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaDribbble } from "react-icons/fa";
import MovingText from "./MovingText";

const Inspiration = () => {
  return (
    <div className="w-full overflow-x-hidden lg:gap-60 gap-20 lg:min-h-screen text-black pt-24 lg:pb-10 bg-white flex flex-col">
      <div>
        <MovingText />
      </div>
      <div className="md:w-full w-[400vw] flex lg:px-18 px-6 py-34">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={-700}
          breakpoints={{
            768: {
              spaceBetween: -150,
              slidesPerView: 2
            },
            1024: {
              spaceBetween: -350,
            }
          }}
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
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo1.png"}
                  alt="Inspo 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo2.png"}
                  alt="Inspo 2"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo3.png"}
                  alt="Inspo 3"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo4.png"}
                  alt="Inspo 4"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo5.png"}
                  alt="Inspo 5"
                  width={450}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo6.png"}
                  alt="Inspo 6"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo7.jpg"}
                  alt="Inspo 7"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo8.png"}
                  alt="Inspo 8"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo9.png"}
                  alt="Inspo 9"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/images/inspo10.png"}
                  alt="Inspo 10"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="flex items-center gap-2 text-sm font-bold">
                <FaDribbble size={15} />
                cuberto
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Inspiration;
