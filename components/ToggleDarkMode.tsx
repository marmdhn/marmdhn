"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = window.localStorage.getItem("darkMode");
    setIsDarkMode(savedMode ? JSON.parse(savedMode) : false);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (isDarkMode) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    window.localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-gray-800 transition-all duration-200 dark:text-white hover:scale-150 hover:text-gray-400 dark:hover:text-gray-400"
    >
      {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default ToggleDarkMode;
