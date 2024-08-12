"use client";

import { gallery } from "@/data/gallery";
import { motion } from "framer-motion";
import Images from "@/app/gallery/images";

const Gallery = () => {
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
            <Images image={image.src} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
