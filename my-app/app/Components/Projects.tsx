import React, { useRef } from "react";
import Roboto from "./Roboto";
import ProjectsCard from "./ProjectsCard";
import Philosophy from "./Philosophy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const parentRef = useRef(null);
  const vidRef = useRef(null)
  const subParentRef1 = useRef(null)
  const subParentRef2 = useRef(null)

  const itemsRef = useRef<HTMLDivElement[]>([])

  const cardRef = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(parentRef.current, {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 110%",
      },
    });
    gsap.from(".prohead", {
      y: 100,
      duration: 1.5,
      delay: 0.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top 100%",
      },
    });
    gsap.from('.provid', {
      scale: 0,
      duration: 1.5,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: parentRef.current,
        start: 'top 100%',
      }
    })
    itemsRef.current.forEach((item) => {

      gsap.from(item, {
        y: 130,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 100%',
        }
      })
    })
  }, []);

  let urls = [
    "/videos/project1.mp4",
    "/videos/project2.mp4",
    "/videos/project3.mp4",
    "/videos/project4.mp4",
    "/videos/project5.mp4",
    "/videos/project6.mp4",
    "/videos/project7.mp4",
    "/videos/project8.mp4",
    "/videos/project9.mp4",
    "/videos/project10.mp4",
    "/videos/project11.mp4",
  ];

  let coverImages = [
    "/images/projectcover1.jpg",
    "/images/projectcover2.jpg",
    "/images/projectcover3.jpg",
    "/images/projectcover4.jpg",
    "/images/projectcover5.jpg",
    "/images/projectcover6.jpg",
    "/images/projectcover7.jpg",
    "/images/projectcover8.jpg",
    "/images/projectcover9.jpg",
    "/images/projectcover10.jpg",
    "/images/projectcover11.jpg",
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
    <div
      ref={parentRef}
      className="w-full min-h-screen text-white bg-[#1a1a1a] lg:rounded-t-[60px] rounded-t-4xl tracking-tighter lg:px-0"
    >
      <div className="md:pt-24 py-20 lg:pl-34 md:pl-24 lg:pb-28 px-6">
        <div className="lg:text-[123px] md:text-6xl text-5xl lg:flex hidden flex-col items-start lg:leading-32 ">
          <div className="font-medium w-max h-28 overflow-hidden">
            <h1 className="prohead ">Featured</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="provid w-46 h-30 rounded-full bg-white overflow-hidden">
              <video src="/videos/feature.mp4" autoPlay muted loop></video>
            </div>
            <div className=" h-35 w-120 pl-0.5 overflow-hidden">
              <div className="prohead w-full h-full">

              <Roboto text="projects" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-5xl lg:hidden flex items-center gap-5">
          <div className=" flex flex-col items-start">
            <div className="h-13 w-max overflow-hidden">
              <h1 className="prohead">Featured</h1>
            </div>
            <div className="h-13 w-50 overflow-hidden">
              <div className="prohead w-full h-full">
                <Roboto text="projects" />
              </div>
            </div>
          </div>
          <div className="provid w-30 h-18 md:w-40 md:h-24 rounded-full bg-white overflow-hidden">
            <video src="/videos/feature.mp4" autoPlay muted loop></video>
          </div>
        </div>
        <div className="flex md:flex-row flex-col lg:gap-12 md:gap-0 gap-12 md:pt-38 pt-20">
          <div ref={subParentRef1} className="flex flex-col items-center gap-14">
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={135}
                medHeight={115}
                url={urls[0]}
                heading={headings[0]}
                title={titles[0]}
                coverImage={coverImages[0]}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={100}
                medHeight={80}
                url={urls[1]}
                heading={headings[1]}
                title={titles[1]}
                coverImage={coverImages[1]}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={100}
                medHeight={80}
                url={urls[2]}
                heading={headings[2]}
                title={titles[2]}
                coverImage={coverImages[2]}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={135}
                medHeight={115}
                url={urls[3]}
                heading={headings[3]}
                title={titles[3]}
                coverImage={coverImages[3]}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={100}
                medHeight={80}
                url={urls[4]}
                heading={headings[4]}
                title={titles[4]}
                coverImage={coverImages[4]}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={100}
                medHeight={80}
                url={urls[5]}
                heading={headings[5]}
                title={titles[5]}
                coverImage={coverImages[5]}
              />
            </div>
          </div>
          <div ref={subParentRef2} className="flex flex-col items-center gap-14 lg:pt-70 md:pt-40 lg:ml-0 md:-ml-20">
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={135}
                medHeight={115}
                url={urls[6]}
                heading={headings[6]}
                title={titles[6]}
                coverImage={coverImages[6]}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={135}
                medHeight={115}
                url={urls[7]}
                heading={headings[7]}
                title={titles[7]}
                coverImage={coverImages[7]}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={100}
                medHeight={80}
                url={urls[8]}
                heading={headings[8]}
                title={titles[8]}
                coverImage={coverImages[8]}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={135}
                medHeight={115}
                url={urls[9]}
                heading={headings[9]}
                title={titles[9]}
                coverImage={coverImages[9]}
              />
            </div>
            <div ref={cardRef} className="procard">
              <ProjectsCard
                height={100}
                medHeight={80}
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
