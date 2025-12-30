"use client";

import React from 'react';
import { Button } from '@/features/layout/components/Button';
import { Input } from "@heroui/react";
import { useNewsletter } from '@/features/hooks/useNewsletter';

export const BlogNewsletter = () => {
    const { email, setEmail, isLoading, status, message, subscribe } = useNewsletter();

    return (
        <section className="bg-background">
            <div className='container mx-auto py-12 md:py-16 px-page-global'>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 bg-brand-primary-subtle/30 p-8 md:p-12 rounded-2xl">
                    <div className="flex flex-col gap-4 max-w-[600px]">
                        <h2 className="text-4xl font-semibold text-brand-primary">
                            Siap Optimalkan Bisnis Anda?
                        </h2>
                        <p className="text-body text-brand-text-secondary">
                            Dapatkan wawasan, tren, dan berita terbaru dari Solvera.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full max-w-[500px]">
                        <div className="flex gap-2 items-start" suppressHydrationWarning>
                            <div className="w-full">
                                <Input
                                    type="email"
                                    placeholder="Alamat Email Anda"
                                    value={email}
                                    onValueChange={setEmail}
                                    isDisabled={isLoading}
                                    isInvalid={status === "error"}
                                    errorMessage={status === "error" && message}
                                    classNames={{
                                        inputWrapper: "bg-brand-primary-subtle border-brand-border-subtle h-[48px]",
                                        input: "text-brand-text-primary placeholder:text-brand-text-secondary"
                                    }}
                                />
                            </div>
                            <Button
                                color={status === "success" ? "success" : "primary"}
                                className={`h-[48px] px-8 text-white font-medium rounded-md shrink-0 ${status === "success" ? "bg-success" : "bg-brand-primary"}`}
                                isLoading={isLoading}
                                onPress={() => subscribe()}
                            >
                                {status === "success" ? "Sukses" : "Bergabung"}
                            </Button>
                        </div>
                        {status === "success" && (
                            <p className="text-sm text-success font-medium">
                                {message}
                            </p>
                        )}
                        <p className="text-xs text-brand-text-secondary">
                            Dengan berlangganan, Anda menerima Kebijakan Privasi kami dan setuju untuk menerima pembaruan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};