"use client";

import React from "react";
import { Button } from "@/features/layout/components/Button";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  heading: string;
  tagline: string;
  bg_image: string;
}

export const HeroSection = ({ heading, tagline, bg_image }: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[900px] flex items-center text-background justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg_image}
          alt="Transformasi Digital Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {heading}
        </h1>
        <p className="text-lg md:text-xl text-background max-w-3xl mx-auto mb-10">
          {tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="default" as={Link} size="lg" href="/minta-demo" className="px-6 py-2 rounded-md mr-4">
            Jadwalkan Demo
          </Button><Button variant="alternative" as={Link} size="lg" href="/hubungi-kami" className="px-6 py-2 rounded-md">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
};