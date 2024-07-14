"use client";

import Link from "next/link";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import NavbarMobile from "@/components/NavbarMobile";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  useEffect(() => {
    setActivePath(pathname);
    console.log(pathname);
  }, [pathname]);

  return (
    <nav className="px-8 sm:px-0 backdrop-blur-2xl dark:bg-transparent from-inherit bg-white transition-all duration-200 shadow-lg sticky top-0 z-50 overflow-hidden">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="grid grid-cols-3 items-center justify-items-center w-full">
            <div className="col-span-1 me-auto hover:scale-90 transition-all duration-200">
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
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-x-4 justify-center hidden sm:flex"
              >
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
              </motion.div>
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
