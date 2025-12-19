"use client";

import { Button, Input } from "@heroui/react";

export const ManagementCTA = () => {
    return (
        <section className="bg-background py-section-large-desktop">
            <div className="container mx-auto px-page-global">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-4 max-w-[600px]">
                        <h2 className="text-3xl md:text-4xl font-medium text-brand-primary">
                            Siap Optimalkan Bisnis Anda?
                        </h2>
                        <p className="text-brand-text-secondary text-body-md">
                            Dapatkan wawasan, tren, dan berita terbaru dari Solvera.
                        </p>
                    </div>

                    <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 items-center">
                        <Input
                            type="email"
                            placeholder="Alamat Email Anda"
                            className="w-full sm:w-[300px]"
                            classNames={{
                                inputWrapper: "bg-[#EEF2FF] border border-blue-200 h-[48px]",
                            }}
                        />
                        <Button
                            color="primary"
                            size="lg"
                            radius="sm"
                            className="w-full sm:w-auto font-semibold px-8 h-[48px]"
                        >
                            Bergabung
                        </Button>
                    </div>
                </div>
                <div className="mt-4 text-right md:text-right w-full">
                    <p className="text-[10px] text-brand-text-secondary max-w-[400px] ml-auto">
                        Dengan berlangganan, Anda menerima Kebijakan Privasi kami dan setuju untuk menerima pembaruan.
                    </p>
                </div>
            </div>
        </section>
    );
};
