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
  async redirects() {
    return [
      {
        // Tangkap link dari QR Code (https://solvera.id/certificates/...)
        source: "/certificates/:id",
        // Lempar ke Aplikasi Storage (Halaman Verify)
        destination: "https://solvera-storage.vercel.app/verify/:id", 
        permanent: false, // false = 307 Temporary Redirect (Lebih aman jika nanti berubah lagi)
      },
    ];
  },
  // Bagian Rewrites Tetap Ada (Jangan Dihapus)
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