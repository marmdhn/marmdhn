"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiNuxtdotjs,
} from "react-icons/si";
import { RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";
import { FaImage, FaPython } from "react-icons/fa6";
import { PiFigmaLogoFill } from "react-icons/pi";
import ModalPreviewCV from "@/components/ModalPreviewCV";
import React, { useState } from "react";

const AboutMeSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="text-center p-8 transition-all duration-200">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        <div
          className={`w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 ${
            isLoading
              ? "w-64 h-64 rounded-full bg-gray-500 animate-pulse dark:bg-gray-700 flex justify-center items-center"
              : ""
          }`}
        >
          {isLoading && (
            <FaImage className="absolute w-10 h-10 text-gray-200 dark:text-gray-600 transition-all duration-200" />
          )}
          <Image
            src="/new_profile.png"
            alt="Muhammad Akbar Ramadhan"
            width={100}
            height={100}
            unoptimized
            className={`object-cover w-full h-full transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="flex flex-col gap-3 justify-center md:justify-start text-center md:text-start">
          <div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Muhammad Akbar Ramadhan
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-400 font-semibold">
              Front End Developer
            </p>
          </div>
          <div className="flex space-x-2">
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
          <div className="mt-6 flex justify-center md:justify-start items-center space-x-4">
            <ModalPreviewCV />
            <Link
              href="https://github.com/marmdhn"
              className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-200 hover:bg-gray-700 flex items-center"
            >
              GitHub <FaGithub className="ml-2" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
