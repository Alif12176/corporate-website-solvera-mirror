"use client";

import Image from "next/image";
import { Button } from "@/features/layout/components/Button";
import Link from "next/link";

interface HeroLayananProps {
  imagePath: string;
  title: string;
  subtitle?: string;
}

export default function HeroBanner({
  imagePath,
  title,
  subtitle = "Integrasikan seluruh operasi industri dalam ekosistem digital yang canggih.",
}: HeroLayananProps) {
  return (
    <section className="relative h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imagePath}
          alt={title}
          fill
          priority
          className="object-cover"
          quality={90}
        />

        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center px-4 ">
        <h1 className="animate-in text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
          {title}
        </h1>

        <p className="animate-in delay-100 text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>

        <div className="animate-in delay-200">
          <Button
            variant="default"
            className="px-6 py-2 rounded-md mr-4"
            as={Link}
            href='/minta-demo'
          >
            Jadwalkan Demo
          </Button>
          <Button
            variant="alternative"
            className="px-6 py-2 rounded-md"
            as={Link}
            href='/hubungi-kami'
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
}
