"use client";

import React from 'react';
import { BlogCard } from './BlogCard';
import { Button, Skeleton } from '@heroui/react';
import { useArticles } from '../hooks/useBlog';

// Update Interface agar menerima currentSlug
interface BlogRelatedPostsProps {
    currentSlug: string;
}

export const BlogRelatedPosts = ({ currentSlug }: BlogRelatedPostsProps) => {
    // Fetch 4 artikel terbaru (ambil lebih dari 3 untuk jaga-jaga kalau ada yang sama dengan currentSlug)
    const { data, isLoading } = useArticles({
        page: 1,
        limit: 4
    });

    const articles = data?.data?.items || [];

    const relatedPosts = articles
        .filter((post) => post.slug !== currentSlug)
        .slice(0, 3);

    if (isLoading) {
        return (
            <section className="bg-background pb-section-large-desktop">
                <div className='container mx-auto px-page-global'>
                    <div className="flex flex-col gap-8">
                        <Skeleton className="w-1/3 h-8 rounded-lg" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <Skeleton className="aspect-video rounded-2xl" />
                                    <Skeleton className="w-3/4 h-6 rounded-lg" />
                                    <Skeleton className="w-full h-20 rounded-lg" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (relatedPosts.length === 0) return null;

    return (
        <section className="bg-background pb-section-large-desktop">
            <div className='container mx-auto px-page-global'>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col gap-2">
                            <p className="text-body font-semibold text-brand-text-secondary">Berita Dan Artikel</p>
                            <h2 className="text-4xl font-medium text-brand-primary">Berita Terkait</h2>
                            <p className="text-body text-brand-text-secondary">Berita dan wawasan terbaru lainnya.</p>
                        </div>
                        <Button className="hidden md:flex bg-brand-primary text-white px-6">
                            Lihat semua
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                image={post.image_url}
                                category={post.categories[0]?.name || "Umum"}
                                date={post.published_at}
                                title={post.title}
                                description={post.summary}
                                link={`/blog/${post.slug}`}
                                orientation="vertical"
                            />
                        ))}
                    </div>

                    <Button className="md:hidden w-full bg-brand-primary text-white mt-4">
                        Lihat semua
                    </Button>
                </div>
            </div>
        </section>
    );
};