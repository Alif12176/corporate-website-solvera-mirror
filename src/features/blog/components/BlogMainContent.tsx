"use client";

import React from 'react';
import { BlogSidebar } from './BlogSidebar';
import { BlogCard } from './BlogCard';
import { Pagination } from "@heroui/react";
import { FEATURED_POST, BLOG_POSTS } from '../data/posts';

export const BlogMainContent = () => {
    // Use the first 4 posts for the grid
    const gridPosts = BLOG_POSTS.slice(0, 4);

    return (
        <section className="bg-background">
            <div className='container mx-auto py-section-large-desktop px-page-global'>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <BlogSidebar />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 flex flex-col gap-12">
                        {/* Featured Post */}
                        <BlogCard
                            image={FEATURED_POST.image}
                            category={FEATURED_POST.category}
                            date={FEATURED_POST.date}
                            title={FEATURED_POST.title}
                            description={FEATURED_POST.description}
                            link={`/blog/${FEATURED_POST.slug}`}
                            orientation="vertical"
                        />

                        {/* Grid Posts */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {gridPosts.map((post) => (
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

                        {/* Pagination */}
                        <div className="flex justify-center mt-8">
                            <Pagination
                                total={99}
                                initialPage={1}
                                size="lg"
                                classNames={{
                                    wrapper: "gap-2",
                                    item: "bg-transparent text-brand-text-secondary hover:bg-brand-primary-subtle hover:text-brand-primary",
                                    cursor: "bg-brand-primary text-white font-bold",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
