"use client";

import { Button, Input } from "@heroui/react";
import { useNewsletter } from "@/features/hooks/useNewsletter";

export const ManagementCTA = () => {
    const { email, setEmail, isLoading, status, message, subscribe } = useNewsletter();

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

                    <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div className="w-full sm:w-[300px]">
                            <Input
                                type="email"
                                placeholder="Alamat Email Anda"
                                className="w-full"
                                value={email}
                                onValueChange={setEmail}
                                isDisabled={isLoading}
                                isInvalid={status === "error"}
                                errorMessage={status === "error" ? message : ""}
                                classNames={{
                                    inputWrapper: "bg-[#EEF2FF] border border-blue-200 h-[48px]",
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') subscribe();
                                }}
                            />
                            {(status === "success" || status === "info") && (
                                <p className={`text-xs font-medium mt-1 sm:hidden ${status === "success" ? "text-success" : "text-blue-600"}`}>
                                    {message}
                                </p>
                            )}
                        </div>

                        <Button
                            color={status === "success" ? "success" : "primary"}
                            size="lg"
                            radius="sm"
                            className="w-full sm:w-auto font-semibold px-8 h-[48px]"
                            isLoading={isLoading}
                            onPress={subscribe}
                        >
                            {status === "success" ? "Berhasil" : "Bergabung"}
                        </Button>
                    </div>
                </div>

                <div className="mt-4 text-right md:text-right w-full">
                    {(status === "success" || status === "info") && (
                        <p className={`text-xs font-medium mb-1 hidden sm:block ${status === "success" ? "text-success" : "text-blue-600"}`}>
                            {message}
                        </p>
                    )}
                    <p className="text-[10px] text-brand-text-secondary max-w-[400px] ml-auto">
                        Dengan berlangganan, Anda menerima Kebijakan Privasi kami dan setuju untuk menerima pembaruan.
                    </p>
                </div>
            </div>
        </section>
    );
};