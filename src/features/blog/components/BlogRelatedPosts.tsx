"use client";

import React from 'react';
import { BlogCard } from './BlogCard';
import { BlogPost } from '../data/posts';
import { Button } from '@/features/layout/components/Button';

interface BlogRelatedPostsProps {
    posts: BlogPost[];
}

export const BlogRelatedPosts = ({ posts }: BlogRelatedPostsProps) => {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="bg-background pb-section-large-desktop">
            <div className='container mx-auto px-page-global'>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col gap-2">
                            <p className="text-body font-semibold text-brand-text-secondary">Berita Dan Artikel</p>
                            <h2 className="text-4xl font-medium text-brand-primary">Berita Terkait dari Blog</h2>
                            <p className="text-body text-brand-text-secondary">Berita dan wawasan terbaru dari perspektif kami.</p>
                        </div>
                        <Button className="hidden md:flex bg-brand-primary text-white px-6">
                            Lihat semua
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard
                                key={post.id}
                                image={post.image}
                                category={post.category}
                                date={post.date}
                                title={post.title}
                                description={post.description}
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
