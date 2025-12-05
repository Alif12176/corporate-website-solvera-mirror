"use client";

import { Button } from "@heroui/react";
import { RiLayoutGridFill, RiAwardFill, RiGroupFill, RiShieldCheckFill } from "react-icons/ri";

export const ConsultationContent = () => {
    const features = [
        {
            icon: RiLayoutGridFill,
            title: "Analisis Kebutuhan Awal",
            description: "Diskusikan tantangan bisnis Anda dengan tim ahli kami. Sesi konsultasi ini berfokus untuk memberikan *insight* strategis dan rekomendasi solusi yang bernilai bagi perusahaan Anda"
        },
        {
            icon: RiAwardFill,
            title: "Solusi Teknologi Digital",
            description: "Kami mengimplementasikan solusi teknologi digital yang dirancang untuk meningkatkan efisiensi operasional dan memastikan bisnis Anda tetap kompetitif di era modern"
        },
        {
            icon: RiGroupFill,
            title: "Konsultasi Virtual yang Fleksibel",
            description: "Lakukan sesi konsultasi strategis dari mana saja. Kami memfasilitasi komunikasi melalui platform pertemuan virtual yang aman dan terintegrasi untuk menjaga kerahasiaan data Anda"
        },
        {
            icon: RiShieldCheckFill,
            title: "Manajemen Akses & Keamanan Data",
            description: "Kami merancang tata kelola (governance) sistem keamanan dan perizinan Anda, menerapkan pembatasan akses data berdasarkan peran untuk menjamin integritas dan kerahasiaan informasi perusahaan"
        }
    ];

    return (
        <section className="bg-background">
            <div className="container mx-auto px-page-global py-section-large-desktop pb-section-medium-mobile">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column: Text */}
                    <div className="lg:w-[400px] flex flex-col gap-6 lg:sticky lg:top-24">
                        <span className="text-body font-semibold text-brand-text-secondary uppercase tracking-wider">
                            Pendekatan Konsultatif Kami
                        </span>
                        <h2 className="text-4xl md:text-h2 font-medium text-brand-primary leading-tight">
                            Fokus Pada Solusi Bernilai Tinggi
                        </h2>
                        <p className="text-brand-text-secondary text-body-md leading-relaxed">
                            Kami mendukung pengembangan bisnis Anda untuk beroperasi secara profesional dengan menerapkan standar kerja yang lebih terstruktur dan terorganisir. Teknologi dari Solvera menyediakan sistem yang mendukung operasional harian perusahaan, sehingga model bisnis Anda dapat berfungsi secara efektif dan optimal.
                        </p>
                        <div className="pt-4">
                            <Button color="primary" size="lg" radius="sm" className="font-semibold">
                                Konsultasi Sekarang
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Grid Cards */}
                    <div className="lg:w-[800px] grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-brand-primary-subtle p-8 rounded-xl flex flex-col gap-4 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <feature.icon className="text-4xl text-foreground" />
                                </div>
                                <h3 className="text-h6 font-medium text-brand-text-secondary">
                                    {feature.title}
                                </h3>
                                <p className="text-body text-brand-text-secondary leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
