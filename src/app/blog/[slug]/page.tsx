import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getArticleBySlug } from '@/features/blog/api/blog';
import { BlogDetailHeader } from '@/features/blog/components/BlogDetailHeader';
import { BlogDetailContent } from '@/features/blog/components/BlogDetailContent';
import { BlogRelatedPosts } from '@/features/blog/components/BlogRelatedPosts';

interface BlogDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const response = await getArticleBySlug(slug);

    if (!response || !response.data) {
        return {
            title: 'Artikel Tidak Ditemukan',
        };
    }

    const post = response.data;

    const plainDescription = post.summary.replace(/<[^>]*>?/gm, '').substring(0, 160);

    return {
        title: `${post.title} - Solvera.id`,
        description: plainDescription,
        openGraph: {
            images: [post.image_url],
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;

    // Fetch data artikel dari API
    const response = await getArticleBySlug(slug);

    if (!response || !response.data) {
        notFound();
    }

    const post = response.data;

    return (
        <main className="flex flex-col w-full">
            <BlogDetailHeader post={post} />
            <BlogDetailContent post={post} />
            <BlogRelatedPosts currentSlug={slug} />
        </main>
    );
}