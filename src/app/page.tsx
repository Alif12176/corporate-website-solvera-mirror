import HomePage from "@/features/home/components/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solvera - Mitra Transformasi Digital & Solusi ERP Terdepan",

  description: "Optimalkan operasional bisnis Anda dengan solusi ERP terintegrasi, konsultasi IT ahli, dan strategi transformasi digital dari Solvera Indonesia.",

  openGraph: {
    title: "Solvera - Mitra Transformasi Digital & Solusi ERP Terdepan",
    description: "Solusi teknologi informasi inovatif untuk pertumbuhan bisnis yang berkelanjutan.",
    url: "https://solvera.id",
    siteName: "Solvera Indonesia",
    images: [
      {
        url: "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/logo%20solvera%20new.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}