"use client";

import { ManagementHero } from "./ManagementHero";
import { ManagementOptimization } from "./ManagementOptimization";
import { ManagementFeatures } from "./ManagementFeatures";
import { ManagementCTA } from "./ManagementCTA";
import { Service } from "../data/service";

export const ManagementPage = ({ service }: { service: Service }) => {
    return (
        <main className="flex flex-col w-full">
            <ManagementHero heading={service.hero.heading} tagline={service.hero.tagline} bg_image={service.hero.bg_image} />
            <ManagementOptimization tagline={service.focus_section.tagline} heading={service.focus_section.heading} description={service.focus_section.description} items={service.focus_section.items} />
            <ManagementFeatures layout={service.methodology_section.layout} heading={service.methodology_section.heading} description={service.methodology_section.description} footer={service.methodology_section.footer} items={service.methodology_section.items} />
            <ManagementCTA />
        </main>
    );
};
