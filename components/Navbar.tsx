"use client";

import Link from "next/link";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import NavbarMobile from "@/components/NavbarMobile";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <nav className="px-8 sm:px-0 dark:bg-gray-900 sm:backdrop-blur-2xl sm:dark:bg-transparent bg-white transition-all duration-200 shadow-lg dark:shadow-gray-800 sticky top-0 z-50 overflow-hidden">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="grid grid-cols-3 items-center justify-items-center w-full">
            <div className="col-span-1 me-auto">
              <NavbarMobile />

              <Link href="/" className="hidden sm:block">
                <Image
                  src="/mar_logo.svg"
                  alt="Logo"
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
                  width={75}
                  height={24}
                  priority
                />
              </Link>
              <div className="space-x-4 justify-center hidden sm:flex">
                <Link
                  href="/"
                  className={`text-gray-900 px-3 py-2 rounded-md text-lg font-semibold ${
                    activePath === "/"
                      ? "text-primary dark:text-primary"
                      : "hover:text-primary dark:hover:text-primary"
                  } dark:text-white transition-all duration-200`}
                >
                  Home
                </Link>

                <Link
                  href="/projects"
                  className={`text-gray-900 px-3 py-2 rounded-md text-lg font-semibold ${
                    activePath === "/projects"
                      ? "text-primary dark:text-primary"
                      : "hover:text-primary dark:hover:text-primary dark:text-white"
                  } transition-all duration-200`}
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className={`text-gray-900 px-3 py-2 rounded-md text-lg font-semibold ${
                    activePath === "/about"
                      ? "text-primary dark:text-primary"
                      : "hover:text-primary dark:hover:text-primary dark:text-white"
                  } transition-all duration-200`}
                >
                  About
                </Link>
                <Link
                  href="/games"
                  className={`text-gray-900 px-3 py-2 rounded-md text-lg font-semibold ${
                    activePath.includes("/games")
                      ? "text-primary dark:text-primary"
                      : "hover:text-primary dark:hover:text-primary dark:text-white"
                  } transition-all duration-200`}
                >
                  Games
                </Link>
                <Link
                  href="/gallery"
                  className={`text-gray-900 px-3 py-2 rounded-md text-lg font-semibold ${
                    activePath === "/gallery"
                      ? "text-primary dark:text-primary"
                      : "hover:text-primary dark:hover:text-primary dark:text-white"
                  } transition-all duration-200`}
                >
                  Gallery
                </Link>
              </div>
            </div>
            <div className="col-span-1 ms-auto hidden sm:block">
              <div className="flex gap-4">
                <Link
                  href="https://github.com/marmdhn?tab=repositories"
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
