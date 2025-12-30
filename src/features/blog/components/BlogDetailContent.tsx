"use client";

import React from 'react';
import { BlogPost } from '../types';
import { Button, Input } from "@heroui/react";
import { useNewsletter } from '@/features/hooks/useNewsletter';

interface BlogDetailContentProps {
    post: BlogPost;
}

export const BlogDetailContent = ({ post }: BlogDetailContentProps) => {
    const { email, setEmail, isLoading, status, message, subscribe } = useNewsletter();

    return (
        <section className="bg-background pb-section-medium-desktop">
            <div className='container mx-auto px-page-global'>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <article className="w-full">
                            <div
                                className="blog-content w-full max-w-none"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </article>
                    </div>

                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-24 bg-brand-primary-subtle rounded-2xl p-8 flex flex-col gap-6 border border-brand-border-subtle">
                            <h3 className="text-2xl font-semibold text-brand-primary">
                                Siap optimalkan bisnis Anda?
                            </h3>
                            <p className="text-brand-text-secondary">
                                Dapatkan wawasan, tren, dan berita terbaru dari Solvera langsung di inbox Anda.
                            </p>

                            <div className="flex flex-col gap-3">
                                <Input
                                    type="email"
                                    placeholder="Alamat Email Anda"
                                    value={email}
                                    onValueChange={setEmail}
                                    isDisabled={isLoading}
                                    isInvalid={status === "error"}
                                    errorMessage={status === "error" ? message : ""}
                                    classNames={{
                                        inputWrapper: "bg-white border-brand-border-subtle h-[48px]",
                                        input: "text-brand-text-primary placeholder:text-brand-text-secondary"
                                    }}
                                />
                                <Button
                                    color={status === "success" ? "success" : "primary"}
                                    className="h-[48px] w-full font-medium rounded-md shadow-md hover:shadow-lg transition-all"
                                    isLoading={isLoading}
                                    onPress={() => subscribe()}
                                >
                                    {status === "success" ? "Berhasil Bergabung!" : "Bergabung Sekarang"}
                                </Button>
                                {status === "success" && (
                                    <p className="text-xs text-success font-medium text-center mt-1">
                                        {message}
                                    </p>
                                )}
                            </div>

                            <p className="text-xs text-brand-text-secondary/70">
                                Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami. Bebas unsubscribe kapan saja.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};