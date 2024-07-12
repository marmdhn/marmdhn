import Image from "next/image";
import AnimatedGrid from "@/components/AnimatedGrid";
import AnimatedText from "@/components/AnimatedText";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNuxtdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import MusicPlayer from "@/components/musicPlayer";
import Modal from "@/components/modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24 gap-4">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          My Portfolio
        </p>
        <div className="fixed bottom-0 left-0 flex h-24 sm:h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 sm:p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/mar_logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={75}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16 lg:my-0">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 row-span-2 flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-600 mb-4">
            <Image
              src={"/profile.png"}
              alt={"image"}
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-white text-center">
            Muhammad Akbar Ramadhan
          </span>
        </div>
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg">
          <div className="flex flex-col justify-center h-full gap-3">
            <span className="text-white">My Projects</span>
            <p className="text-gray-400">
              Preview of the projects I&apos;ve previously built.
            </p>
            <Modal
              title="Notification!"
              content="This feature will be avalaible soon"
            />
          </div>
        </div>
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg">
          <MusicPlayer />
        </div>
        <div className="col-span-1 row-span-3 bg-gray-800 p-4 rounded-lg mx-auto w-full">
          <AnimatedGrid />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-3 bg-gray-800 p-4 rounded-lg flex items-center justify-center">
          <AnimatedText />
        </div>
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg flex items-center justify-center">
          <span className="text-white text-center">
            Currently working in
            <h1 className="font-semibold text-xl animate-scale mt-2">
              Telkom Foundation
            </h1>
          </span>
        </div>
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg flex items-center justify-center">
          <div className="flex gap-2 justify-center items-center">
            <span className="sr-only">Loading...</span>
            <div className="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg flex items-center justify-center">
          <div className="w-1/2 sm:w-11/12 lg:w-3/4">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-lg text-white">
              Wow! What a cool site
            </h1>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gray-800 p-4 rounded-lg flex flex-wrap justify-between items-center">
          <div className="flex space-x-2">
            <Link href="https://www.instagram.com/marmdhn_/" target="_blank">
              <FaInstagram
                size={36}
                className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/marmdhn/" target="_blank">
              <FaLinkedin
                size={36}
                className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer"
              />
            </Link>
            <Link
              href="https://github.com/makbarramadhan62?tab=repositories"
              target="_blank"
            >
              <FaGithub
                size={36}
                className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer"
              />
            </Link>
          </div>
          <span className="text-sm">©marmdhn2024</span>
          <div className="flex space-x-2">
            <Link href="https://nextjs.org/" target="_blank">
              <TbBrandNextjs
                size={36}
                className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer"
              />
            </Link>
            <Link href="https://nuxt.com/" target="_blank">
              <SiNuxtdotjs
                size={36}
                className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer"
              />
            </Link>
            <Link href="https://tailwindcss.com/" target="_blank">
              <RiTailwindCssFill
                size={36}
                className="transition-all duration-200 hover:text-gray-400 hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
