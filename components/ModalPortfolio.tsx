"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { PortfolioCardTypes } from "@/types/PortfolioCardTypes";
import { FaExternalLinkAlt } from "react-icons/fa";

interface PortfolioModalProps {
  portfolio: PortfolioCardTypes | null;
}

const ModalPortfolio: React.FC<PortfolioModalProps> = ({ portfolio }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === portfolio!.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? portfolio!.images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <>
      <div
        className="text-white bg-secondary hover:bg-secondary-dark hover:cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition duration-200 ease-in-out"
        onClick={openModal}
      >
        Preview Image
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
          <div className="relative w-full max-w-3xl mx-auto my-6">
            <div className="relative bg-gray-300 dark:bg-gray-800 border-0 shadow-lg rounded-lg">
              <div className="flex items-start justify-between p-5 rounded-t">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {portfolio?.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolio?.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 text-xs font-semibold rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
                {portfolio!.images.length !== 0 && (
                  <div className="relative">
                    <Image
                      unoptimized
                      width={100}
                      height={100}
                      className="w-full h-96 object-contain rounded-lg object-center mb-4"
                      src={`/images/portfolio/${
                        portfolio!.images[selectedImageIndex] ??
                        "imageNotFound.png"
                      }`}
                      alt={portfolio?.title as string}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <button
                        className="text-white p-2 hover:bg-gray-700 rounded-lg transition-all duration-200"
                        onClick={prevImage}
                      >
                        {"<"}
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <button
                        className="text-white p-2 hover:bg-gray-700 rounded-lg transition-all duration-200"
                        onClick={nextImage}
                      >
                        {">"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default ModalPortfolio;
