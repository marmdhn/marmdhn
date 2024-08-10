"use client";

import { GameCardTypes } from "@/types/GameCardTypes";
import Image from "next/image";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";

const GameCard = ({ game }: { game: GameCardTypes }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <div
        className={`bg-gray h-48 relative flex items-center justify-center transition-all duration-200 ${
          isLoading
            ? "bg-gray-500 animate-pulse dark:bg-gray-700 h-48 w-full"
            : ""
        }`}
      >
        {isLoading && (
          <FaImage className="absolute w-10 h-10 text-gray-200 dark:text-gray-600 transition-all duration-200" />
        )}
        <Image
          width={400}
          height={400}
          src={game.image}
          alt={game.title}
          className={`w-full h-48 object-cover  ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {game.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {game.description}
        </p>
        <a
          href={game.link}
          className="block mt-4 text-blue-500 dark:text-blue-400 hover:underline"
        >
          Play Now
        </a>
      </div>
    </div>
  );
};

export default GameCard;
