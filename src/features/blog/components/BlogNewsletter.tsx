"use client";

import React from 'react';
import { Button } from '@/features/layout/components/Button';
import { Input } from "@heroui/react";

export const BlogNewsletter = () => {
    return (
        <section className="bg-background">
            <div className='container mx-auto py-section-medium-desktop px-page-global'>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div className="flex flex-col gap-4 max-w-[600px]">
                        <h2 className="text-4xl font-semibold text-brand-primary">
                            Siap Optimalkan Bisnis Anda?
                        </h2>
                        <p className="text-body text-brand-text-secondary">
                            Dapatkan wawasan, tren, dan berita terbaru dari Solvera.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full max-w-[500px]">
                        <div className="flex gap-2" suppressHydrationWarning>
                            <Input
                                type="email"
                                placeholder="Alamat Email Anda"
                                classNames={{
                                    inputWrapper: "bg-brand-primary-subtle border-brand-border-subtle h-[48px]",
                                    input: "text-brand-text-primary placeholder:text-brand-text-secondary"
                                }}
                            />
                            <Button color="primary" className="h-[48px] px-8 bg-brand-primary text-white font-medium rounded-md">
                                Bergabung
                            </Button>
                        </div>
                        <p className="text-xs text-brand-text-secondary">
                            Dengan berlangganan, Anda menerima Kebijakan Privasi kami dan setuju untuk menerima pembaruan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
