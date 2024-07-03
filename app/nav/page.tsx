import React from "react";
import Link from "next/link";

export default function Nav() {
  

  
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* <div className="hidden md:flex space-x-4 items-center"> */}
            <Link className="text-2xl font-bold" href="/" rel="icon">
              Home
            </Link>
            <div className="hidden md:flex space-x-4 items-center">
              <Link className="text-2xl font-bold" href="/about">
                About
              </Link>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
