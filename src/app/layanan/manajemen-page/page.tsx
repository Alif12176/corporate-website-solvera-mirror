import { ManagementPage } from "@/features/management/components/ManagementPage";
import { Metadata } from "next";
import { getManagementBySlug } from "@/features/management/api/management";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Manajemen Bisnis & Optimalisasi Proses - Solvera.id",
    description: "Optimalkan pengelolaan bisnis Anda dengan sistem kustom dari Solvera. Tingkatkan efisiensi operasional dan percepat analisis data.",
};

export default async function Page() {
    const data = await getManagementBySlug("manajemen-bisnis");

    if (!data) {
        return notFound();
    }

    return <ManagementPage service={data} />;
}
