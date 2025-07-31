'use client';

import React from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { FaDribbble } from 'react-icons/fa';
import MovingText from './MovingText';

const Inspiration = () => {
  return (
    <div className='w-full gap-60 min-h-screen text-black pt-24 pb-10 bg-white flex flex-col'>
        <div>
            <MovingText />
        </div>
        <div className="w-full flex px-18 py-34">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={-380}
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
                  src={"/inspo1.png"}
                  alt="Inspo 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/inspo2.png"}
                  alt="Inspo 2"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/inspo3.png"}
                  alt="Inspo 3"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/inspo4.png"}
                  alt="Inspo 4"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/inspo5.png"}
                  alt="Inspo 5"
                  width={450}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/inspo6.png"}
                  alt="Inspo 6"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/inspo7.jpg"}
                  alt="Inspo 7"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/inspo8.png"}
                  alt="Inspo 8"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/inspo9.png"}
                  alt="Inspo 9"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-start gap-6">
              <div className="bg-white h-50 w-68 rounded-xl overflow-hidden">
                <Image
                  src={"/inspo10.png"}
                  alt="Inspo 10"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className='flex items-center gap-2 text-sm font-bold'><FaDribbble size={15} />cuberto</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Inspiration