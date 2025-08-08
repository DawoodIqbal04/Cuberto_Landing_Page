import React from "react";

const PreFooter = () => {
  return (
    <div className="relative w-full lg:h-screen bg-[#000000] text-white flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center">
        <video src="/videos/footer.mp4" muted autoPlay loop></video>
      </div>
      <div className="relative z-10 flex flex-col items-center lg:gap-8 gap-6 text-center lg:text-8xl md:text-6xl text-5xl font-normal">
        <div className="md:pt-24">
          <p>
            Have
            <br /> An Idea?
          </p>
        </div>
        <div className="w-max px-4 lg:px-8 h-20 lg:h-28 border border-white rounded-full flex items-center justify-center">
          <p>TELL US</p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
