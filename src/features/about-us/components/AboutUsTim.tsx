"use client";

import { SectionTitle } from "@/features/layout/components/SectionTitle";
import Image from "next/image";
import { useRef } from "react";
import {
  RiDribbbleLine,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { m } from "framer-motion";

export const AboutUsTim = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const isMobile = window.innerWidth < 768;
    const scrollAmount = isMobile ? window.innerWidth * 0.8 : 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const tim = [
    { name: "Andi Pratama", jobTitle: "CEO", desc: "Visioner dengan pengalaman 15 tahun memimpin transformasi digital di berbagai perusahaan multinasional." },
    { name: "Siti Aminah", jobTitle: "CTO", desc: "Ahli arsitektur cloud dan keamanan siber bersertifikasi global yang fokus pada skalabilitas." },
    { name: "Budi Santoso", jobTitle: "COO", desc: "Spesialis efisiensi operasional dan manajemen rantai pasok dengan pendekatan Lean Six Sigma." },
    { name: "Dewi Lestari", jobTitle: "CMO", desc: "Strategist pemasaran digital yang berfokus pada pertumbuhan brand dan akuisisi user organik." },
    { name: "Rian Hidayat", jobTitle: "Lead Dev", desc: "Fullstack engineer dengan spesialisasi scalable microservices dan optimasi database high-traffic." },
    { name: "Maya Putri", jobTitle: "Designer", desc: "UI/UX Designer yang memenangkan berbagai penghargaan desain antarmuka internasional." },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full overflow-hidden py-12 md:py-28 space-y-12 md:space-y-20 bg-white">
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ===== Title ===== */}
      <m.div
        className="max-w-7xl mx-auto px-6 md:px-16"
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
      </m.div>

      {/* ===== Slider Wrapper ===== */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* ===== SLIDER TRACK ===== */}
        <div
          ref={scrollRef}
          className="hide-scroll flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory px-6 md:px-16 items-stretch"
        >
          {tim.map((t, index) => (
            <m.div
              key={index}
              className="shrink-0 w-[80vw] md:min-w-0 md:w-[calc(25%-1.2rem)] bg-white rounded-2xl snap-center transition-shadow duration-300 border border-transparent hover:border-gray-100 hover:shadow-lg flex flex-col h-full overflow-hidden select-none p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src="/images/placeholder-image.png"
                alt={t.name}
                width={80}
                height={80}
                className="object-cover rounded-full w-20 h-20 mb-6 pointer-events-none"
              />

              <h4 className="font-semibold text-lg text-brand-primary">
                {t.name}
              </h4>
              <p className="text-sm text-foreground mb-4">{t.jobTitle}</p>

              <p className="text-foreground mb-6 text-sm md:text-base line-clamp-3">
                {t.desc}
              </p>

              <div className="flex gap-3 text-foreground mt-auto">
                <RiLinkedinBoxFill className="text-xl hover:text-blue-600 cursor-pointer" />
                <RiTwitterXFill className="text-xl hover:text-black cursor-pointer" />
                <RiDribbbleLine className="text-xl hover:text-pink-500 cursor-pointer" />
              </div>
            </m.div>
          ))}

          {/* Spacer Mobile */}
          <div className="w-1 shrink-0 md:hidden" />
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* ===== BUTTONS ===== */}
        <div className="w-full px-6 md:px-16 flex justify-end gap-4 mt-4 md:mt-0">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 flex items-center justify-center rounded-lg border border-blue-200 text-brand-primary bg-white shadow-sm hover:bg-brand-primary hover:text-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 flex items-center justify-center rounded-lg border border-blue-200 text-brand-primary bg-white shadow-sm hover:bg-brand-primary hover:text-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};