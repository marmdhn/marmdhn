"use client";

import React, { useState } from "react";
import CardPortfolio from "@/components/CardPortfolio";
import { portfolios } from "@/data/portfolios";
import { motion, AnimatePresence } from "framer-motion";

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
            className={`px-4 py-2 rounded-md cursor-pointer transition-all duration-200 ${
              activeFilter === filter
                ? "bg-secondary text-white border border-secondary"
                : "text-gray-700 dark:text-gray-500 border border-gray-300 dark:border-gray-700 hover:bg-secondary hover:text-white dark:hover:text-white"
            }`}
          >
            {filter}
          </div>
        ))}
      </div>
      {filteredPortfolios.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center text-gray-500 dark:text-gray-400"
        >
          Belum ada portfolio di kategori ini.
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            className={`mt-10 grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              staggerChildren: 0.1,
            }}
          >
            {filteredPortfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio.title}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <CardPortfolio
                  title={portfolio.title}
                  techStack={portfolio.techStack}
                  imageCover={portfolio.imageCover}
                  companyName={portfolio.companyName}
                  type={portfolio.type}
                  images={portfolio.images}
                  githubRepo={portfolio.githubRepo}
                  webUrl={portfolio.webUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default PortfolioSection;
