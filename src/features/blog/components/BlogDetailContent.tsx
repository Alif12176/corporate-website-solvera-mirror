"use client";

import React from 'react';
import { Button } from '@/features/layout/components/Button';
import { Input } from "@heroui/react";
import { BlogPost } from '../data/posts';

interface BlogDetailContentProps {
    post: BlogPost;
}

export const BlogDetailContent = ({ post }: BlogDetailContentProps) => {
    return (
        <section className="bg-background pb-section-medium-desktop">
            <div className='container mx-auto px-page-global'>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <article
                            className="prose prose-lg max-w-none prose-headings:text-brand-primary prose-p:text-brand-text-secondary prose-strong:text-brand-text-primary"
                            dangerouslySetInnerHTML={{ __html: post.content || '' }}
                        />
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 bg-brand-primary-subtle rounded-2xl p-8 flex flex-col gap-6">
                            <h3 className="text-2xl font-semibold text-brand-primary">
                                Siap optimalkan bisnis Anda?
                            </h3>
                            <p className="text-brand-text-secondary">
                                Dapatkan wawasan, tren, dan berita terbaru dari Solvera.
                            </p>
                            <div className="flex flex-col gap-3">
                                <Input
                                    type="email"
                                    placeholder="Alamat Email Anda"
                                    classNames={{
                                        inputWrapper: "bg-white border-brand-border-subtle h-[48px]",
                                        input: "text-brand-text-primary placeholder:text-brand-text-secondary"
                                    }}
                                />
                                <Button color="primary" className="h-[48px] w-full bg-brand-primary text-white font-medium rounded-md">
                                    Bergabung
                                </Button>
                            </div>
                            <p className="text-xs text-brand-text-secondary">
                                Dengan berlangganan, Anda menerima Kebijakan Privasi kami dan setuju untuk menerima pembaruan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
