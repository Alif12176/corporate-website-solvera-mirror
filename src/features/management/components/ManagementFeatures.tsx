"use client";

import { MethodologyItem } from "../data/service";
import Image from "next/image";

interface ManagementFeaturesProps {
    layout: string;
    heading: string;
    description: string;
    footer: string;
    items: MethodologyItem[];
}

export const ManagementFeatures = ({ layout, heading, description, footer, items }: ManagementFeaturesProps) => {

    return (
        <section className="bg-background py-section-large-desktop">
            <div className="container mx-auto px-page-global text-center">
                <div className="mb-16">
                    <span className="text-body font-semibold text-brand-text-secondary uppercase tracking-wider mb-2 block">
                        {footer}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-brand-primary leading-tight">
                        {heading}
                    </h2>
                    <p className="text-brand-text-secondary text-body-md mt-4 max-w-[900px] mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center gap-4">
                            <div className="mb-4 p-4 bg-blue-50 rounded-full">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-brand-primary">
                                {item.title}
                            </h3>
                            <p className="text-brand-text-secondary text-body-sm leading-relaxed max-w-[300px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
