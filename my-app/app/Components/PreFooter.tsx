import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PreFooter = () => {
  const textRef = useRef(null);
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

    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 95%",
      },
    });
    gsap.from(buttonRef.current, {
      y: 150,
      duration: 1.5,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 95%",
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
    <div className="relative w-full lg:h-screen bg-[#000000] text-white flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center">
        <video src="/videos/footer.mp4" muted autoPlay loop></video>
      </div>
      <div className="relative z-10 flex flex-col items-center lg:gap-8 gap-6 text-center lg:text-8xl md:text-6xl text-5xl font-normal">
        <div ref={textRef} className="md:pt-24">
          <p>
            Have
            <br /> An Idea?
          </p>
        </div>
        <button
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-center w-65 md:w-75 lg:w-115 h-20 lg:h-28 relative group border border-white rounded-full overflow-hidden"
        >
          <div className="relative lg:h-24 md:h-14 h-11 w-full z-10 overflow-hidden">
            <p
              ref={topTextRef}
              className="absolute lg:right- md:right- right-8  text-white"
            >
              TELL US
            </p>
            <p
              ref={bottomTextRef}
              className="absolute lg:right- md:right- right-8 text-black"
            >
              TELL US
            </p>
          </div>
          <div className="absolute left-0 bottom-[-100%] bg-white w-full  h-full rounded-[50%] group-hover:rounded-none group-hover:bottom-0 transition-all duration-450"></div>
        </button>
      </div>
    </div>
  );
};

export default PreFooter;
