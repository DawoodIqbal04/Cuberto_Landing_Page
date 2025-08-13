"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3"});
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3"});

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
    })
    videobar?.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.2,
            backgroundColor: 'transparent',
            ease: 'power2.out'
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
      className="fixed top-0 left-0 w-2 h-2 backdrop-invert rounded-full pointer-events-none z-[9999]"
    ></div>
  );
}
