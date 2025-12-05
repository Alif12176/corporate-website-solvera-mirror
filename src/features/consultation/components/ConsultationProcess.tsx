"use client";

import { motion } from "framer-motion";

export const ConsultationProcess = () => {
    const steps = [
        {
            number: "01",
            title: "Strategy",
            description: "Strategi ini memberikan panduan komprehensif untuk mengatasi masalah dan mengurangi risiko kesalahan yang mungkin terjadi dalam proses bisnis."
        },
        {
            number: "02",
            title: "Planning",
            description: "Implementasi solusi yang efektif memerlukan perencanaan yang cermat untuk memastikan hasil yang optimal dalam konteks bisnis."
        },
        {
            number: "03",
            title: "Development",
            description: "Pengembangan sistem dirancang untuk mengatasi tantangan bisnis Anda, dengan kemampuan beradaptasi terhadap perubahan yang cepat dan dinamis."
        },
        {
            number: "04",
            title: "Quick Launch",
            description: "Secara konsisten, lakukan pengujian dan luncurkan modul sesuai dengan target yang telah ditetapkan untuk mencapai efisiensi yang lebih baik."
        }
    ];

    return (
        <section className="bg-background py-section-large-desktop">
            <div className="container mx-auto px-page-global">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Intro */}
                    <div className="lg:w-5/12 lg:sticky lg:top-24 h-fit">
                        <span className="text-body font-semibold text-brand-text-secondary uppercase tracking-wider mb-4 block">
                            Proses Kami
                        </span>
                        <h2 className="text-4xl md:text-h2 font-medium text-brand-primary leading-tight mb-6">
                            Didesain khusus untuk industri
                        </h2>
                        <p className="text-brand-text-secondary text-body-md leading-relaxed">
                            Strategi memberikan gambaran besar dari alur penyelesaian masalah dan meminimalisir potensi kesalahan
                        </p>
                    </div>

                    {/* Right Column: Timeline */}
                    <div className="lg:w-7/12 relative pl-8 border-l-2 border-brand-primary/20">
                        {/* Vertical Line is created by the border-l above */}

                        <div className="flex flex-col gap-16">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative">
                                    {/* Dot Indicator */}
                                    <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-brand-primary border-4 border-background" />

                                    <div className="flex flex-col gap-2">
                                        <span className="text-5xl md:text-6xl font-medium text-brand-primary">
                                            {step.number}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-medium text-brand-primary">
                                            {step.title}
                                        </h3>
                                        <p className="text-brand-text-secondary text-body-md leading-relaxed max-w-xl mt-2">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
