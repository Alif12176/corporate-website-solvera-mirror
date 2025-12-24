import { getPelatihanBySlug } from "@/features/pelatihan/api/pelatihan";
import { PelatihanPage } from "@/features/pelatihan/components/PelatihanPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Pelatihan dan Sertifikasi - Solvera.id",
    description: "Tingkatkan kompetensi profesional Anda melalui program pelatihan dan sertifikasi berkualitas dari Solvera.",
};

export default async function Page() {
    const data = await getPelatihanBySlug("pelatihan-sertifikasi");

    if (!data) {
        return notFound();
    }

    return <PelatihanPage service={data} />;
}
