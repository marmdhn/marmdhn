"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

const Images = ({ image, index }: { image: string; index: number }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
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
      <Zoom zoomMargin={40}>
        <Image
          className="object-cover"
          width={300}
          height={300}
          alt={`img${index}`}
          src={`/images/gallery/${image}`}
          onLoadingComplete={() => setIsLoading(false)}
          onLoad={() => setIsLoading(false)}
        />
      </Zoom>
    </div>
  );
};

export default Images;
