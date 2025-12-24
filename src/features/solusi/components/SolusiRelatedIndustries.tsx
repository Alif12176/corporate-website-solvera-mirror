'use client';

import React from 'react';
import { IndustrySection } from '../data/solutions';
import {
    Home,
    Factory,
    Truck,
    Car,
    Tag,
    ArrowRight,
    Building2,
    Briefcase
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    industry_section: IndustrySection;
}

// Map string icon names to Lucide components
const IconMap: { [key: string]: React.ElementType } = {
    'Home': Home,
    'home': Home,
    'properti': Home,
    'Factory': Factory,
    'factory': Factory,
    'manufaktur': Factory,
    'Truck': Truck,
    'truck': Truck,
    'logistik': Truck,
    'Car': Car,
    'car': Car,
    'otomotif': Car,
    'Tag': Tag,
    'tag': Tag,
    'ritel': Tag,
    'Building2': Building2,
    'Briefcase': Briefcase,
};

export const SolusiRelatedIndustries = ({ industry_section }: Props) => {

    // Helper to render icon
    const renderIcon = (iconName: string, title: string) => {
        // Check if it's a URL
        if (iconName.startsWith('/') || iconName.startsWith('http')) {
            return (
                <Image
                    src={iconName}
                    alt={title}
                    width={48}
                    height={48}
                    className="text-gray-800"
                />
            );
        }

        // Check if it's in our map
        const IconComponent = IconMap[iconName] || IconMap[Object.keys(IconMap).find(k => iconName.toLowerCase().includes(k)) || ''] || Building2;

        return <IconComponent size={48} className="text-gray-800" strokeWidth={1.5} />;
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">
                        {industry_section.section_subtitle || "Fleksibel untuk Berbagai Industri"}
                    </p>
                    <h2 className="text-4xl font-bold text-blue-700 mb-6">
                        {industry_section.section_title}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Solvera hadir sebagai solusi terpadu untuk perusahaan lintas skala dan industri,
                        mencakup Enterprise, Service & Commerce, serta Sektor Spesialis,
                        dengan sistem yang efisien, real-time, dan scalable
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {industry_section.industries.map((industry, index) => {
                        // Check if it's the last item and odd number, to center it/span full width?
                        // Design shows 5 items, last one centered.
                        // We can use style logic for that.
                        const isLastAndOdd = index === industry_section.industries.length - 1 && industry_section.industries.length % 2 !== 0;

                        return (
                            <div
                                key={industry.id}
                                className={`bg-blue-50 bg-opacity-50 p-8 rounded-xl flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow duration-300 ${isLastAndOdd ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}
                            >
                                {/* Icon */}
                                <div className="shrink-0 p-2">
                                    {renderIcon(industry.icon, industry.name)}
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {industry.name}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {industry.description}
                                    </p>

                                    <Link
                                        href={`/products/${industry.slug}`}
                                        className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors mt-2"
                                    >
                                        Pelajari Selengkapnya
                                        <ArrowRight size={18} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
