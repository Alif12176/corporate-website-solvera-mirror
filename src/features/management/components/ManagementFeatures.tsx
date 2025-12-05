"use client";

import { LuServer, LuFileText } from "react-icons/lu";
import { MdDevices } from "react-icons/md";

export const ManagementFeatures = () => {
    const features = [
        {
            icon: <MdDevices size={40} className="text-brand-primary" />,
            title: "Desain Antarmuka Intuitif",
            description: "Kami merancang antarmuka pengguna yang intuitif dan fungsional, memastikan adopsi cepat serta akses mudah ke data penting untuk operasional sehari-hari."
        },
        {
            icon: <LuServer size={40} className="text-brand-primary" />,
            title: "Akses Terpusat & Navigasi Efisien",
            description: "Dashboard terpusat: memudahkan akses modul dan aplikasi inti, menyederhanakan navigasi dan menghemat waktu pengguna."
        },
        {
            icon: <LuFileText size={40} className="text-brand-primary" />,
            title: "Kolaborasi & Berbagi Dokumen",
            description: "Alur kerja efisien dengan berbagi data dan dokumen aman antar pengguna meningkatkan kolaborasi dan transparansi."
        }
    ];

    return (
        <section className="bg-background py-section-large-desktop">
            <div className="container mx-auto px-page-global text-center">
                <div className="mb-16">
                    <span className="text-body font-semibold text-brand-text-secondary uppercase tracking-wider mb-2 block">
                        Solusi Inovatif untuk Bisnis Anda
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-brand-primary leading-tight">
                        Pengelolaan Bisnis yang Efisien dan Fleksibel
                    </h2>
                    <p className="text-brand-text-secondary text-body-md mt-4 max-w-[900px] mx-auto">
                        Kelola bisnis Anda kapanpun dan dimanapun melalui berbagai perangkat dengan sistem online berbasis cloud. Antarmuka pengguna kami dirancang intuitif untuk menyederhanakan operasional sehari-hari dan mempercepat adopsi pengguna
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center gap-4">
                            <div className="mb-4 p-4 bg-blue-50 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-brand-primary">
                                {feature.title}
                            </h3>
                            <p className="text-brand-text-secondary text-body-sm leading-relaxed max-w-[300px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
