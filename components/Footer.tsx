"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="w-full pt-10">
          <div className="flex items-center justify-center mb-5">
            <Link
              href="https://www.instagram.com/marmdhn_/"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary text-gray-800 dark:text-white hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaInstagram size={24} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/marmdhn/"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary text-gray-800 dark:text-white hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaLinkedin size={24} />
            </Link>

            <Link
              href="https://github.com/marmdhn"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary text-gray-800 dark:text-white hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaGithub size={24} />
            </Link>
          </div>
          <p className="font-medium text-xs text-slate-500 text-center">
            Dibuat dengan <span className="text-pink-500">❤️</span> oleh{" "}
            <Link
              href="https://www.instagram.com/marmdhn_/"
              target="_blank"
              className="font-bold text-primary"
            >
              Muhammad Akbar Ramadhan
            </Link>
            , menggunakan{" "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              className="font-bold text-secondary"
            >
              tailwind CSS
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
