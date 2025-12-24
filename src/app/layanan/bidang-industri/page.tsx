import BidangIndustriPage from "@/features/bidang-industri/components/BidangIndustriPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan - Bidang Industri - Solvera.id",
  description:
    "Transformasi tantangan operasional menjadi keunggulan kompetitif dengan layanan konsultasi Solvera.",
};

export default async function Page() {
  return <BidangIndustriPage />;
}
