'use client';

import React from 'react';
import { CoreSolution } from '../data/solutions';
import {
    Link,
    Activity,
    GitMerge,
    ShieldCheck,
    CheckCircle,
    Zap,
    TrendingUp
} from 'lucide-react';
import Image from 'next/image';

interface Props {
    core_solution: CoreSolution;
}

// Map string icon names to Lucide components
const IconMap: { [key: string]: React.ElementType } = {
    'Link': Link,
    'link': Link,
    'Activity': Activity,
    'activity': Activity,
    'pulse': Activity,
    'GitMerge': GitMerge,
    'git-merge': GitMerge,
    'flow': GitMerge,
    'ShieldCheck': ShieldCheck,
    'shield-check': ShieldCheck,
    'security': ShieldCheck,
    'CheckCircle': CheckCircle,
    'Zap': Zap,
    'TrendingUp': TrendingUp
};

export const SolusiAdvantages = ({ core_solution }: Props) => {

    // Helper to render icon
    const renderIcon = (iconName: string | null, title: string) => {

        if (!iconName) {
            return <Activity size={48} className="text-blue-700" strokeWidth={1.5} />;
        }

        if (iconName.startsWith('/') || iconName.startsWith('http')) {
            return (
                <Image
                    src={iconName}
                    alt={title}
                    width={48}
                    height={48}
                    className="text-blue-700"
                />
            );
        }

        let IconComponent = IconMap[iconName];
        if (!IconComponent) {
            const key = Object.keys(IconMap).find(k => iconName.toLowerCase().includes(k.toLowerCase()));
            if (key) IconComponent = IconMap[key];
        }

        if (!IconComponent) IconComponent = Activity; // Fallback

        return <IconComponent size={48} className="text-blue-700" strokeWidth={1.5} />;
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-700 mb-6">
                        {core_solution.section_title}
                    </h2>
                    <p className="text-gray-800 text-lg max-w-3xl mx-auto leading-relaxed">
                        {core_solution.section_subtitle}
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {core_solution.items.map((item) => (
                        <div key={item.id} className="flex flex-col items-center">
                            {/* Icon Wrapper */}
                            <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                                {renderIcon(item.icon, item.title)}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-blue-700 leading-snug">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="mt-2 text-gray-600">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
