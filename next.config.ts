import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true ,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "sjc.microlink.io",
      },
      {
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
