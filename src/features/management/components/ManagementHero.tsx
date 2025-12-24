"use client";

import { Button } from "@heroui/react";
import Image from "next/image";

interface ManagementHeroProps {
    heading: string;
    tagline: string;
    bg_image: string;
}

export const ManagementHero = ({ heading, tagline, bg_image }: ManagementHeroProps) => {
    return (
        <section className="relative w-full h-[800px] md:h-[700px] lg:h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bg_image}
                    alt="Manajemen Bisnis Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-page-global text-center flex flex-col items-center gap-6 max-w-[900px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
                    {heading}
                </h1>
                <p className="text-gray-200 text-body-md md:text-lg max-w-[800px]">
                    {tagline}
                </p>
                <Button
                    color="primary"
                    size="lg"
                    radius="sm"
                    className="font-semibold px-8 mt-4"
                >
                    Jadwalkan Konsultasi
                </Button>
            </div>
        </section>
    );
};
