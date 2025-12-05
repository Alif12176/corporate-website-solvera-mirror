import { ConsultationPage } from "@/features/consultation/components/ConsultationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Layanan Konsultasi - Solvera.id",
    description: "Transformasi tantangan operasional menjadi keunggulan kompetitif dengan layanan konsultasi Solvera.",
};

export default function Page() {
    return <ConsultationPage />;
}
