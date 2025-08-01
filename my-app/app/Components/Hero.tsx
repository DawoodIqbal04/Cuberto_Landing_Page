import React from "react";
import Roboto from "./Roboto";

const Hero = () => {
  let tilt = "design".split("");

  return (
    <div className="w-full h-[calc(100vh-130px)] font-medium flex flex-col gap-5 text-black text-8xl leading-16 pl-34 py-16 tracking-tight">
      <div>
        <h1>We are a digital</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-36 h-24 rounded-full overflow-hidden">
          <video src="/herovideo.mp4" muted autoPlay loop></video>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <Roboto text="design" />
          </div>
          and
        </div>
      </div>
      <div>motion agency</div>
    </div>
  );
};

export default Hero;