"use client";

import { TypeAnimation } from "react-type-animation";

const AnimatedTypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Front End Developer",
        2000,
        "UI/UX Designer",
        2000,
        "Designer",
        2000,
        "Video Editor",
        2000,
        () => {},
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="text-xl font-bold text-gray-800 dark:text-white text-center"
    />
  );
};

export default AnimatedTypingText;
