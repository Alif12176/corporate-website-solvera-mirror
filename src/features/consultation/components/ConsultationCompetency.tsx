"use client";

import { Progress } from "@heroui/react";
import Image from "next/image";

export const ConsultationCompetency = () => {
    const skills = [
        { label: "Strategy & Planning", value: 80 },
        { label: "Development & Implementation", value: 60 },
        { label: "Transformasi Digital", value: 80 },
        { label: "Konsultasi & Knowledge Transfer", value: 20 },
        { label: "Support & Maintenance", value: 40 },
    ];

    return (
        <section className="bg-background py-section-large-desktop">
            <div className="container mx-auto px-page-global">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <Image
                                src="/vector/undraw_meeting_dunc.svg"
                                alt="Consultation Competency Illustration"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div>
                            <span className="text-body font-semibold text-brand-text-secondary uppercase tracking-wider mb-2 block">
                                Kompetensi Inti SOLVERA
                            </span>
                            <h2 className="text-4xl md:text-h2 font-medium text-brand-primary leading-tight">
                                Keahlian Terukur di Setiap Fase Proyek
                            </h2>
                            <p className="text-brand-text-secondary text-body-md leading-relaxed mt-4">
                                Kami memiliki keahlian mendalam di setiap tahap proyek, mulai dari perencanaan strategis hingga dukungan pasca implementasi, untuk memastikan keberhasilan transformasi digital perusahaan Anda.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {skills.map((skill, idx) => (
                                <div key={idx} className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-body font-semibold text-brand-text-secondary">
                                            {skill.label}
                                        </span>
                                        <span className="text-body-sm text-brand-text-secondary">
                                            {skill.value}%
                                        </span>
                                    </div>
                                    <Progress
                                        aria-label={skill.label}
                                        value={skill.value}
                                        className="max-w-full"
                                        classNames={{
                                            indicator: "bg-brand-primary",
                                            track: "bg-brand-primary-subtle/50"
                                        }}
                                        size="md"
                                        radius="sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
