import { getTalentaBySlug } from "@/features/talenta-digital/api/talenta";
import { TalentaDigitalPage } from "@/features/talenta-digital/components/TalentaDigitalPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Talenta Digital - Solvera.id",
    description: "Talenta Digital Solvera.id menyajikan informasi, insight, dan artikel seputar pengembangan talenta digital, teknologi, serta tren industri IT."
}

export default async function Page() {
    const data = await getTalentaBySlug("talenta-digital");

    if (!data) {
        return notFound();
    }

    return <TalentaDigitalPage service={data} />
}