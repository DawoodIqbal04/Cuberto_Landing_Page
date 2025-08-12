import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const menuDivRef = useRef(null)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useGSAP(() => {

    const mm = gsap.matchMedia()

    if (!menuDivRef || !overlayRef || !line1 || !line2) return

    tl.current = gsap.timeline({paused: true, reversed: true})
    .to(menuDivRef.current, {
      right: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, 0)
    .to(overlayRef.current, {
      opacity: 0.4,
      duration: 0.4,
      ease: 'power2.out'
    }, 0)
    .to(line1.current, {
      y: 2.5,
      rotate: -45,
      duration: 0.5,
      ease: 'power2.inOut'
    }, 0)
    .to(line2.current, {
      y: -2.5,
      rotate: 45,
      duration: 0.5,
      ease: 'power2.inOut'
    }, 0)


    gsap.from(logoRef.current, {
      scale: 0,
      duration: 1,
      ease: "power1.out",
      delay: 1,
    });

    gsap.from(menuRef.current, {
      y: 50,
      duration: 1,
      ease: "power1.inOut",
      delay: 1,
    });

    gsap.from(burgerRef.current, {
      x: 100,
      duration: 1,
      ease: "power1.inOut",
      delay: 1.3,
    });
  }, []);

  const handleClick = () => {
    const timeline = tl.current;
    if (!timeline) return;

    if (timeline.reversed()) {
      timeline.play();
    } else {
      timeline.reverse();
    }
  };


  return (
    <div className="relative w-full h-20 flex items-center justify-between px-6 lg:px-8 md:px-14 text-black">
      <div className="h-full w-full flex items-center justify-between">

      <div ref={logoRef}>
        <Image
          src="/images/logo.svg"
          alt="Cuberto Logo"
          width={75}
          height={40}
        />
      </div>
      <div 
      onClick={handleClick}
      className="flex items-center gap-4">
        <div
          className={`mr-10 cursor-pointer font-medium lg:flex hidden overflow-hidden w-max h-max`}
        >
          <p ref={menuRef}>menu</p>
        </div>
        <div
          ref={burgerRef}
          className="flex flex-col items-center lg:gap-[2.5px] gap-1.5 fixed lg:right-10 md:right-14 right-6 cursor-pointer z-50"
        >
          <span ref={line1} className="h-0.5 lg:w-5 w-7 backdrop-invert"></span>
          <span ref={line2} className="h-0.5 lg:w-5 w-7 backdrop-invert"></span>
        </div>
      </div>
      </div>
      <div ref={menuDivRef} className="fixed h-screen lg:w-[50vw] md:w-[60vw] w-[100vw] top-0 bg-white z-30 md:right-[-60%] right-[-100%] "></div>
      <div ref={overlayRef} className="fixed h-screen w-[100vw] pointer-events-none top-0 right-0 z-10 bg-black opacity-0 "></div>
    </div>
  );
};

export default Navbar;
