import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center gap-2 p-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />

        <div className="flex items-baseline gap-1">
          <h1 className="title text-2xl font-bold">Bug Explainer</h1>
          <h2 className="subtitle text-xs font-semibold hidden sm:inline-block text-gray-500">
            Fix Code Error Instanly with AI
          </h2>
        </div>
      </div>

      <div className="border-b border-gray-200 shadow-md w-full"></div>
    </nav>
  );
};

export default Navbar;
