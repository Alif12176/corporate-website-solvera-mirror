import React from 'react';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts } from '@/features/blog/data/posts';
import { BlogDetailHeader } from '@/features/blog/components/BlogDetailHeader';
import { BlogDetailContent } from '@/features/blog/components/BlogDetailContent';
import { BlogRelatedPosts } from '@/features/blog/components/BlogRelatedPosts';

interface BlogDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(slug);

    return (
        <main className="flex flex-col w-full">
            <BlogDetailHeader post={post} />
            <BlogDetailContent post={post} />
            <BlogRelatedPosts posts={relatedPosts} />
        </main>
    );
}
