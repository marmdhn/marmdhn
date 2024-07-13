"use client";

import Link from "next/link";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import { FaGithub } from "react-icons/fa6";
import classNames from "classnames";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <nav className="px-8 sm:px-0 backdrop-blur-2xl dark:bg-transparent from-inherit bg-white transition-all duration-200 shadow-lg dark:shadow-none sticky top-0">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="grid grid-cols-3 items-center justify-items-center w-full">
            <div className="col-span-1 me-auto hover:scale-90 transition-all duration-200">
              <div
                className={classNames(
                  `tham tham-e-squeeze tham-w-6 sm:hidden`,
                  {
                    "tham-active": opened,
                  },
                )}
                onClick={toggleMenu}
              >
                <div className="tham-box">
                  <div className="tham-inner" />
                </div>
              </div>

              <Link href="/" className="hidden sm:block">
                <Image
                  src="/mar_logo.svg"
                  alt="Logo"
                  className="dark:invert"
                  width={75}
                  height={24}
                  priority
                />
              </Link>
            </div>
            <div className="col-span-1">
              <Link href="/" className="sm:hidden">
                <Image
                  src="/mar_logo.svg"
                  alt="Logo"
                  className="dark:invert"
                  width={75}
                  height={24}
                  priority
                />
              </Link>
              <div className="space-x-4 justify-center hidden sm:flex">
                <Link
                  href="/"
                  className="text-gray-900 px-3 py-2 rounded-md text-lg font-semibold hover:text-primary dark:hover:text-primary dark:text-white transition-all duration-200"
                >
                  Home
                </Link>

                <Link
                  href="/projects"
                  className="text-gray-900 px-3 py-2 rounded-md text-lg font-semibold hover:text-primary dark:hover:text-primary dark:text-white transition-all duration-200"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 px-3 py-2 rounded-md text-lg font-semibold hover:text-primary dark:hover:text-primary dark:text-white transition-all duration-200"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="col-span-1 ms-auto hidden sm:block">
              <div className="flex gap-4">
                <Link
                  href="https://github.com/makbarramadhan62?tab=repositories"
                  target="_blank"
                >
                  <FaGithub
                    size={24}
                    className="text-gray-800 transition-all duration-200 dark:text-white hover:scale-125 hover:text-gray-400 dark:hover:text-gray-400"
                  />
                </Link>
                <ToggleDarkMode iconSize={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
