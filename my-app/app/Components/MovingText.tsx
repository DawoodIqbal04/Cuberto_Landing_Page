"use client";

import React from "react";
import Roboto from "./Roboto";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MovingText = () => {
  const firsttextRef = useRef(null);
  const secondtextRef = useRef(null);
  const sliderRef = useRef(null);
  let xpercent = 0;
  let direction = 1;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: "bottom -100%",
        scrub: 0.1,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xpercent <= -100) {
      xpercent = 0;
    }
    if (xpercent > 0) {
      xpercent = -100;
    }
    gsap.set(firsttextRef.current, { xPercent: xpercent });
    gsap.set(secondtextRef.current, { xPercent: xpercent });
    xpercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="w-full overflow-x-hidden absolute top-[calc(100vh - 300px)] bg-white text-black">
      <div
        ref={sliderRef}
        className="flex items-center relative lg:min-w-[330vw] w-[2250vw] lg:text-[160px] text-7xl "
      >
        <div
          ref={firsttextRef}
          className="flex items-center lg:gap-15 gap-10 pl-15"
        >
          <h1 className="flex font-medium">
            New Day ― <Roboto text="        New            Inspo" />
          </h1>
          <div className="lg:w-54 w-34 lg:h-34 h-22 rounded-full bg-white overflow-hidden">
            <video src="/videos/inspo.mp4" autoPlay muted loop></video>
          </div>
        </div>
        <div
          ref={secondtextRef}
          className="flex items-center lg:gap-15 gap-10 absolute lg:left-525 left-266"
        >
          <h1 className="flex font-medium">
            New Day ― <Roboto text="        New            Inspo" />
          </h1>
          <div className="lg:w-54 w-34 lg:h-34 h-22 rounded-full bg-white overflow-hidden">
            <video src="/videos/inspo.mp4" autoPlay muted loop></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
