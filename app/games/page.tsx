import GameCard from "@/components/GameCard";
import { games } from "@/data/games";

const GameList = () => {
  return (
    <div className="max-w-7xl px-8 xl:px-0 mx-auto py-10 h-full">
      <div className="text-center mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-primary mt-4">
            Games Section
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
            Playing this games just for fun.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {games.map((game, index) => (
            <div key={index}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameList;
