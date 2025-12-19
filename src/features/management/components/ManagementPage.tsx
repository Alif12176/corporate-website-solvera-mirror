"use client";

import { ManagementHero } from "./ManagementHero";
import { ManagementOptimization } from "./ManagementOptimization";
import { ManagementFeatures } from "./ManagementFeatures";
import { ManagementCTA } from "./ManagementCTA";

export const ManagementPage = () => {
    return (
        <main className="flex flex-col w-full">
            <ManagementHero />
            <ManagementOptimization />
            <ManagementFeatures />
            <ManagementCTA />
        </main>
    );
};
