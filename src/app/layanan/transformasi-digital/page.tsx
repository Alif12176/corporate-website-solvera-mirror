import { getTransformasiDigitalBySlug } from "@/features/transformasi-digital/api/transformasi-digital";
import { TransformasiDigitalPage } from "@/features/transformasi-digital/components/TransformasiDigitalPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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

export default async function Page() {
  const data = await getTransformasiDigitalBySlug("transformasi-digital");

  if (!data) {
    return notFound();
  }

  return <TransformasiDigitalPage service={data} />;
}