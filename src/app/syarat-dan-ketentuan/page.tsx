import { TermsConditions } from "@/features/terms-conditions/components/TermsConditions";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Syarat dan Ketentuan - Solvera.id",
    description: "Syarat dan Ketentuan Solvera.id menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.",
};

export default function SyaratDanKetentuanPage() {
    return <TermsConditions />;
}
