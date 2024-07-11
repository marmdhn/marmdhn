import Image from "next/image";
import AnimatedGrid from "@/components/AnimatedGrid";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          My Portfolio
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/mar_logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={75}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1 row-span-2 flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-600 mb-4">
            <Image
              src={"/profile.png"}
              alt={"image"}
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-white">Muhammad Akbar Ramadhan</span>
        </div>
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg">
          <span className="text-white">GI Assets</span>
          <p className="text-gray-400">
            Character textures, models, and mods for a certain anime game
          </p>
          <div className="flex mt-2">
            <span className="text-white mr-2">1.6k</span>
            <span className="text-white">1.0k</span>
          </div>
        </div>
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg">
          <span className="text-white">Wallhelper</span>
          <p className="text-gray-400">
            Some scripts to use video wallpapers on linux
          </p>
          <div className="flex mt-2">
            <span className="text-white mr-2">17</span>
            <span className="text-white">3</span>
          </div>
        </div>
        <div className="col-span-1 row-span-3 bg-gray-800 p-4 rounded-lg">
          <AnimatedGrid />
        </div>
        <div className="col-span-2 row-span-3 bg-gray-800 p-4 rounded-lg flex items-center justify-center">
          <AnimatedText />
        </div>
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg flex items-center justify-center">
          <span className="text-white">
            I&apos;m not doing anything right now...
          </span>
        </div>
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg flex items-center justify-center">
          <span className="text-white">Wow! What a cool site</span>
        </div>{" "}
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg flex items-center justify-center">
          <span className="text-white">Wow! What a cool site</span>
        </div>
        <div className="col-span-4 bg-gray-800 p-4 rounded-lg flex justify-between">
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-gray-600"></div>
            <div className="w-6 h-6 bg-gray-600"></div>
            <div className="w-6 h-6 bg-gray-600"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-gray-600"></div>
            <div className="w-6 h-6 bg-gray-600"></div>
            <div className="w-6 h-6 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
