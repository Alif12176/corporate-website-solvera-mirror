import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@heroui/react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "gqxmce8d8pkarsyu.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
