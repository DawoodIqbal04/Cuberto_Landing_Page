"use client";

import Image from "next/image";
import React from "react";
import { useRef } from "react";

const ProjectsCard = ({
  height,
  medHeight,
  url,
  heading,
  title,
  coverImage,
  headingSize,
}: {
  height: number;
  medHeight: number;
  url: string;
  heading: string;
  title: string;
  coverImage: string;
  headingSize?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`w-100 flex flex-col gap-5 cursor-pointer group px-6`}>
      <div
        className={`lg:w-full md:w-[80%] lg:h-${height} md:h-${medHeight}  overflow-hidden relative lg:rounded-3xl md:rounded-2xl rounded-3xl`}
      >
        <video ref={videoRef} src={url} autoPlay muted loop></video>
        <Image
          src={coverImage}
          width={650}
          height={450}
          alt="project cover"
          className="md:block hidden absolute inset-0 wull h-full object-cover transition-all duration-400 ease-in-out
                   scale-100 opacity-100 group-hover:scale-110 group-hover:opacity-0 pointer-events-none"
        />
      </div>
      <div className="w-[80%] flex min-h-20 text-[19px] gap-4 ">
        <p className="lg:tracking-wider">
          <span className={`w-max font-bold text-${headingSize} `}>
            {heading}
          </span>{" "}
          - {title}{" "}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
