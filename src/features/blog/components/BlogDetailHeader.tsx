"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft, FaFacebook, FaTwitter, FaLinkedin, FaLink } from 'react-icons/fa6';
import { BlogPost } from '../data/posts';

interface BlogDetailHeaderProps {
    post: BlogPost;
}

export const BlogDetailHeader = ({ post }: BlogDetailHeaderProps) => {
    return (
        <section className="bg-background pt-section-medium-desktop pb-8">
            <div className='container mx-auto px-page-global'>
                <div className="flex flex-col gap-6">
                    {/* Breadcrumb / Back Link */}
                    <Link href="/blog" className="flex items-center gap-2 text-brand-primary font-medium hover:underline w-fit">
                        <FaChevronLeft size={12} />
                        Semua Berita dan Artikel
                    </Link>

                    {/* Category Badge */}
                    <div className="w-fit px-3 py-1 bg-brand-primary text-white rounded-md text-sm font-medium">
                        {post.category}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight max-w-4xl">
                        {post.title}
                    </h1>

                    {/* Hero Image */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mt-4">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Meta Info & Share */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-brand-border-subtle pb-8">
                        <div className="flex gap-8 text-sm text-brand-text-secondary">
                            <div className="flex flex-col">
                                <span className="font-semibold text-brand-text-primary">Ditulis oleh</span>
                                <span>Tim Solvera</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-brand-text-primary">Diterbitkan pada</span>
                                <span>{post.date}</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="p-2 rounded-full bg-brand-primary-subtle text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                                <FaFacebook size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-brand-primary-subtle text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                                <FaTwitter size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-brand-primary-subtle text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                                <FaLinkedin size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-brand-primary-subtle text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                                <FaLink size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
