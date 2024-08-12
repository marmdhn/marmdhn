"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Gallery = () => {
  const images = [
    { src: "/images/gallery/1.png", alt: "img1" },
    { src: "/images/gallery/2.png", alt: "img2" },
    { src: "/images/gallery/3.png", alt: "img3" },
  ];

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
        {images.map((image, index) => (
          <Zoom zoomMargin={40} key={index}>
            <Image
              className="object-cover"
              width={150}
              height={150}
              alt={image.alt}
              src={image.src}
            />
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
