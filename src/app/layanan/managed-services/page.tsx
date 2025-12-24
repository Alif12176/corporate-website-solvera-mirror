import { getManagedServicesBySlug } from "@/features/managed-services/api/managed-services";
import ManagedServicesPage from "@/features/managed-services/components/ManagedServicesPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Layanan - Managed Service - Solvera.id",
  description:
    "Transformasi tantangan operasional menjadi keunggulan kompetitif dengan layanan konsultasi Solvera.",
};

export default async function Page() {
  const data = await getManagedServicesBySlug("managed-service");

  if (!data) {
    return notFound();
  }

  return <ManagedServicesPage service={data} />;
}
