"use client";

import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full py-10 px-4 md:px-8 bg-gradient-to-r from-green-50 to-green-200 rounded-xl shadow-md my-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4">
            Little Geeek English - English Reading and Comprehension Assistant Tool for Primary School Students in Sri Lanka
          </h1>

          <p className="text-green-700 mb-8 md:text-lg">
            Model-driven English learning assistant for Sri Lankan primary
            students. Supporting fluency, pronunciation, comprehension, and engagement
            through speech, image, and game-based assessments.
          </p>

          <Link
            href="/"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Read More 👋
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
