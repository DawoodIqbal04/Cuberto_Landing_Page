import React, { useRef } from "react";
import Roboto from "./Roboto";
import ProjectsCard from "./ProjectsCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Projects = () => {
  const parentRef = useRef(null);
  const paragraphRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const buttonRef = useRef(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const tl = useRef<gsap.core.Timeline>(null);

  const cardRef = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

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

    const split = new SplitText(paragraphRef.current, { type: "lines" });

    gsap.from(parentRef.current, {
      y: 200,
      duration: 1.5,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 100%",
      },
    });
    gsap.from(".serhead", {
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 90%",
      },
    });
    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 100%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });
    itemsRef.current.forEach((item) => {
      gsap.from(item, {
        y: 130,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 100%",
        },
      });
    });
    gsap.from(buttonRef.current, {
      y: 150,
      duration: 1.5,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: buttonRef.current,
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

  const urls = [
    "/videos/service1.mp4",
    "/videos/service2.mp4",
    "/videos/service3.mp4",
  ];

  const coverImages = [
    "/images/serviceimage1.png",
    "/images/serviceimage2.png",
    "/images/serviceimage3.png",
  ];

  const headings = [
    "Brand Identity",
    "AI-enhanced UI/UX design",
    "Custom development",
  ];

  const titles = [
    "Strategic design that positions AI products for trust and clarity.",
    "Interfaces that adapt, predict, and respond intelligently.",
    "Frontend + backend + AI integrations — built for performance and scalability.",
  ];

  return (
    <div
      ref={parentRef}
      className="w-full min-h-screen text-white bg-[#000000] lg:rounded-t-[60px] rounded-t-4xl tracking-tighter md:px-30 lg:px-0 px-6 "
    >
      <div className="flex flex-col items-center lg:py-40 py-20">
        <div className="flex flex-col items-start lg:gap-30 gap-16">
          <div className="lg:text-[123px] text-5xl flex flex-col items-start lg:leading-24 lg:mr-120">
            <div className="font-medium w-max overflow-hidden">
              <h1 className="serhead">Our</h1>
            </div>
            <div className="tracking-wide lg:w-125 w-55 overflow-hidden">
              <div className="serhead w-full ">
                <Roboto text="services" />
              </div>
            </div>
          </div>
          <div className="text-[20px] leading-8 font-thin tracking-wide lg:w-[40%]">
            <h1 ref={paragraphRef}>
              From motion design to AI-powered products — we design and build
              interfaces for the future.
            </h1>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-12 md:gap-0 lg:gap-12 pt-26 md:pt-50 lg:pt-26">
          <div className="flex flex-col items-center gap-14 md:ml-18">
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={135}
                medHeight={135}
                url={urls[0]}
                heading={headings[0]}
                title={titles[0]}
                coverImage={coverImages[0]}
                headingSize={"xl"}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-14 md:-mt-30">
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={100}
                medHeight={100}
                url={urls[1]}
                heading={headings[1]}
                title={titles[1]}
                coverImage={coverImages[1]}
                headingSize={"xl"}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={100}
                medHeight={100}
                url={urls[2]}
                heading={headings[2]}
                title={titles[2]}
                coverImage={coverImages[2]}
                headingSize={"xl"}
              />
            </div>
          </div>
        </div>
        <div className=" lg:mx-[30%] pt-20">
          <button
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center justify-center lg:w-60 lg:h-18 h-20 w-86 relative group border border-white rounded-full overflow-hidden"
          >
            <div className="relative h-8 w-full text-xl md:text-3xl lg:text-xl z-10 overflow-hidden">
              <p
                ref={topTextRef}
                className="absolute lg:right-12 md:right-15 right-25 text-white"
              >
                View all services
              </p>
              <p
                ref={bottomTextRef}
                className="absolute lg:right-11 md:right-15 right-24 font-medium text-black"
              >
                View all services
              </p>
            </div>
            <div className="absolute left-0 bottom-[-100%] bg-white w-full  h-full rounded-[50%] group-hover:rounded-none group-hover:bottom-0 transition-all duration-450"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
