import { getServiceBySlug } from "@/features/consultation/api/consultation";
import { ConsultationPage } from "@/features/consultation/components/ConsultationPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Layanan Konsultasi - Solvera.id",
  description:
    "Transformasi tantangan operasional menjadi keunggulan kompetitif dengan layanan konsultasi Solvera.",
};

export default async function Page() {
  const data = await getServiceBySlug("konsultasi-bisnis");

  if (!data) {
    return notFound();
  }

  return <ConsultationPage service={data} />;
}
