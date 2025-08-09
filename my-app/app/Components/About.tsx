import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const vidRef = useRef(null);
  const textRef = useRef(null);
  const topTextRef = useRef(null)
  const bottomTextRef = useRef(null)
  const buttonRef = useRef(null)
  const tl = useRef<gsap.core.Timeline>(null)

  useGSAP(() => {

    gsap.set(topTextRef.current, { y: "0%" });
    gsap.set(bottomTextRef.current, { y: "100%" });

    tl.current = gsap.timeline({ paused: true })
      .to(topTextRef.current, {
        y: "-100%",
        duration: 0.4,
        ease: "power2.inOut",
      }, 0)
      .to(bottomTextRef.current, {
        y: "0%",
        duration: 0.3,
        ease: "power2.inOut",
      }, 0)
      .to(buttonRef.current, {
        scale: 1.03,
        duration: 0.5,
        delay: -0.5,
        ease: 'power2.inOut'
      })

    gsap.from(vidRef.current, {
      scale: 0,
      opacity: 0.5,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 30%",
      },
    });
    gsap.from(textRef.current, {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 30%",
      },
    });
    gsap.from(buttonRef.current, {
      y: 150,
      duration: 1.5,
      opacity: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.about',
        start: 'top 30%'
      }
    })
  }, []);
  
    const handleMouseEnter= () => {
      tl.current?.play()
    }
    const handleMouseLeave= () => {
      tl.current?.reverse()
    }

  return (
    <div
      className={`about font-medium w-full min-h-screen flex lg:flex-row flex-col lg:gap- gap-10 items-center lg:justify-normal justify-center text-black lg:px-40 md:px-14 px-6 lg:py-40`}
    >
      <div className="lg:w-1/2 md:w-[70%] w-full flex ">
        <video
          ref={vidRef}
          className="w-[90%]"
          src="/videos/about.mp4"
          muted
          autoPlay
          loop
        ></video>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center gap-12 lg:text-[28px] text-2xl">
        <div className=" leading-7.5 tracking-">
          <p ref={textRef}>
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </p>
        </div>
        <button ref={buttonRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="lg:w-full md:w-[70%] w-full h-24 relative group border border-black rounded-full overflow-hidden">
          <div className="relative h-8 text-center lg:text- md:text-3xl z-10 overflow-hidden">
            <p ref={topTextRef} className="absolute lg:right-[32%] md:right-40 right-25 ">What we do</p>
            <p ref={bottomTextRef} className="absolute lg:right-[32%] md:right-40 right-25 text-white ">What we do</p>
          </div>
          <div className="absolute left-0 bottom-[-100%] bg-black w-full  h-full rounded-[50%] group-hover:rounded-none group-hover:bottom-0 transition-all duration-450"></div>
        </button>
      </div>
    </div>
  );
};

export default About;
