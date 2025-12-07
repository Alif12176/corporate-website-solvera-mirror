import { TalentaDigitalPage } from "@/features/talenta-digital/TalentaDigitalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Talenta Digital - Solvera.id",
    description: "Talenta Digital Solvera.id menyajikan informasi, insight, dan artikel seputar pengembangan talenta digital, teknologi, serta tren industri IT."
}

export default function Page() {
    return <TalentaDigitalPage />
}