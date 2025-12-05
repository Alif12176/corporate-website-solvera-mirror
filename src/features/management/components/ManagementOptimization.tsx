"use client";

import { LuFileCheck, LuArchive, LuUsers } from "react-icons/lu";

export const ManagementOptimization = () => {
    const cards = [
        {
            icon: <LuFileCheck size={32} />,
            title: "Optimalisasi Alur Kerja",
            description: "Menyederhanakan dan menstandarisasi alur kerja Anda. Kami menyediakan sistem pengelolaan proses yang terstruktur untuk meningkatkan efisiensi dan produktivitas tim"
        },
        {
            icon: <LuArchive size={32} />,
            title: "Manajemen Dokumen Digital",
            description: "Sentralisasikan file dan dokumen perusahaan dalam satu platform digital yang aman. Menghemat ruang penyimpanan fisik dan memberikan akses data online kapan saja, di mana saja"
        },
        {
            icon: <LuUsers size={32} />,
            title: "Manajemen Sumber Daya Manusia",
            description: "Memudahkan monitoring performa, manajemen job description, dan pelacakan absensi karyawan melalui satu platform teknologi terintegrasi"
        }
    ];

    return (
        <section className="bg-background py-section-large-desktop">
            <div className="container mx-auto px-page-global text-center">
                <div className="mb-12">
                    <span className="text-body font-semibold text-brand-text-secondary uppercase tracking-wider mb-2 block">
                        Solusi Inovatif untuk Bisnis Anda
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-h2 font-medium text-brand-primary leading-tight">
                        Optimalisasi Proses Bisnis End-to-End
                    </h2>
                    <p className="text-brand-text-secondary text-body-md mt-4 max-w-[900px] mx-auto">
                        Jalankan bisnis Anda secara profesional dengan sistem yang terstruktur dan terorganisir. Solvera menyediakan platform yang dapat dikustomisasi untuk operasional inti perusahaan, memastikan model bisnis Anda berjalan secara efektif dan optimal untuk hasil yang terukur
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-[#EEF2FF] p-8 rounded-lg flex flex-col items-start text-left gap-4 hover:shadow-lg transition-shadow duration-300">
                            <div className="text-brand-text-primary mb-2">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-brand-text-primary">
                                {card.title}
                            </h3>
                            <p className="text-brand-text-secondary text-body-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
