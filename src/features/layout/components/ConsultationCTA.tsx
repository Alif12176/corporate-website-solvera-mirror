"use client";

import React from "react";
import { Button } from "@/features/layout/components/Button";
import { Input } from "@heroui/react";
import { useNewsletter } from "@/features/hooks/useNewsletter";

export const ConsultationCTA = () => {
  const { email, setEmail, isLoading, status, message, subscribe } = useNewsletter();

  return (
    <section className="bg-background py-section-large-desktop pb-32">
      <div className="container mx-auto px-page-global">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h2 className="text-4xl md:text-h2 font-medium text-brand-primary leading-tight">
              Siap Optimalkan Bisnis Anda?
            </h2>
            <p className="text-brand-text-secondary text-body-md leading-relaxed">
              Dapatkan wawasan, tren, dan berita terbaru dari Solvera.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-full">
                <Input
                  type="email"
                  placeholder="Alamat Email Anda"
                  radius="sm"
                  size="lg"
                  value={email}
                  onValueChange={setEmail}
                  isDisabled={isLoading}
                  isInvalid={status === "error"}
                  errorMessage={status === "error" ? message : ""}
                  classNames={{
                    inputWrapper:
                      "bg-brand-primary-subtle/30 border border-brand-primary/20",
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') subscribe();
                  }}
                />
              </div>
              <Button
                variant="default"
                size="lg"
                className={`font-semibold px-8 shrink-0 ${status === "success" ? "bg-success hover:bg-success/90" : ""}`}
                isLoading={isLoading}
                onPress={subscribe}
              >
                {status === "success" ? "Berhasil" : "Bergabung"}
              </Button>
            </div>

            {(status === "success" || status === "info") && (
              <p className={`text-sm font-medium ${status === "success" ? "text-success" : "text-blue-600"}`}>
                {message}
              </p>
            )}

            <p className="text-xs text-brand-text-secondary/70 max-w-md">
              Dengan berlangganan, Anda menerima Kebijakan Privasi kami dan
              setuju untuk menerima pembaruan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};