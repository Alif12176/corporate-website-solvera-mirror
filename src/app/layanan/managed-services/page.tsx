import ManagedServicesPage from "@/features/managed-services/ManagedServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan - Managed Service - Solvera.id",
  description:
    "Transformasi tantangan operasional menjadi keunggulan kompetitif dengan layanan konsultasi Solvera.",
};

export default function Page() {
  return <ManagedServicesPage />;
}
