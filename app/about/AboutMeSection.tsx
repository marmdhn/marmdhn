import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const AboutMeSection = () => {
  return (
    <section className="text-center p-8 transition-all duration-200">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-16">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400">
          <Image
            src="/profile.png"
            alt="Muhammad Akbar Ramadhan"
            width={100}
            height={100}
            unoptimized
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center md:justify-start text-center md:text-start">
          <h1 className="text-4xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Muhammad Akbar Ramadhan
          </h1>
          <p className="text-xl mt-2 text-gray-800 dark:text-gray-400 font-semibold">
            Front End Developer
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link
              href="https://github.com/makbarramadhan62"
              className="bg-primary text-white px-4 py-2 rounded-full shadow-lg transition-all duration-200 hover:bg-primary-dark"
            >
              Resource
            </Link>
            <Link
              href="https://github.com/makbarramadhan62"
              className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-200 hover:bg-gray-700"
            >
              GitHub <FaGithub className="inline-block ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
