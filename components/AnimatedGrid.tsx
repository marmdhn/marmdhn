"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

const AnimatedGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    anime({
      targets: ".grid-box",
      scale: [
        { value: 0.1, easing: "easeInOutQuad", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      rotate: "1turn",
      backgroundColor: [
        { value: "#FF8A00", easing: "easeInOutQuad", duration: 500 },
        { value: "#4ADE80", easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(200, { grid: [6, 6], from: "center" }),
      loop: true,
    });
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-6 gap-1 p-4">
      {Array.from({ length: 36 }).map((_, index) => (
        <div
          key={index}
          className="grid-box w-10 h-10 bg-blue-500 flex items-center justify-center text-white text-lg font-bold"
        />
      ))}
    </div>
  );
};

export default AnimatedGrid;
