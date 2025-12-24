"use client";

import { LuFileCheck, LuArchive, LuUsers } from "react-icons/lu";
import { FocusSectionItem } from "../data/service";
import Image from "next/image";

interface ManagementOptimizationProps {
    tagline: string;
    heading: string;
    description: string;
    items: FocusSectionItem[];
}

export const ManagementOptimization = ({ tagline, heading, description, items }: ManagementOptimizationProps) => {
    return (
        <section className="bg-background py-section-large-desktop">
            <div className="container mx-auto px-page-global text-center">
                <div className="mb-12">
                    <span className="text-body font-semibold text-brand-text-secondary uppercase tracking-wider mb-2 block">
                        {tagline}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-brand-primary leading-tight">
                        {heading}
                    </h2>
                    <p className="text-brand-text-secondary text-body-md mt-4 max-w-[900px] mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, idx) => (
                        <div key={idx} className="bg-[#EEF2FF] p-8 rounded-lg flex flex-col items-start text-left gap-4 hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={32}
                                height={32}
                                className="mb-2"
                            />
                            <h3 className="text-xl font-semibold text-brand-text-primary">
                                {item.title}
                            </h3>
                            <p className="text-brand-text-secondary text-body-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
