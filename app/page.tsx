import Image from "next/image";
import AnimatedGrid from "@/components/AnimatedGrid";
import AnimatedLogo from "@/components/AnimatedLogo";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNuxtdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import MusicPlayer from "@/components/MusicPlayer";
import AnimatedTypingText from "@/components/AnimatedTypingText";
import ToggleDarkMode from "@/components/ToggleDarkMode";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24 sm:pt-4 sm:pb-24 md:pt-4 md:pb-24 gap-4">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed font-bold left-0 top-0 flex gap-4 w-full justify-center bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl dark:bg-gray-800 from-inherit lg:static lg:w-auto lg:rounded-xl lg:bg-gray-300 lg:p-4 text-gray-800 dark:text-gray-200 transition-all duration-200">
          <p>My Portfolio</p>
          <ToggleDarkMode />
        </div>
        <div className="fixed bottom-0 left-0 flex h-24 sm:h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 sm:p-8 lg:pointer-events-auto lg:p-0 text-gray-800 dark:text-white"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/mar_logo.svg"
              alt="Logo"
              width={75}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16 lg:my-0">
        <div className="col-span-2 lg:col-span-1 row-span-2 flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-800 p-4 rounded-lg transition-all duration-200">
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
        </div>

        <div className="col-span-2 sm:col-span-1 bg-gray-300 dark:bg-gray-800 transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg">
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
              <div className="flex justify-end items-center gap-2 transition-all duration-200 hover:text-gray-400 font-semibold dark:text-white dark:hover:text-gray-400">
                Preview <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 bg-gray-300 dark:bg-gray-800 transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg">
          <MusicPlayer />
        </div>
        <div className="col-span-2 md:col-span-1 bg-gray-300 dark:bg-gray-800 transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg mx-auto w-full">
          <AnimatedGrid />
        </div>
        <div className="col-span-2 sm:col-span-2 lg:col-span-2 row-span-3 bg-gray-300 dark:bg-gray-800 transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg flex items-center justify-center">
          <AnimatedLogo />
        </div>
        <div className="col-span-1 lg:row-span-5 bg-gray-300 dark:bg-gray-800 transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg flex items-center justify-center">
          <span className="text-gray-800 dark:text-gray-200 text-center">
            Currently working in
            <h1 className="font-semibold text-2xl animate-scale mt-2">
              Telkom Foundation
            </h1>
          </span>
        </div>
        <div className="col-span-1 row-span-3 lg:row-span-4 bg-gray-300 dark:bg-gray-800 transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg flex flex-col gap-4 items-center justify-center">
          <span className="text-gray-800 dark:text-white text-lg text-center">
            Wow, what a cool site?
          </span>
          <div className="flex gap-2 justify-center items-center">
            <span className="sr-only">Loading...</span>
            <div className="h-4 w-4 bg-gray-800 dark:bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-gray-800 dark:bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 bg-gray-800 dark:bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 bg-gray-300 dark:bg-gray-800 transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg flex items-center justify-center">
          <AnimatedTypingText />
        </div>
        <div className="col-span-2 md:col-span-3 lg:col-span-4 bg-gray-300 dark:bg-gray-800 transition-all duration-200 shadow-xl dark:shadow-none p-4 rounded-lg flex flex-wrap justify-between items-center text-gray-800 dark:text-white">
          <div className="flex space-x-2">
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
          <span className="text-sm">©marmdhn2024</span>
          <div className="flex space-x-2">
            <Link href="https://nextjs.org/" target="_blank">
              <TbBrandNextjs
                size={36}
                className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
              />
            </Link>
            <Link href="https://nuxt.com/" target="_blank">
              <SiNuxtdotjs
                size={36}
                className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
              />
            </Link>
            <Link href="https://tailwindcss.com/" target="_blank">
              <RiTailwindCssFill
                size={36}
                className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer text-gray-800 dark:text-white dark:hover:text-gray-400"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
