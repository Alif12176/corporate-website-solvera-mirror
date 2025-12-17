"use client";

import { SectionTitle } from "@/features/layout/components/SectionTitle";
import Image from "next/image";
import { useRef } from "react";
import {
  RiDribbbleLine,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { motion } from "framer-motion";

export const AboutUsTim = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 360;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const tim = [
    { name: "Full name", jobTitle: "CEO" },
    { name: "Full name", jobTitle: "CTO" },
    { name: "Full name", jobTitle: "COO" },
    { name: "Full name", jobTitle: "JOB" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="
        py-28 space-y-20
        w-screen relative
        left-1/2 right-1/2
        -ml-[50vw] -mr-[50vw]
      "
    >
      {/* ===== Title ===== */}
      <motion.div
        className="max-w-7xl mx-auto px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          tagline="Inovasi untuk Masa Depan"
          title="Tim Profesional Kami"
          subtitle="Didukung oleh tim ahli dan teknologi terkini, kami siap membantu Anda mencapai tujuan bisnis Anda."
        />
      </motion.div>

      {/* ===== Slider ===== */}
      <div className="relative w-full">
        {/* ===== LEFT FADE ===== */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* ===== SLIDER ===== */}
        <div
          ref={scrollRef}
          className="
          flex gap-6
          overflow-x-auto
          pb-8
          snap-x snap-mandatory
          scrollbar-hide
          px-24
        "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tim.map((t, index) => (
            <motion.div
              key={index}
              className="
              min-w-[320px] md:min-w-[360px]
              bg-white
              rounded-2xl
              snap-center
              transition-shadow
              duration-300
            "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src="/images/placeholder-image.png"
                alt={t.name}
                width={80}
                height={80}
                className="object-cover rounded-full w-20 h-20 mb-6"
              />

              <h4 className="font-semibold text-lg text-brand-primary">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 mb-4">{t.jobTitle}</p>

              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>

              <div className="flex gap-3 text-gray-600">
                <RiLinkedinBoxFill className="text-xl hover:text-blue-600 cursor-pointer" />
                <RiTwitterXFill className="text-xl hover:text-black cursor-pointer" />
                <RiDribbbleLine className="text-xl hover:text-pink-500 cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== RIGHT FADE ===== */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-16 flex justify-end gap-4">
          <button
            onClick={() => scroll("left")}
            className="
              w-12 h-12
              flex items-center justify-center
              rounded-lg
              border border-blue-200
              text-blue-600
              bg-white shadow-sm
              hover:bg-blue-600 hover:text-white
              transition-all
            "
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              w-12 h-12
              flex items-center justify-center
              rounded-lg
              border border-blue-200
              text-blue-600
              bg-white shadow-sm
              hover:bg-blue-600 hover:text-white
              transition-all
            "
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
