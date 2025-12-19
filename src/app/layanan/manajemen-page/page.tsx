import { ManagementPage } from "@/features/management/components/ManagementPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Manajemen Bisnis & Optimalisasi Proses - Solvera.id",
    description: "Optimalkan pengelolaan bisnis Anda dengan sistem kustom dari Solvera. Tingkatkan efisiensi operasional dan percepat analisis data.",
};

export default function Page() {
    return <ManagementPage />;
}
