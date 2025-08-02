import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative w-full h-20 flex items-center justify-between px-4 md:px-8 lg:px-10 text-black">
      <div>
        <Image src="/logo.svg" alt="Cuberto Logo" width={75} height={40} />
      </div>
      <div className="flex items-center gap-3.5">
        <div className={`mr-10 font-medium lg:flex hidden`}>menu</div>
        <div className="flex flex-col items-center lg:gap-[2.5px] gap-1.5 fixed lg:right-10 right-5 z-50">
          <span className="h-0.5 lg:w-5 w-7 backdrop-invert"></span>
          <span className="h-0.5 lg:w-5 w-7 backdrop-invert"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
