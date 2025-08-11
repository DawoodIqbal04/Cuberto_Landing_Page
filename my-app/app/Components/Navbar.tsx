import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  useGSAP(() => {
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

  return (
    <div className="relative w-full h-20 flex items-center justify-between px-6 lg:px-8 md:px-14 text-black">
      <div ref={logoRef}>
        <Image
          src="/images/logo.svg"
          alt="Cuberto Logo"
          width={75}
          height={40}
        />
      </div>
      <div className="flex items-center gap-3.5">
        <div
          className={`mr-10 font-medium lg:flex hidden overflow-hidden w-max h-max`}
        >
          <p ref={menuRef}>menu</p>
        </div>
        <div
          ref={burgerRef}
          className="flex flex-col items-center lg:gap-[2.5px] gap-1.5 fixed lg:right-10 md:right-14 right-8 z-50"
        >
          <span className="h-0.5 lg:w-5 w-7 backdrop-invert"></span>
          <span className="h-0.5 lg:w-5 w-7 backdrop-invert"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
