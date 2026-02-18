import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <div className="flex items-center gap-2 p-4">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />

            <div className="flex items-baseline gap-1">
              <h1 className="title text-2xl font-bold">Bug Explainer</h1>
              <h2 className="subtitle text-xs font-semibold hidden sm:inline-block text-gray-500">
                Fix Code Error Instanly with AI
              </h2>
            </div>
          </div>
        </Link>

        <ul className="flex items-center gap-8 mr-12 hidden lg:flex">
          <li className="text-lg text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-300">
            <Link href="/about">About</Link>
          </li>

          <li className="text-lg text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-300">
            <Link href="/contact">Contact</Link>
          </li>

          <li className="text-lg text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-300">
            <Link href="https://nakamapedia.blogspot.com/" target="_blank">
              Blog
            </Link>
          </li>

          <li className="text-lg text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-300">
            <Link
              href="https://new-portfolio-v3-coral.vercel.app/"
              target="_blank"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>

      <div className="border-b border-gray-200 shadow-md w-full"></div>
    </nav>
  );
};

export default Navbar;
