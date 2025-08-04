import React from "react";
import Roboto from "./Roboto";
import ProjectsCard from "./ProjectsCard";
import Philosophy from "./Philosophy";

const Projects = () => {
  let urls = [
    "/project1.mp4",
    "/project2.mp4",
    "/project3.mp4",
    "/project4.mp4",
    "/project5.mp4",
    "/project6.mp4",
    "/project7.mp4",
    "/project8.mp4",
    "/project9.mp4",
    "/project10.mp4",
    "/project11.mp4",
  ];

  let coverImages = [
    "/projectcover1.jpg",
    "/projectcover2.jpg",
    "/projectcover3.jpg",
    "/projectcover4.jpg",
    "/projectcover5.jpg",
    "/projectcover6.jpg",
    "/projectcover7.jpg",
    "/projectcover8.jpg",
    "/projectcover9.jpg",
    "/projectcover10.jpg",
    "/projectcover11.jpg",
  ];

  let headings = [
    "Punto Pago",
    "DaoWay",
    "Riyadh",
    "Qvino",
    "Potion",
    "Cisco",
    "Kelvin Zero",
    "Magma",
    "FlipaClip",
    "Zelt",
    "Ferrum Pipe",
  ];

  let titles = [
    "The First Super-App In Latin America",
    "Astrology planner app: plan, achieve, thrive",
    "Official website of Riyadh, Saudi Arabia`s capital",
    "Wine marketplace with interactive learning",
    "Sales tool for increasing conversions",
    "Cloud based network management",
    "A digital product for passwordless authentication",
    "The ultimate tool for building in the Web3 era",
    "The best tool for stop-motion animation",
    "Run HR, IT & Finance in one place",
    "Galvanized steel metal frame manufacturer",
  ];

  return (
    <div className="w-full min-h-screen text-white bg-[#1a1a1a] lg:rounded-t-[60px] rounded-4xl tracking-tighter lg:px-0">
      <div className="lg:pt-24 pt-20 lg:pl-34 lg:pb-28 px-4">
        <div className="lg:text-[123px] text-5xl lg:flex hidden flex-col items-start lg:leading-32 ">
          <div className="font-medium">
            <h1>Featured</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-46 h-30 rounded-full bg-white overflow-hidden">
              <video src="/feature.mp4" autoPlay muted loop></video>
            </div>
            <div>
              <Roboto text="projects" />
            </div>
          </div>
        </div>
        <div className="text-5xl lg:hidden flex items-center gap-5">
          <div className=" flex flex-col items-start">
            <h1>Featured</h1>
            <Roboto text="projects" />
          </div>
            <div className="w-30 h-20 rounded-full bg-white overflow-hidden">
              <video src="/feature.mp4" autoPlay muted loop></video>
            </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-12 lg:pt-38 pt-20">
          <div className="flex flex-col items-center gap-14">
            <div>
              <ProjectsCard
                height="135"
                url={urls[0]}
                heading={headings[0]}
                title={titles[0]}
                coverImage={coverImages[0]}
              />
            </div>
            <div>
              <ProjectsCard
                height="100"
                url={urls[1]}
                heading={headings[1]}
                title={titles[1]}
                coverImage={coverImages[1]}
              />
            </div>
            <div>
              <ProjectsCard
                height="100"
                url={urls[2]}
                heading={headings[2]}
                title={titles[2]}
                coverImage={coverImages[2]}
              />
            </div>
            <div>
              <ProjectsCard
                height="135"
                url={urls[3]}
                heading={headings[3]}
                title={titles[3]}
                coverImage={coverImages[3]}
              />
            </div>
            <div>
              <ProjectsCard
                height="100"
                url={urls[4]}
                heading={headings[4]}
                title={titles[4]}
                coverImage={coverImages[4]}
              />
            </div>
            <div>
              <ProjectsCard
                height="100"
                url={urls[5]}
                heading={headings[5]}
                title={titles[5]}
                coverImage={coverImages[5]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-14 lg:pt-70">
            <div>
              <ProjectsCard
                height="135"
                url={urls[6]}
                heading={headings[6]}
                title={titles[6]}
                coverImage={coverImages[6]}
              />
            </div>
            <div>
              <ProjectsCard
                height="135"
                url={urls[7]}
                heading={headings[7]}
                title={titles[7]}
                coverImage={coverImages[7]}
              />
            </div>
            <div>
              <ProjectsCard
                height="100"
                url={urls[8]}
                heading={headings[8]}
                title={titles[8]}
                coverImage={coverImages[8]}
              />
            </div>
            <div>
              <ProjectsCard
                height="135"
                url={urls[9]}
                heading={headings[9]}
                title={titles[9]}
                coverImage={coverImages[9]}
              />
            </div>
            <div>
              <ProjectsCard
                height="100"
                url={urls[10]}
                heading={headings[10]}
                title={titles[10]}
                coverImage={coverImages[10]}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Philosophy />
      </div>
    </div>
  );
};

export default Projects;
