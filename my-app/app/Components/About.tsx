import React from "react";

const About = () => {
  return (
    <div className={`font-medium w-full min-h-screen flex items-center text-black px-40 py-40`}>
      <div className="w-1/2">
        <video className="w-[90%]" src="/about.mp4" muted autoPlay loop></video>
      </div>
      <div className="w-1/2 flex flex-col items-start gap-12">
        <div className="text-[28px] leading-7.5 tracking-">
          <p>
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </p>
        </div>

        <button className="w-96 h-44  border border-black rounded-full text-[28px]"><p>What we do</p></button>
      </div>
    </div>
  );
};

export default About;
