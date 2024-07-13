"use client";

import React, { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolios } from "@/data/portfolios";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Website", "Mobile", "UI/UX"];

  const filteredPortfolios =
    activeFilter === "All"
      ? portfolios
      : portfolios.filter(
          (portfolio) =>
            portfolio.type.toLowerCase() === activeFilter.toLowerCase(),
        );

  const gridCols =
    filteredPortfolios.length > 2
      ? "lg:grid-cols-3"
      : filteredPortfolios.length === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-1";

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <div
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`ml-4 px-4 py-2 rounded-md cursor-pointer transition-all duration-200 ${
              activeFilter === filter
                ? "bg-secondary text-white border border-secondary"
                : "text-gray-700 dark:text-gray-500 border border-gray-300 dark:border-gray-700 hover:bg-secondary hover:text-white dark:hover:text-white"
            }`}
          >
            {filter}
          </div>
        ))}
      </div>
      <div
        className={`mt-10 grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-4`}
      >
        {filteredPortfolios.map((portfolio, index) => (
          <div key={index} className="flex justify-center">
            <PortfolioCard
              title={portfolio.title}
              techStack={portfolio.techStack}
              imageUrl={portfolio.imageUrl}
              companyName={portfolio.companyName}
              companyLogo={portfolio.companyLogo}
              type={portfolio.type}
              images={portfolio.images}
              githubRepo={portfolio.githubRepo}
              webUrl={portfolio.webUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
