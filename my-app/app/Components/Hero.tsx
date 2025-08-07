import React, { useRef } from "react";
import Roboto from "./Roboto";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.from('.text1', {
      y: 100,
      duration: 1,
      ease: "expo.Out",
      delay: 1,
      stagger: 0.1,
    });
    gsap.from('.text2', {
      y: 100,
      duration: 1,
      ease: "expo.Out",
      delay: 1.3,
      stagger: 0.1,
    });
    gsap.from('.text3', {
      y: 100,
      duration: 1,
      ease: "expo.Out",
      delay: 1.6,
      stagger: 0.1,
    });
    gsap.from(videoRef.current, {
      scale: 0,
      duration: 1,
      ease: 'expo.Out',
      delay: 1.4,
    })
  }, []);

  return (
    <div className="w-full lg:h-[calc(100vh-130px)] md:h-[45vh] md:font-medium font-semibold flex flex-col lg:gap-0 gap-5 text-black md:text-8xl text-[46px] lg:leading-0 md:leading-16 leading-tight lg:pl-34 md:px-14 px-4 lg:py-10 py-16 tracking-tight">
      <div className="overflow-hidden w-max flex items-center h-27">
        <h1 ref={text1Ref} className="flex items-center gap-6">
          <span className="text1">We </span>
          <span className="text1">area </span>
          <span className="text1">a </span>
          <span className="text1">digital</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div ref={videoRef} className="w-36 h-24 rounded-full overflow-hidden md:flex hidden">
          <video src="/videos/herovideo.mp4" muted autoPlay loop></video>
        </div>
        <div className="flex items-center w-max overflow-hidden h-27">
          <div className="flex items-center gap-10 h-full">
            <div className="text2 flex items-center">
              <Roboto text="design" />
            </div>
            <div className="text2 flex items-center ">
              <h1>and</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-max overflow-hidden  h-27 ">
        <h1 className=" flex items-center gap-6">
          <span className="text3">motion</span><span className="text3">agency</span>
        </h1>
      </div>
      <div className="w-43 h-30 mx-auto rounded-3xl overflow-hidden md:hidden flex">
        <video src="/videos/herovideo.mp4" muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Hero;
