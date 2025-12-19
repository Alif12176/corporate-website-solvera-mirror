import React from "react";
import { MintaDemoForm, MintaDemoHero } from "@/features/minta-demo";

export default function MintaDemoPage() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <MintaDemoForm />
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <MintaDemoHero />
            </div>
        </div>
    );
}
