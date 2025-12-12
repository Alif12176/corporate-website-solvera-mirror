"use client";

import React from "react";
import { Button } from "./Button";
import { Input } from "@heroui/react";

export const ConsultationCTA = () => {
  return (
    <section className="bg-background py-section-large-desktop pb-32">
      <div className="container mx-auto px-page-global">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h2 className="text-4xl md:text-h2 font-medium text-brand-primary leading-tight">
              Siap Optimalkan Bisnis Anda?
            </h2>
            <p className="text-brand-text-secondary text-body-md leading-relaxed">
              Dapatkan wawasan, tren, dan berita terbaru dari Solvera.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Alamat Email Anda"
                radius="sm"
                size="lg"
                classNames={{
                  inputWrapper:
                    "bg-brand-primary-subtle/30 border border-brand-primary/20",
                }}
              />
              <Button
                color="primary"
                size="lg"
                radius="sm"
                className="font-semibold px-8"
              >
                Bergabung
              </Button>
            </div>
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
