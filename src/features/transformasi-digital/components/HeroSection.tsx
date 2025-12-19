"use client";

import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/transformasi-digital-hero.jpg" // Pastikan ada gambar ini di public/images
          alt="Transformasi Digital Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Membuka Potensi Bisnis <br /> Melalui Optimalisasi Digital
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Transformasikan bisnis Anda dengan strategi digital yang terukur. Kami membantu Anda mengadopsi teknologi yang tepat untuk efisiensi, pertumbuhan, dan keunggulan kompetitif di era digital.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" color="primary" className="font-bold px-8" as="a" href="#konsultasi">
            Mulai Transformasi
          </Button>
          <Button size="lg" variant="bordered" className="font-bold px-8 text-white border-white hover:bg-white/10" as="a" href="#pelajari-lebih">
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>
    </section>
  );
};