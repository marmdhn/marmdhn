import React, { useState } from "react";
import Image from "next/image";
import { PortfolioCardTypes } from "@/types/PortfolioCardTypes";
import ModalPortfolio from "@/components/ModalPortfolio";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { FaImage, FaYoutube } from "react-icons/fa6";

const CardPortfolio: React.FC<PortfolioCardTypes> = ({
  title,
  techStack,
  imageCover,
  companyName,
  type,
  images,
  githubRepo,
  webUrl,
  videoUrl,
}) => {
  const portfolioModalProps = {
    title,
    techStack,
    imageCover,
    companyName,
    type,
    images,
    githubRepo,
    webUrl,
    videoUrl,
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-96 bg-white dark:bg-gray-800 transition-all duration-200 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
      <div
        className={`relative flex items-center justify-center transition-all duration-200 ${
          isLoading
            ? "bg-gray-500 animate-pulse dark:bg-gray-700 h-56 w-full"
            : ""
        }`}
      >
        {isLoading && (
          <FaImage className="absolute w-10 h-10 text-gray-200 dark:text-gray-600 transition-all duration-200" />
        )}
        <Image
          key={imageCover}
          unoptimized
          width={100}
          height={100}
          className={`w-full h-56 object-cover object-center transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          src={
            type.toLowerCase() === "video"
              ? imageCover
                ? `/images/video-thumbnail/${imageCover}`
                : "/images/imageNotFound.png"
              : imageCover
                ? `/images/portfolio/${imageCover}`
                : "/images/imageNotFound.png"
          }
          alt={title}
          onLoad={() => setTimeout(() => setIsLoading(false), 500)}
        />
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            <FaYoutube size={24} />
          </div>
          <p className="text-gray-400 mb-4">{companyName}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 text-xs font-semibold rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex justify-start items-center gap-4 mb-4">
            {type === "website" || type === "mobile" ? (
              githubRepo ? (
                <Link
                  href={githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  GitHub <FaExternalLinkAlt className="inline ml-1" />
                </Link>
              ) : (
                <span className="text-gray-400">GitHub not available</span>
              )
            ) : null}

            {type === "website" ? (
              webUrl ? (
                <Link
                  href={webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Visit Website
                  <FaExternalLinkAlt className="inline ml-1" />
                </Link>
              ) : (
                <span className="text-gray-400">Website not available</span>
              )
            ) : (
              <></>
            )}

            {type === "mobile" ? (
              webUrl ? (
                <Link
                  href={webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Download
                  <FaExternalLinkAlt className="inline ml-1" />
                </Link>
              ) : (
                <span className="text-gray-400">Download not available</span>
              )
            ) : (
              <></>
            )}
          </div>

          <div className="w-full flex justify-start">
            <ModalPortfolio portfolio={portfolioModalProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
