"use client";

import React from 'react';
import { BlogCard } from './BlogCard';
import { useArticles } from '../hooks/useBlog';
import { Skeleton } from "@heroui/react";

export const BlogNewPost = () => {
    const { data, isLoading } = useArticles({
        page: 1,
        limit: 4
    });

    const recentPosts = data?.data?.items || [];

    if (isLoading) {
        return (
            <section className="bg-background">
                <div className="container mx-auto py-12 md:py-16 px-page-global flex flex-col gap-8">
                    <div className="flex flex-col gap-4 mb-4">
                        <Skeleton className="w-48 h-6 rounded-lg" />
                        <Skeleton className="w-96 h-10 rounded-lg" />
                        <Skeleton className="w-72 h-6 rounded-lg" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-4">
                                <Skeleton className="w-1/2 aspect-4/3 rounded-xl" />
                                <div className="flex flex-col gap-2 w-1/2">
                                    <Skeleton className="w-20 h-4 rounded-md" />
                                    <Skeleton className="w-full h-6 rounded-md" />
                                    <Skeleton className="w-full h-16 rounded-md" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (recentPosts.length === 0) return null;

    return (
        <section className="bg-background">
            <div className="container mx-auto py-12 md:py-16 px-page-global flex flex-col gap-10">

                <div className="flex flex-col gap-3 lg:max-w-3xl">
                    <p className="text-body font-semibold text-brand-text-secondary">Berita dan Artikel</p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-brand-primary leading-tight">
                        Postingan Terbaru
                    </h2>
                    <p className="text-body text-brand-text-secondary">
                        Tetap terinformasi dengan wawasan dan tren terbaru.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12">
                    {recentPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            image={post.image_url}
                            category={post.categories?.[0]?.name || "Umum"}
                            date={post.published_at}
                            title={post.title}
                            description={post.summary}
                            link={`/blog/${post.slug}`}
                            orientation="horizontal"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};