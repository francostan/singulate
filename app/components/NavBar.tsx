"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(0);
  return (
    <nav className="bg-white p-4 h-12 flex justify-between items-center mt-3 mb-6">
      <div className="flex items-center">
        <svg
          className="w-6 h-6 text-gray-800 cursor-pointer lg:hidden"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>

      <div className="w-4 h-4 flex flex-col justify-between">
        <div className="h-0.5 bg-black rounded"></div>
        <div className="h-0.5 bg-black rounded"></div>
        <div className="h-0.5 bg-black rounded"></div>
      </div>

      <div className="hidden lg:flex flex-grow justify-center">
        <button
          className={`relative bg-white hover:bg-gray-100 text-purple-600 py-2 px-4 rounded mr-2 flex items-center ${
            activeButtonIndex === 0 ? "border-b-2 border-purple-600" : ""
          }`}
          onClick={() => setActiveButtonIndex(0)}
        >
          Edit Mode
        </button>
        <button
          className={`relative bg-white hover:bg-gray-100 text-purple-600 py-2 px-4 rounded mr-2 flex items-center ${
            activeButtonIndex === 1 ? "border-b-2 border-purple-600" : ""
          }`}
          onClick={() => setActiveButtonIndex(1)}
        >
          <span className="ml-2">Preview Mode</span>
        </button>
      </div>
      <div className="flex items-center">
        <p className="text-gray-800 mr-2">John Doe</p>
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
