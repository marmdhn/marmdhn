import React, { useState } from "react";
import Image from "next/image";
import { PortfolioCardTypes } from "@/types/PortfolioCardTypes";
import ModalPortfolio from "@/components/ModalPortfolio";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { FaImage } from "react-icons/fa6";

const CardPortfolio: React.FC<PortfolioCardTypes> = ({
  title,
  techStack,
  imageUrl,
  companyName,
  companyLogo,
  type,
  images,
  githubRepo,
  webUrl,
}) => {
  const portfolioModalProps = {
    title,
    techStack,
    imageUrl,
    companyName,
    companyLogo,
    type,
    images,
    githubRepo,
    webUrl,
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full bg-white dark:bg-gray-800 transition-all duration-200 shadow-lg rounded-lg overflow-hidden">
      <div
        className={`relative flex items-center justify-center max-w-sm transition-all duration-200 ${
          isLoading
            ? "bg-gray-300 animate-pulse dark:bg-gray-700 h-56 w-full"
            : ""
        }`}
      >
        {isLoading && (
          <FaImage className="absolute w-10 h-10 text-gray-200 dark:text-gray-600 transition-all duration-200" />
        )}
        <Image
          key={imageUrl}
          unoptimized
          width={100}
          height={100}
          className={`w-full h-56 object-cover object-center transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          src={`/images/portfolio/${
            imageUrl !== undefined ? imageUrl : "imageNotFound.png"
          }`}
          alt={title}
          onLoad={() => setTimeout(() => setIsLoading(false), 500)}
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
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

        <div className="flex justify-start items-center gap-4">
          {githubRepo ? (
            <Link
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Repo <FaExternalLinkAlt className="inline ml-1" />
            </Link>
          ) : (
            <span className="text-gray-400">GitHub Repo not available</span>
          )}

          {webUrl ? (
            <Link
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Website URL <FaExternalLinkAlt className="inline ml-1" />
            </Link>
          ) : (
            <span className="text-gray-400">Website URL not available</span>
          )}
        </div>

        <div className="w-full flex justify-start mt-4">
          <ModalPortfolio portfolio={portfolioModalProps} />
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
