"use client";

import { useState, useEffect, useCallback } from "react";
import { BiReset } from "react-icons/bi";

const TicTacToeWithAI = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [message, setMessage] = useState("");

  const checkWinner = (squares: any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || checkWinner(board) || !isXNext) return;
    const newBoard = board.slice();
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXNext(false);
  };

  const botMove = useCallback(() => {
    let availableMoves = board
      .map((value, index) => (value === null ? index : null))
      .filter((value) => value !== null);
    if (availableMoves.length > 0) {
      let botChoice =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
      const newBoard = board.slice();
      newBoard[botChoice] = "O";
      setBoard(newBoard);
      setIsXNext(true);
    }
  }, [board]);

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      setMessage(`Pemenangnya: ${winner}`);
      return;
    }

    if (board.every((cell) => cell)) {
      setMessage("Permainan Seri!");
      return;
    }

    if (!isXNext) {
      setTimeout(() => {
        botMove();
      }, 1000);
    }
  }, [board, botMove, isXNext]);

  return (
    <div className="max-w-7xl px-8 xl:px-0 mx-auto py-10 h-full">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-primary mt-4">
          Tic-Tac-Toe: User vs Bot
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
          {message || `Giliran: ${isXNext ? "Kamu (X)" : "Bot (O)"}`}
        </p>

        <div className="grid grid-cols-3 gap-2">
          {board.map((value, index) => (
            <button
              key={index}
              className={`w-32 h-32 text-2xl font-bold ${
                value === "X" ? "text-primary-dark" : "text-secondary-dark"
              } bg-gray-200 hover:bg-gray-300 rounded`}
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            setBoard(Array(9).fill(null));
            setIsXNext(true);
            setMessage("");
          }}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <BiReset size={24} />
        </button>
      </div>
    </div>
  );
};

export default TicTacToeWithAI;
