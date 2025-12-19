"use client";

import { ConsultationHero } from "./ConsultationHero";
import { ConsultationContent } from "./ConsultationContent";
import { ConsultationProcess } from "./ConsultationProcess";
import { ConsultationCompetency } from "./ConsultationCompetency";
import { ProcessTimeline } from "./ProcessTimeline";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";

export const ConsultationPage = () => {
    return (
        <main className="flex flex-col w-full">
            <ConsultationHero />
            <ConsultationContent />
            <ProcessTimeline/>
            <ConsultationProcess />
            <ConsultationCompetency />
            <ConsultationCTA />
        </main>
    );
};
