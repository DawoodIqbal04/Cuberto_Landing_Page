import React, { useRef } from "react";
import Roboto from "./Roboto";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Philosophy = () => {
  
  const paragraphsRef = useRef<HTMLParagraphElement[]>([]);
  const videoRef = useRef(null)
  const parentRef = useRef(null);

  const addToRefs = (el: HTMLParagraphElement | null) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const splits: SplitText[] = []

    paragraphsRef.current.forEach((p) => {

      const split = new SplitText(p, { type: "lines" });
      splits.push(split);

      gsap.from(split.lines, {
          scrollTrigger: {
            trigger: p,
            start: "top 80%"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        });
    })

    gsap.from(".philhead", {
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 80%",
      },
    });
    gsap.from(videoRef.current, {
      scale: 0,
      opacity: 0.5,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top 80%'
      }
    })

    return () => {
      splits.forEach((s) => s.revert());
    };

  }, []);

  return (
    <div
      ref={parentRef}
      className="w-full min-h-screen bg-white text-black flex flex-col md:items-start items-center lg:px-34 md:px-14 px-6 lg:py-40 py-20 lg:gap-30 gap-20 lg:rounded-t-[60px] rounded-t-4xl "
    >
      <div className="lg:text-[140px] text-5xl flex flex-col items-start lg:leading-32 lg:mr-0 mr-20">
        <div className="lg:h-30 h-13 w-max overflow-y-hidden">
          <h1 className="philhead tracking-tight font-medium">Our</h1>
        </div>
        <div className="lg:h-36 h-13 lg:w-182 w-67 overflow-y-hidden">
          <div className="philhead w-full h-full">
            <Roboto text="philosophy" />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-col items-center lg:pr-20 gap-5 lg:pl-24">
        <div ref={videoRef} className="w-1/2 md:block hidden">
          <video src="/videos/philosophyvideo.mp4" autoPlay muted loop></video>
        </div>
        <div
          className={` text-xl lg:w-1/2 lg:font-normal font-medium tracking-wide lg:leading-5.5 leading-6.5 flex flex-col gap-5`}
        >
          <p ref={addToRefs}>
            In our team, developers work alongside designers, strategists and
            analysts. Cuberto doesn't do cookie-cutter solutions and we build
            products exactly as they were during the design phase, no short cuts
            or simplifications.
          </p>
          <p ref={addToRefs}>
            We're driven by user‑centered design that drives productivity and
            increases revenue. Our expertise and ingenuity are remarkable, yet
            we always strive to outdo and outperform our previous achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
