"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-gray-800 dark:bg-slate-950 text-white text-center p-6 mt-12 flex flex-col">
      <div className="flex flex-col md:flex-row gap-4 py-8">
        {/* Product Title */}
        <div className="flex-1 flex flex-col text-left gap-2">
          <p className="font-bold text-lg">AI BUG EXPLAINER</p>
          <p className="text-sm text-gray-400">
            Fix Your Bugs in Seconds with AI-Powered Explanations
          </p>
        </div>

        {/* Service */}
        <div className="flex-1 flex flex-col text-left gap-2">
          <p className="font-semibold">Services</p>
          <Link
            href="https://ai-text-helper.vercel.app/"
            target="_blank"
            className="text-sm text-gray-400 hover:underline"
          >
            AI Text Helper
          </Link>
        </div>

        {/* Company Info */}
        <div className="flex-1 flex flex-col text-left gap-2">
          <p className="font-semibold">Explore</p>

          <Link
            href="/"
            className={`text-sm text-gray-400 hover:underline ${pathname === "/" ? "text-indigo-400" : ""}`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm text-gray-400 hover:underline ${pathname === "/about" ? "text-indigo-400" : ""}`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={`text-sm text-gray-400 hover:underline ${pathname === "/contact" ? "text-indigo-400" : ""}`}
          >
            Contact Us
          </Link>

          <Link
            href="https://nakamapedia.blogspot.com/"
            target="_blank"
            className="text-sm text-gray-400 hover:underline"
          >
            Blog
          </Link>

          <Link
            href="https://new-portfolio-v3-coral.vercel.app/"
            target="_blank"
            className="text-sm text-gray-400 hover:underline"
          >
            Portfolio
          </Link>
        </div>

        {/* Contact */}
        <div className="flex-1 flex flex-col text-left gap-2">
          <p className="font-semibold">Contact</p>
          <Link
            href="mailto:sandisopian.career@gmail.com"
            className="text-sm text-gray-400 hover:underline"
          >
            sandisopian.career@gmail.com
          </Link>
        </div>
      </div>

      <div className="border-b border-gray-100 shadow-md w-full my-4"></div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Bug Explainer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
