"use client";

import Image from "next/image";
import React from "react";
import { useRef } from "react";

const ProjectsCard = ({
  height,
  url,
  heading,
  title,
  coverImage,
  headingSize
}: {
  height: string;
  url: string;
  heading: string;
  title: string;
  coverImage: string;
  headingSize?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`w-100 flex flex-col gap-5 cursor-pointer group`}>
      <div
        className={`w-full h-${height} bg-white overflow-hidden relative rounded-4xl`}
      >
        <video ref={videoRef} src={url} autoPlay muted loop></video>
        <Image
          src={coverImage}
          width={600}
          height={400}
          alt="project cover"
          className="absolute inset-0 wull h-full object-cover transition-all duration-400 ease-in-out
                   scale-100 opacity-100 group-hover:scale-110 group-hover:opacity-0 pointer-events-none"
        />
      </div>
      <div className="w-[80%] flex min-h-20 text-[19px] gap-4 ">
        <p className="tracking-wider">
          <span className={`w-max font-bold text-${headingSize} `} >{heading}</span> - {title}{" "}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
