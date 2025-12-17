
import { AboutUsPage } from "@/features/about-us/components/AboutUsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Solvera.id",
    description: "Halaman About Us Solvera.id berisi informasi tentang profil perusahaan, visi, misi, dan komitmen Solvera.id dalam menghadirkan solusi dan layanan di bidang teknologi dan IT."
}

export default function Page() {
    return <AboutUsPage />
}