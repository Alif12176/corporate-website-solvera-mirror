import { ContactForm, ContactHero, ContactInfo, ClientLogos, StrategySection } from "@/features/hubungi-kami";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Hubungi Kami | Solvera",
    description: "Hubungi tim Solvera untuk konsultasi solusi bisnis Anda.",
};

export default function HubungiKamiPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            <ContactForm />
            <ClientLogos />
            <StrategySection />
            <div className="bg-white">
                <ContactInfo />
            </div>
        </main>
    );
}
