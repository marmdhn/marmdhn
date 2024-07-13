import React from "react";
import Image from "next/image";
import { PortfolioCardTypes } from "@/types/PortfolioCardTypes";
import PortfolioModal from "@/components/PortfolioModal";

const PortfolioCard: React.FC<PortfolioCardTypes> = ({
  title,
  description,
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
    description,
    techStack,
    imageUrl,
    companyName,
    companyLogo,
    type,
    images,
    githubRepo,
    webUrl,
  };

  return (
    <div className="bg-white dark:bg-gray-800 transition-all duration-200 shadow-lg rounded-lg overflow-hidden">
      <Image
        unoptimized
        width={100}
        height={100}
        className="w-full h-48 object-cover object-center"
        src={`/images/portfolio/${
          imageUrl !== undefined ? imageUrl : "imageNotFound.png"
        }`}
        alt={title}
      />
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
        <div className="w-full flex justify-end">
          <PortfolioModal portfolio={portfolioModalProps} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
