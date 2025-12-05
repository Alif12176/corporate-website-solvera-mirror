"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

interface BlogCardProps {
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
    link: string;
    orientation?: 'vertical' | 'horizontal';
}

export const BlogCard = ({ image, category, date, title, description, link, orientation = 'vertical' }: BlogCardProps) => {
    const isHorizontal = orientation === 'horizontal';

    return (
        <div className={`flex flex-col ${isHorizontal ? 'lg:flex-row' : ''} gap-4 group cursor-pointer`}>
            <div className={`relative w-full ${isHorizontal ? 'lg:w-1/2' : ''} aspect-4/3 overflow-hidden rounded-2xl`}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className={`flex flex-col gap-2 ${isHorizontal ? 'lg:w-1/2 justify-center' : ''}`}>
                <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="px-3 py-1 bg-brand-primary text-white rounded-md">
                        {category}
                    </span>
                    <span className="text-brand-text-secondary">
                        {date}
                    </span>
                </div>
                <h3 className="text-2xl font-semibold text-brand-primary group-hover:text-brand-primary/80 transition-colors line-clamp-2">
                    {title}
                </h3>
                <p className="text-brand-text-secondary line-clamp-3">
                    {description}
                </p>
                <Link href={link} className="flex items-center gap-2 text-brand-primary font-semibold mt-2 group-hover:gap-3 transition-all">
                    Baca lebih lanjut <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};
