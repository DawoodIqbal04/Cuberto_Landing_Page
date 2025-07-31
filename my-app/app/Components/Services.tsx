import React from "react";
import Roboto from "./Roboto";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  let urls = ["/service1.mp4", "/service2.mp4", "/service3.mp4"];

  let coverImages = [
    "/serviceimage1.png",
    "/serviceimage2.png",
    "/serviceimage3.png",
  ];

  let headings = [
    "Brand Identity",
    "AI-enhanced UI/UX design",
    "Custom development",
  ];

  let titles = [
    "Strategic design that positions AI products for trust and clarity.",
    "Interfaces that adapt, predict, and respond intelligently.",
    "Frontend + backend + AI integrations — built for performance and scalability.",
  ];

  return (
    <div className="w-full min-h-screen text-white bg-[#1A1A1A] rounded-t-[60px] tracking-tighter">
      <div className="flex flex-col items-center py-40">
        <div className="flex flex-col items-start gap-30">
          <div className="text-[123px] flex flex-col items-start leading-24 ">
            <div>
              <h1>Our</h1>
            </div>
            <div className="tracking-wide">
              <Roboto text="services" />
            </div>
          </div>
          <div className="text-[20px] leading-8 font-thin tracking-wide w-[40%]">
            <h1>
              From motion design to AI-powered products — we design and build
              interfaces for the future.
            </h1>
          </div>
        </div>
        <div className="flex gap-12 pt-26">
          <div className="flex flex-col items-center gap-14">
            <div>
              <ProjectsCard
                height="135"
                url={urls[0]}
                heading={headings[0]}
                title={titles[0]}
                coverImage={coverImages[0]}
                headingSize={"xl"}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-14 -mt-30">
            <div>
              <ProjectsCard
                height="100"
                url={urls[1]}
                heading={headings[1]}
                title={titles[1]}
                coverImage={coverImages[1]}
                headingSize={"xl"}
              />
            </div>
            <div>
              <ProjectsCard
                height="100"
                url={urls[2]}
                heading={headings[2]}
                title={titles[2]}
                coverImage={coverImages[2]}
                headingSize={"xl"}
              />
            </div>
          </div>
        </div>
        <div className=" mx-[30%] pt-20">
          <button className="w-60 h-18 border tracking-wide border-white rounded-full text-xl">
            <p>View all services</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
