'use client';

import React from 'react';
import {
    Target,
    Filter,
    ClipboardList,
    RefreshCw,
    LineChart,
    Link as LinkIcon
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
        icon: LinkIcon,
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
                            {/* Icon Wrapper */}
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 h-12 w-12 flex items-center justify-center">
                                {(() => {
                                    // LOGIC PENANGANAN IKON (FIX ERROR DISINI)
                                    const rawIcon = feature.icon;

                                    // 1. Jika ikon berupa String (URL atau nama file)
                                    if (typeof rawIcon === 'string') {
                                        let iconSrc = rawIcon;

                                        // FIX: Membersihkan data kotor dari backend ("chartbarhttps://...")
                                        if (iconSrc.startsWith('chartbarhttp')) {
                                            iconSrc = iconSrc.replace('chartbar', '');
                                        }

                                        // Render sebagai Image jika URL valid
                                        if (iconSrc.startsWith('http') || iconSrc.startsWith('/')) {
                                            return (
                                                <div className="relative w-12 h-12">
                                                    <Image
                                                        src={iconSrc}
                                                        alt={feature.title}
                                                        fill
                                                        sizes="48px"
                                                        className="text-blue-700 object-contain"
                                                    />
                                                </div>
                                            );
                                        }

                                        // Fallback jika string tidak valid (cegah crash)
                                        return null;
                                    }

                                    // 2. Jika ikon berupa React Component (Lucide)
                                    if (rawIcon) {
                                        const IconComponent = rawIcon as React.ElementType;
                                        return (
                                            <IconComponent
                                                size={48}
                                                className="text-blue-700"
                                                strokeWidth={1.5}
                                            />
                                        );
                                    }

                                    return null;
                                })()}
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