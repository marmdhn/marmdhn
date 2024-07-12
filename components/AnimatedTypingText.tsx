"use client";

import { TypeAnimation } from "react-type-animation";

const AnimatedTypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Front End Developer",
        1000,
        "Web Designer",
        2000,
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="text-xl font-bold text-gray-800 dark:text-white"
    />
  );
};

export default AnimatedTypingText;
