import { PelatihanPage } from "@/features/pelatihan/PelatihanPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pelatihan dan Sertifikasi - Solvera.id",
    description: "Tingkatkan kompetensi profesional Anda melalui program pelatihan dan sertifikasi berkualitas dari Solvera.",
};

export default function Page() {
    return <PelatihanPage />;
}
