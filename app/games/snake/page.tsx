"use client";

import { useState, useEffect, useCallback } from "react";
import { BiReset } from "react-icons/bi";

const SnakeGame = () => {
  const [score, setScore] = useState(0);

  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [isGameOver, setIsGameOver] = useState(false);
  const gridSize = 10;

  const moveSnake = useCallback(() => {
    const newSnake = [...snake];
    let head = {
      x: newSnake[0].x + direction.x,
      y: newSnake[0].y + direction.y,
    };

    // Warp through walls
    if (head.x < 0) head.x = gridSize - 1;
    if (head.x >= gridSize) head.x = 0;
    if (head.y < 0) head.y = gridSize - 1;
    if (head.y >= gridSize) head.y = 0;

    // Check for collision with self
    if (
      newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setIsGameOver(true);
      return;
    }

    newSnake.unshift(head);

    // Check for collision with food
    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      });
      setScore(score + 1);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction.x, direction.y, food.x, food.y, score]);

  useEffect(() => {
    if (isGameOver) return;

    const intervalId = setInterval(moveSnake, 200);
    return () => clearInterval(intervalId);
  }, [moveSnake, isGameOver]);

  const handleKeyPress = useCallback(
    (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    },
    [direction],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const resetGame = () => {
    setSnake([{ x: 2, y: 2 }]);
    setDirection({ x: 1, y: 0 });
    setFood({ x: 5, y: 5 });
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <div className="max-w-7xl px-8 xl:px-0 mx-auto py-10 h-full">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-primary my-4">Snake Game</h1>
        <div
          className="relative"
          style={{ width: `${gridSize * 50}px`, height: `${gridSize * 50}px` }}
        >
          <div className="absolute w-full h-full bg-gray-200 grid grid-cols-10">
            {Array.from({ length: gridSize * gridSize }).map((_, index) => (
              <div key={index} className="border border-gray-300"></div>
            ))}
          </div>
          {snake.map((segment, index) => (
            <div
              key={index}
              className="absolute bg-green-500"
              style={{
                width: "50px",
                height: "50px",
                top: `${segment.y * 50}px`,
                left: `${segment.x * 50}px`,
              }}
            />
          ))}
          <div
            className="absolute bg-red-500"
            style={{
              width: "50px",
              height: "50px",
              top: `${food.y * 50}px`,
              left: `${food.x * 50}px`,
            }}
          />
        </div>
        {isGameOver && (
          <div className="flex flex-col items-center justify-center">
            <span className="mt-4 text-red-500 text-lg">Game Over!</span>
            <span className="text-lg">Score: {score}</span>
          </div>
        )}
        <button
          onClick={resetGame}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <BiReset size={24} />
        </button>
      </div>
    </div>
  );
};

export default SnakeGame;
