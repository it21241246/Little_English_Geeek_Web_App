"use client";

import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full py-10 px-4 md:px-8 bg-gradient-to-r from-green-50 to-green-200 rounded-xl shadow-md my-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4">
            Smart City: AI-Powered Solutions for Smarter Urban Living.
          </h1>

          <p className="text-green-700 mb-8 md:text-lg">
          Smart City integrates cutting-edge computer vision technology to
            revolutionize smart city infrastructure. From intelligent traffic
            management to real-time surveillance, automated waste sorting, and
            efficient parking solutions, Smart City enhances urban efficiency,
            sustainability, and safety. By harnessing AI and real-time
            analytics, we create smarter, more adaptive cities that improve the
            quality of life for all residents.
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
