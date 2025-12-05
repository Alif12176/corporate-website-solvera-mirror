import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@heroui/react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
