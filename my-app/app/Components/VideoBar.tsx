import React from "react";

const VideoBar = () => {
  return (
    <div className="lg:w-full md:w-[85%] w-[90%] lg:min-h-screen md:h-[40vh] h-[55vh] relative lg:rounded-none rounded-3xl overflow-hidden lg:mx-0 mx-auto ">
      <video
        src="/videos/videobar.mp4"
        className="object-cover lg:relative absolute w-full h-full top-0 left-0 "
        muted
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default VideoBar;
