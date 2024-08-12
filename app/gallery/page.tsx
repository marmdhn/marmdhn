"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { gallery } from "@/data/gallery";
import { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="max-w-7xl px-8 xl:px-0 mx-auto py-10 h-full">
      <div className="text-center mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-primary mt-4">Gallery</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
            Creativity without limits.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-wrap gap-4 justify-center">
        {gallery.map((image, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <Zoom zoomMargin={40}>
              <div className="relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <svg
                      className="animate-spin h-6 w-6 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4zm8-8v4a4 4 0 01-4 4H4a8 8 0 008-8z"
                      ></path>
                    </svg>
                  </div>
                )}
                <Image
                  className="object-cover"
                  width={300}
                  height={300}
                  alt={`img${index}`}
                  src={`/images/gallery/${image.src}`}
                  onLoadingComplete={() => setIsLoading(false)}
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </Zoom>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
