"use client";
import React from "react";

export default function CircularText() {
  return (
    <div className="fixed lg:block hidden bottom-6 right-6 w-35 h-35 z-40 text-neutral-400">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text className="fill-current" fontSize="14" fontWeight="bold">
          <textPath href="#circlePath" className="tracking-[0.24em]" startOffset="1">
            Development - Design - Motion - Branding - 
          </textPath>
        </text>
      </svg>
      <div className="-mt-28.5 ml-6.5 w-22 h-22"><video src="/videos/fixvideo.mp4" className="w-full h-full rounded-full" muted autoPlay loop></video></div>
    </div>
  );
}
