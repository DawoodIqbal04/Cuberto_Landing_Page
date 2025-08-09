import React, { useRef } from "react";
import Roboto from "./Roboto";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const videoRef = useRef(null);

  gsap.set('.herovid', {
    scale: 0,
  })
  gsap.set('.text1', {
    y: 100
  })
  gsap.set('.text3', {
    y: 100
  })
  gsap.set('.text3', {
    y: 100
  })

  useGSAP(() => {
    gsap.from('.text1', {
      y: 100,
      duration: 0.8,
      ease: "expo.Out",
      delay: 1,
      stagger: 0.1,
    });
    gsap.from('.text2', {
      y: 100,
      duration: 0.8,
      ease: "expo.Out",
      delay: 1.3,
      stagger: 0.1,
    });
    gsap.from('.text3', {
      y: 100,
      duration: 0.8,
      ease: "expo.Out",
      delay: 1.6,
      stagger: 0.1,
    });
    gsap.from('.herovid', {
      scale: 0,
      duration: 0.8,
      ease: 'expo.Out',
      delay: 1.4,
    })
  }, []);

  return (
    <div className="w-full lg:h-[calc(100vh-130px)] md:h-[45vh] md:font-medium font-semibold flex flex-col lg:gap-0 gap-2 text-black lg:text-8xl md:text-7xl text-[46px] lg:leading-0 md:leading-16 leading-tight lg:pl-34 md:pl-34 lg:px-14 px-4 lg:py-10 py-16 tracking-tight">
      <div className="overflow-hidden w-max flex items-center lg:h-27 md:h-20">
        <h1 className="flex items-center w-full lg:flex-nowrap flex-wrap lg:gap-6 gap-2">
          <span className="text1">We</span>
          <span className="text1">area </span>
          <span className="text1">a </span>
          <span className="text1">digital</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="herovid w-36 h-24 rounded-full overflow-hidden md:flex hidden">
          <video src="/videos/herovideo.mp4" muted autoPlay loop></video>
        </div>
        <div className="flex items-center w-max overflow-hidden lg:h-27 md:h-20">
          <div className="flex items-center lg:gap-10 gap-5 h-full">
            <div className="text2 flex items-center">
              <Roboto text="design" />
            </div>
            <div className="text2 flex items-center ">
              <h1>and</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-max overflow-hidden lg:h-27 md:h-20 ">
        <h1 className=" flex items-center lg:gap-6 gap-2">
          <span className="text3">motion</span><span className="text3">agency</span>
        </h1>
      </div>
      <div className="herovid w-43 h-30 mx-auto rounded-3xl overflow-hidden md:hidden flex">
        <video src="/videos/herovideo.mp4" muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Hero;
