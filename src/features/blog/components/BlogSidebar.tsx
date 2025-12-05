"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/features/layout/components/Button';

const CATEGORIES = [
    { name: "Berita keuangan", href: "#" },
    { name: "Tips investasi", href: "#" },
    { name: "Analisis pasar", href: "#" },
    { name: "Profil perusahaan", href: "#" },
];

export const BlogSidebar = () => {
    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-brand-primary">
                Jelajahi topik-topik
            </h3>
            <div className="flex flex-col gap-2 items-start">
                <Button
                    className="w-full justify-start bg-brand-primary text-white font-medium px-4 py-2 rounded-md h-auto"
                >
                    Lihat semua
                </Button>
                {CATEGORIES.map((category) => (
                    <Link
                        key={category.name}
                        href={category.href}
                        className="w-full px-4 py-2 text-sm font-medium text-brand-text-secondary hover:text-brand-primary hover:bg-brand-primary-subtle rounded-md transition-colors"
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};
