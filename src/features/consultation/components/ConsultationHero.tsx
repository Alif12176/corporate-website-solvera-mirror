"use client";

import { Button } from "@heroui/react";
import Image from "next/image";

export const ConsultationHero = () => {
    return (
        <section className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">
            {/* Background Overlay (Placeholder for Image) */}
            <Image
                src="/images/img_group1.webp"
                alt="Consultation Hero"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1C1C1CB2] z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto max-w-[768px] text-center flex flex-col items-center gap-6">
                <h1 className="text-4xl md:text-5xl lg:text-h1 font-medium text-white leading-tight ">
                    Transformasi Tantangan Operasional Menjadi Keunggulan Kompetitif
                </h1>
                <div className="flex flex-col gap-0">
                    <p className="text-gray-200 text-body-sm">
                        Kami menganalisis tantangan operasional Anda dan merancang solusi teknologi digital
                    </p>
                    <p className="text-gray-200 text-body-sm">
                        yang terukur untuk mendorong efisiensi, skalabilitas, dan pertumbuhan bisnis
                    </p>
                </div>
                <Button
                    color="primary"
                    size="lg"
                    radius="sm"
                    className="font-semibold px-8"
                >
                    Jadwalkan Konsultasi
                </Button>
            </div>
        </section>
    );
};
