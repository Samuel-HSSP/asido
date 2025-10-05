"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className="custom-cursor lg:flex hidden" />;
};