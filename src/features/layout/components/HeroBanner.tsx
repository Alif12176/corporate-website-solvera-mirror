"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroLayananProps {
  imagePath: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroBanner({
  imagePath,
  title,
  subtitle = "Integrasikan seluruh operasi industri dalam ekosistem digital yang canggih.",
  ctaText = "Konsultasi Sekarang",
  ctaLink = "/contact",
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
          <Link
            href={ctaLink}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transform duration-200"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
