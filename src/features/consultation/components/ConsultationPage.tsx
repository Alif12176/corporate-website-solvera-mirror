"use client";

import { ConsultationHero } from "./ConsultationHero";
import { ConsultationContent } from "./ConsultationContent";
import { ConsultationProcess } from "./ConsultationProcess";
import { ConsultationCompetency } from "./ConsultationCompetency";
import { ProcessTimeline } from "./ProcessTimeline";
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA";
import { WhatsAppFAB } from "@/features/layout/components/WhatsAppFAB";
import { Service } from "../data/service";

export const ConsultationPage = ({ service }: { service: Service }) => {
    return (
        <main className="flex flex-col w-full">
            <ConsultationHero image={service.hero.bg_image} title={service.hero.heading} subtitle={service.hero.tagline} />
            <ConsultationContent features={service.focus_section} />
            <ProcessTimeline layout={service.quick_steps_section.layout} heading={service.quick_steps_section.heading} subheading={service.quick_steps_section.subheading} footer={service.quick_steps_section.footer} items={service.quick_steps_section.items} />
            <ConsultationProcess layout={service.methodology_section.layout} heading={service.methodology_section.heading} description={service.methodology_section.description} footer={service.methodology_section.footer} items={service.methodology_section.items} />
            <ConsultationCompetency heading={service.competency_section.heading} description={service.competency_section.description} footer={service.competency_section.footer} items={service.competency_section.items} />
            <ConsultationCTA />
            <WhatsAppFAB />
        </main>
    );
};
