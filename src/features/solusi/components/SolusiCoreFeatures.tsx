'use client';

import React from 'react';
import {
    Target,
    Filter,
    ClipboardList,
    RefreshCw,
    LineChart,
    Link
} from 'lucide-react';
import Image from 'next/image';

interface Props {
    core_features: {
        title: string;
        description: string;
        icon: string | React.ElementType;
    }[];
}

const dummyCoreFeatures = [
    {
        title: "Lead & Opportunity Tracking",
        description: "Melacak perjalanan prospek dan status peluang secara menyeluruh.",
        icon: Target,
    },
    {
        title: "Visual Sales Pipeline",
        description: "Tampilan kanban memudahkan melihat progress tiap tahap penjualan.",
        icon: Filter,
    },
    {
        title: "Quotation & Sales Order",
        description: "Pembuatan penawaran cepat yang dapat dikonversi otomatis ke sales order.",
        icon: ClipboardList,
    },
    {
        title: "Activity & Follow-Up Automation",
        description: "Pengaturan pengingat otomatis untuk call, meeting, dan follow-up.",
        icon: RefreshCw,
    },
    {
        title: "Sales Performance Dashboard",
        description: "Dashboard realtime untuk memantau pencapaian, performa tim, dan target.",
        icon: LineChart,
    },
    {
        title: "Integrasi Inventory & Finance",
        description: "Semua transaksi penjualan tersinkron otomatis dengan stok dan laporan keuangan.",
        icon: Link,
    }
];

export const SolusiCoreFeatures = ({ core_features = dummyCoreFeatures }: Props) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="font-medium text-blue-700 mb-4">
                        Fitur Inti Solusi
                    </h2>
                    <p className="text-gray-600 text-medium">
                        Fitur terstruktur untuk mendukung kebutuhan operasional Anda
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {core_features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Icon */}
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {typeof feature.icon === "string" && feature.icon.startsWith("http") ? (
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={48}
                                        height={48}
                                        className="text-blue-700"
                                    />
                                ) : (
                                    (() => {
                                        const Icon = feature.icon as React.ElementType;
                                        return (
                                            <Icon
                                                size={48}
                                                className="text-blue-700"
                                                strokeWidth={1.5}
                                            />
                                        );
                                    })()
                                )}
                            </div>

                            {/* Title */}
                            <p className="text-medium font-bold text-blue-700 mb-3">
                                {feature.title}
                            </p>

                            {/* Description */}
                            <p className="text-brand-text-secondary leading-relaxed max-w-xs mx-auto text-regular font-normal">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
