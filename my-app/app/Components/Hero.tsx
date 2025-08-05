import React from "react";
import Roboto from "./Roboto";

const Hero = () => {
  let tilt = "design".split("");

  return (
    <div className="w-full lg:h-[calc(100vh-130px)] lg:font-medium font-semibold flex flex-col gap-5 text-black lg:text-8xl text-[46px] lg:leading-16 leading-tight lg:pl-34 px-4 py-16 tracking-tight">
      <div>
        <h1>We are a digital</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-36 h-24 rounded-full overflow-hidden lg:flex hidden">
          <video src="/videos/herovideo.mp4" muted autoPlay loop></video>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <Roboto text="design" />
          </div>
          and
        </div>
      </div>
      <div>motion agency</div>
      <div className="w-43 h-30 mx-auto rounded-3xl overflow-hidden lg:hidden flex">
        <video src="/videos/herovideo.mp4" muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Hero;
