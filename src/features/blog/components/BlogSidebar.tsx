"use client";

import React from 'react';
import { Button, Skeleton } from "@heroui/react";
import { useCategories } from '../hooks/useBlog';

interface BlogSidebarProps {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

export const BlogSidebar = ({ selectedCategory, onSelectCategory }: BlogSidebarProps) => {
    const { data, isLoading } = useCategories();

    if (isLoading) {
        return (
            <div className="flex flex-col gap-4">
                <Skeleton className="rounded-lg w-1/3 h-6" />
                <div className="flex flex-col gap-2">
                    {[1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} className="rounded-md w-full h-10" />
                    ))}
                </div>
            </div>
        );
    }

    const categories = data?.data?.items || [];

    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-brand-primary">
                Jelajahi Topik
            </h3>
            <div className="flex flex-col gap-2 items-start w-full">
                <Button
                    variant={selectedCategory === "" ? "solid" : "light"}
                    color={selectedCategory === "" ? "primary" : "default"}
                    className={`w-full justify-start font-medium px-4 py-2 rounded-md h-auto ${selectedCategory === "" ? "text-white" : "text-brand-text-secondary"
                        }`}
                    onClick={() => onSelectCategory("")}
                >
                    Semua Kategori
                </Button>

                {categories.map((category) => (
                    <Button
                        key={category.id}
                        variant={selectedCategory === category.name ? "solid" : "light"}
                        color={selectedCategory === category.name ? "primary" : "default"}
                        className={`w-full justify-start font-medium px-4 py-2 rounded-md h-auto ${selectedCategory === category.name ? "text-white" : "text-brand-text-secondary"
                            }`}
                        onClick={() => onSelectCategory(category.name)}
                    >
                        {category.name}
                    </Button>
                ))}
            </div>
        </div>
    );
};