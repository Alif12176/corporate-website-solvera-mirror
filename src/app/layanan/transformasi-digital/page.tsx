import { TransformasiDigitalPage } from "@/features/transformasi-digital/components/TransformasiDigitalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Transformasi Digital - Solvera.id",
  description:
    "Optimalkan operasional bisnis dan buka peluang pertumbuhan baru melalui strategi transformasi digital yang terukur dan inovatif.",
  openGraph: {
    title: "Layanan Transformasi Digital - Solvera.id",
    description: "Strategi digital end-to-end dari konsep hingga implementasi.",
    images: ["/images/og-transformasi-digital.jpg"], // Opsional: Sesuaikan path gambar OG
  },
};

export default function Page() {
  return <TransformasiDigitalPage />;
}