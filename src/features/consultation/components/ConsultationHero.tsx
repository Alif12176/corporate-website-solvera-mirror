"use client";

import { Button } from "@/features/layout/components/Button";
import Link from "next/link";
import Image from "next/image";

interface Hero {
    image: string;
    title: string;
    subtitle: string;
}

export const ConsultationHero = ({ image, title, subtitle }: Hero) => {
    return (
        <section className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">
            {/* Background Overlay (Placeholder for Image) */}
            <Image
                src={image}
                alt="Consultation Hero"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1C1C1CB2] z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto max-w-[768px] text-center flex flex-col items-center gap-6">
                <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium text-white leading-tight ">
                    {title}
                </h1>
                <div className="flex flex-col gap-0">
                    <p className="text-gray-200 text-body-sm">
                        {subtitle}
                    </p>
                </div>
                <div className="animate-in delay-200">
                    <Button
                        variant="default"
                        className="px-6 py-2 rounded-md mr-4"
                        as={Link}
                        href='/minta-demo'
                    >
                        Jadwalkan Demo
                    </Button>
                    <Button
                        variant="alternative"
                        className="px-6 py-2 rounded-md"
                        as={Link}
                        href='/hubungi-kami'
                    >
                        Hubungi Kami
                    </Button>
                </div>
            </div>
        </section>
    );
};
