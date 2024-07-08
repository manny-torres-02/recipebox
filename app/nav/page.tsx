"use client";
import React from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="hidden md:flex space-x-4 items-center">
              <Link
                className="text-2xl font-bold px-4 py-2"
                href="/"
                rel="icon"
              >
                Home
              </Link>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
              <Link className="text-2xl font-bold px-4 py-2" href="/about">
                About
              </Link>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="flex md:hidden items-center">
        <button
          type="button"
          onClick={toggleMenu}
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              href="/about"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
