"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaPlay, FaVideo } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3"});
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3"});

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX - cursor.offsetWidth / 2);
      yTo(e.clientY - cursor.offsetHeight / 2);
    };

    window.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll("a, button, .cursor-hover");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 3, duration: 0.2, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.2, ease: "power2.out" });
      });
    });

    const videobar = document.querySelector('.videobar')

    videobar?.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 10,
            duration: 0.2,
            backgroundColor: 'white',
            ease: 'power2.out'
        })
        gsap.to('.icon', {
          display: 'block',
          duration: 0.2,
          ease: 'power2'
        })
    })
    videobar?.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.2,
            backgroundColor: 'transparent',
            ease: 'power2.out'
        })
        gsap.to('.icon', {
          display: 'hidden',
          duration: 0.2,
          ease: 'power2'
        })
    })

    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 0, duration: 0.2, ease: "power2.out" });
    });

    document.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 1, duration: 0.2, ease: "power2.out" });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed flex items-center justify-center text-2xl text-black font-medium top-0 left-0 w-2 h-2 backdrop-invert rounded-full pointer-events-none z-[9999]"
    >
      <IoPlayOutline className="icon translate-x-[-0.3px] translate-y-[-0.3px] hidden" size={2} />
    </div>
  );
}
