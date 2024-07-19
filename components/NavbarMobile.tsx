"use client";

import classNames from "classnames";
import React, { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const NavbarMobile = () => {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <>
      <div
        className={classNames(`tham tham-e-squeeze tham-w-6 sm:hidden`, {
          "tham-active": opened,
        })}
        onClick={toggleMenu}
      >
        <div className="tham-box hover:scale-90 transition-all duration-200">
          <div className="tham-inner dark:bg-gray-200" />
        </div>
      </div>

      <Transition
        show={opened}
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed mx-auto w-3/4 inset-0 z-50 flex items-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div
            className="fixed inset-0 bg-black opacity-60"
            onClick={toggleMenu}
          ></div>
          <div className="relative w-full max-w-3xl mx-auto my-6">
            <div className="relative bg-gray-300 dark:bg-gray-800 border-0 shadow-lg rounded-lg">
              <div className="flex items-start justify-between p-5 rounded-t">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Menu
                  </h3>
                </div>
                <button
                  className="bg-transparent border-0 text-black float-right text-3xl font-semibold outline-none focus:outline-none hover:scale-150 transition-all duration-200"
                  onClick={toggleMenu}
                >
                  <span className="text-gray-800 dark:text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              <div className="relative px-6 pb-6 flex-auto">
                <div className="flex flex-col gap-4">
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
                </div>
                <div className="mt-6 flex gap-2 items-center">
                  <div className="p-2 rounded-lg border border-gray-800 dark:border-white">
                    <Link
                      href="https://github.com/marmdhn?tab=repositories"
                      target="_blank"
                    >
                      <FaGithub
                        size={24}
                        className="text-gray-800 transition-all duration-200 dark:text-white hover:scale-125 hover:text-gray-400 dark:hover:text-gray-400"
                      />
                    </Link>
                  </div>
                  <div className="p-2 rounded-lg border border-gray-800 dark:border-white">
                    <ToggleDarkMode iconSize={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default NavbarMobile;
