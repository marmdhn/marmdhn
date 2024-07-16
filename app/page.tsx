"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedGrid from "@/components/AnimatedGrid";
import AnimatedLogo from "@/components/AnimatedLogo";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPython,
} from "react-icons/fa6";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiNuxtdotjs,
} from "react-icons/si";
import { RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";
import MusicPlayer from "@/components/MusicPlayer";
import AnimatedTypingText from "@/components/AnimatedTypingText";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import { PiFigmaLogoFill } from "react-icons/pi";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24 sm:pt-4 sm:pb-24 md:pt-4 md:pb-24 gap-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-50 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex"
      >
        <div className="lg:hidden fixed font-bold left-0 top-0 flex gap-4 w-full justify-center pb-6 pt-8 backdrop-blur-2xl dark:bg-transparent lg:dark:bg-gray-800/50 lg:static lg:w-auto lg:rounded-xl lg:bg-gray-300/50 lg:p-4 transition-all duration-200">
          <p className="text-gray-800 dark:text-gray-200">Home</p>
          <ToggleDarkMode />
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 justify-center bg-gray-300/50 dark:bg-gray-800/50 w-auto rounded-xl p-4 transition-all duration-200">
            <ToggleDarkMode />
          </div>
          <div className="flex gap-2 justify-center bg-gray-300/50 dark:bg-gray-800/50 w-auto rounded-xl p-4 transition-all duration-200">
            <p className="font-bold text-primary">Home</p>
          </div>
          <Link href="/projects">
            <div className="flex justify-center bg-gray-300/50 dark:bg-gray-800/50 w-auto rounded-xl p-4 transition-all duration-200 hover:scale-110 hover:cursor-pointer">
              <p className="text-gray-800 dark:text-gray-200">Projects</p>
            </div>
          </Link>
          <Link href="/about">
            <div className="flex justify-center bg-gray-300/50 dark:bg-gray-800/50 w-auto rounded-xl p-4 transition-all duration-200 hover:scale-110 hover:cursor-pointer">
              <p className="text-gray-800 dark:text-gray-200">About</p>
            </div>
          </Link>
        </div>
        <div className="fixed bottom-0 left-0 flex h-24 sm:h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 p-4 sm:p-8 lg:pointer-events-auto lg:p-0 text-gray-800 dark:text-white">
            By{" "}
            <Image
              src="/mar_logo.svg"
              alt="Logo"
              width={75}
              height={24}
              priority
            />
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, skewX: 0, skewY: 0, x: 25 }}
          animate={{ opacity: 1, skewX: -25, skewY: -25, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute z-10 top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, skewX: 0, skewY: 0, x: -25 }}
          animate={{ opacity: 1, skewX: 25, skewY: 25, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute z-10 bottom-0 left-0 w-32 h-32 bg-secondary/75 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative z-20 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16 lg:my-0"
        >
          <motion.div
            variants={item}
            className="col-span-2 lg:col-span-1 row-span-2 flex flex-col items-center justify-center bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-2xl p-4 rounded-lg transition-all duration-200"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-600 mb-4 transition-all duration-200 hover:scale-110">
              <Image
                src={"/profile.png"}
                alt={"image"}
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="text-gray-800 font-semibold dark:text-gray-200 text-center text-lg">
              Muhammad Akbar Ramadhan
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-2 sm:col-span-1 bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-2xl transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col justify-center h-full gap-3">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  My Projects
                </span>
                <p className="text-gray-800 dark:text-gray-400">
                  Preview of the projects I&apos;ve previously built.
                </p>
              </div>
              <Link href="/projects">
                <div className="flex justify-end items-center gap-2 transition-all duration-200 font-semibold text-white">
                  <button className="bg-gray-400/75 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-400 transition-all duration-200 w-1/2 flex items-center justify-center gap-4 py-2 px-1 rounded-lg">
                    Preview <FaArrowRight />
                  </button>
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-2 sm:col-span-1 bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-2xl transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg"
          >
            <MusicPlayer />
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-2 md:col-span-1 bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-2xl transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg mx-auto w-full"
          >
            <AnimatedGrid />
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-2 sm:col-span-2 lg:col-span-2 row-span-3 bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-2xl transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg flex items-center justify-center"
          >
            <AnimatedLogo />
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-1 lg:row-span-5 bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-2xl transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-800 dark:text-gray-200 text-center">
              Currently working in
              <h1 className="font-semibold text-2xl animate-scale mt-2">
                Telkom Foundation
              </h1>
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-1 row-span-3 lg:row-span-4 bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-2xl transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg flex flex-col gap-4 items-center justify-center"
          >
            <span className="text-gray-800 dark:text-white text-lg text-center">
              Wow, what a cool site?
            </span>
            <div className="flex gap-2 justify-center items-center">
              <span className="sr-only">Loading...</span>
              <div className="h-4 w-4 bg-gray-800 dark:bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-4 w-4 bg-gray-800 dark:bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-4 w-4 bg-gray-800 dark:bg-white rounded-full animate-bounce"></div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-1 md:col-span-2 row-span-2 bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-2xl transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg flex items-center justify-center"
          >
            <AnimatedTypingText />
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-2 md:col-span-3 lg:col-span-4 bg-gray-300/50 dark:bg-gray-800/50 backdrop-blur-2xl transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-800 dark:text-white"
          >
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <Link href="https://www.instagram.com/marmdhn_/" target="_blank">
                <FaInstagram
                  size={36}
                  className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/marmdhn/" target="_blank">
                <FaLinkedin
                  size={36}
                  className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                />
              </Link>
              <Link href="https://github.com/makbarramadhan62" target="_blank">
                <FaGithub
                  size={36}
                  className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                />
              </Link>
            </div>
            <div className="transition-all duration-200 ease-in-out md:opacity-0 xl:opacity-100 col-span-1 md:col-span-1 flex items-center justify-center">
              <span className="text-sm text-center">©marmdhn2024</span>
            </div>
            <div className="flex justify-center md:justify-end items-center space-x-2 gap-2 col-span-1 md:col-span-1">
              <div className="relative group">
                <Link href="https://nextjs.org/" target="_blank">
                  <TbBrandNextjs
                    size={36}
                    className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                  />
                </Link>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Next.js
                </div>
              </div>

              <div className="relative group">
                <Link href="https://nuxt.com/" target="_blank">
                  <SiNuxtdotjs
                    size={36}
                    className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                  />
                </Link>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Nuxt.js
                </div>
              </div>

              <div className="relative group">
                <Link href="https://tailwindcss.com/" target="_blank">
                  <RiTailwindCssFill
                    size={36}
                    className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                  />
                </Link>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tailwind CSS
                </div>
              </div>

              <div className="relative group">
                <Link href="https://flutter.dev/" target="_blank">
                  <RiFlutterFill
                    size={36}
                    className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                  />
                </Link>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Flutter
                </div>
              </div>

              <div className="relative group">
                <Link href="https://www.figma.com/" target="_blank">
                  <PiFigmaLogoFill
                    size={36}
                    className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                  />
                </Link>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Figma
                </div>
              </div>

              <div className="relative group">
                <Link href="https://www.python.org/" target="_blank">
                  <FaPython
                    size={36}
                    className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                  />
                </Link>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Python
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="https://www.adobe.com/id_id/products/premiere.html"
                  target="_blank"
                >
                  <SiAdobepremierepro
                    size={36}
                    className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                  />
                </Link>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Adobe Premiere Pro
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="https://www.adobe.com/id_id/products/aftereffects.html"
                  target="_blank"
                >
                  <SiAdobeaftereffects
                    size={36}
                    className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
                  />
                </Link>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Adobe After Effects
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
