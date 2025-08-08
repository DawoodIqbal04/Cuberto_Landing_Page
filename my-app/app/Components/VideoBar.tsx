import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const VideoBar = () => {

  const vidbarRef = useRef(null)

  useGSAP(() => {
    gsap.from(vidbarRef.current, {
      y: 200,
      duration: 1.5,
      delay: 1.2,
      opacity: 0,
      scale: 0.8,
      ease: 'expo.out'
    })
  }, [])

  return (
    <div className="lg:w-full md:w-[85%] w-[90%] lg:min-h-screen md:h-[40vh] h-[55vh] relative lg:rounded-none rounded-3xl overflow-hidden lg:mx-0 mx-auto ">
      <video
        ref={vidbarRef}
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
