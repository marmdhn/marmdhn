"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleDarkMode = ({ iconSize }: { iconSize?: number }) => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-gray-800 transition-all duration-200 dark:text-white hover:scale-125 hover:text-gray-400 dark:hover:text-gray-400"
    >
      {isDarkMode ? (
        <MdDarkMode size={iconSize} />
      ) : (
        <MdLightMode size={iconSize} />
      )}
    </button>
  );
};

export default ToggleDarkMode;
