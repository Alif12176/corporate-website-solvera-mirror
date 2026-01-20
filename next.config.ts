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
      {
        protocol: "http",
        hostname: "147.139.132.60",
        port: "18021", 
      },
      {
        protocol: "http",
        hostname: "147.139.132.60",
        port: "18022",
      },
      {
        protocol: "http",
        hostname: "147.139.132.60",
        port: "18023",
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