import { PrivacyPolicy } from "@/features/privacy-policy/components/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kebijakan Privasi - Solvera.id",
    description: "Kebijakan Privasi Solvera.id menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.",
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicy />;
}
