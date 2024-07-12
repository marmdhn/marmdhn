"use client";

import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface ModalProps {
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Link href="/">
        <div
          className="flex justify-end items-center gap-2 transition-all duration-200 hover:text-gray-400 font-semibold dark:text-white dark:hover:text-gray-400"
          onClick={() => setIsOpen(true)}
        >
          Preview <FaArrowRight />
        </div>
      </Link>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div
            className="fixed inset-0 bg-black opacity-60"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative bg-gray-400 dark:bg-gray-800 border-0 shadow-lg rounded-lg">
              <div className="flex items-start justify-between p-5 rounded-t">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <button
                  className=" bg-transparent border-0 text-black float-right text-3xl font-semibold outline-none focus:outline-none hover:scale-150 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-gray-800 dark:text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative px-6 pb-6 flex-auto">
                <p className="my-4 text-lg leading-relaxed text-gray-800 dark:text-white">
                  {content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Modal;
