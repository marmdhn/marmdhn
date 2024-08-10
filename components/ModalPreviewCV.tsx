"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const ModalPreviewCV = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="bg-primary-dark font-semibold text-white px-4 py-2 rounded-full shadow-lg transition-all duration-200 hover:bg-primary hover:cursor-pointer"
        onClick={openModal}
      >
        Preview CV
      </div>
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
            onClick={closeModal}
          ></div>
          <div className="relative w-full max-w-4xl mx-auto my-6">
            <div className="relative bg-gray-300 dark:bg-gray-800 border-0 shadow-lg rounded-lg">
              <div className="flex items-start justify-between p-5 rounded-t">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Preview CV
                </h3>
                <button
                  className="bg-transparent border-0 text-black float-right text-3xl font-semibold outline-none focus:outline-none hover:scale-150 transition-all duration-200"
                  onClick={closeModal}
                >
                  <span className="text-gray-800 dark:text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              <div className="relative px-6 pb-6 flex-auto">
                <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-900">
                  <iframe
                    src="/documents/CV.pdf"
                    width="100%"
                    height="500px"
                    className="border-none"
                    title="CV Preview"
                  ></iframe>
                </div>

                <div className="flex justify-center mt-4">
                  <Link
                    href="/documents/CV.pdf"
                    className="bg-primary text-white px-4 py-2 rounded-full shadow-lg transition-all duration-200 hover:bg-primary-dark hover:cursor-pointer flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unduh CV
                    <FaExternalLinkAlt className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default ModalPreviewCV;
