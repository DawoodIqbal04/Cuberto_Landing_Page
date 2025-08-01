import React from "react";

const About = () => {
  return (
    <div className={`font-medium w-full min-h-screen flex lg:flex-row flex-col lg:gap- gap-10 items-center lg:justify-normal justify-center text-black lg:px-40 px-4  lg:py-40`}>
      <div className="lg:w-1/2 w-full flex ">
        <video className="w-[90%]" src="/about.mp4" muted autoPlay loop></video>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center gap-12 lg:text-[28px] text-2xl">
        <div className=" leading-7.5 tracking-">
          <p>
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </p>
        </div>

        <button className="w-full h-24  border border-black rounded-full"><p>What we do</p></button>
      </div>
    </div>
  );
};

export default About;
