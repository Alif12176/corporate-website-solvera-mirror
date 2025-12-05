import React from 'react'
import { BlogCard } from './BlogCard';
import { BLOG_POSTS } from '../data/posts';

export const BlogNewPost = () => {
    // Use the first 4 posts for the new post section
    const recentPosts = BLOG_POSTS.slice(0, 4);

    return (
        <section className="bg-background">
            <div className="container mx-auto py-section-large-desktop px-page-global flex flex-col gap-section-medium-desktop">
                <div className="flex flex-col gap-[16px] lg:max-w-[768px] mb-12">
                    <p className="text-body font-semibold text-brand-text-secondary">Berita dan Artikel</p>
                    <h2 className="text-4xl md:text-h2 font-medium text-brand-primary leading-tight">Postingan terbaru</h2>
                    <p className="text-body text-brand-text-secondary">Tetap terinformasi dengan wawasan dan tren terbaru.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12">
                    {recentPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            image={post.image}
                            category={post.category}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                            link={`/blog/${post.slug}`}
                            orientation="horizontal"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
