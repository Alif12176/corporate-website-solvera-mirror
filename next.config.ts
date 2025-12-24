import type { NextConfig } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "";

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
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: `${API_URL}/api/v1/:path*`, 
      },
    ];
  },
};

export default nextConfig;
