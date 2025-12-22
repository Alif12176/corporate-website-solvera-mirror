"use client";

import React from "react";
import { m } from "framer-motion";
import { RiCheckLine } from "react-icons/ri";

const STEPS = [
  {
    title: "Konsultasi Kilat",
    description: "Analisis kebutuhan utama bisnis Anda (1 Hari).",
  },
  {
    title: "IT Blueprint Design",
    description: "Instalasi modul ERP/POS siap pakai (3-5 Hari).",
  },
  {
    title: "System Integration",
    description: "Pelatihan staf dan pendampingan teknis penuh saat beroperasi.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <m.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-brand-primary mb-6"
          >
            Akselerasi Digital: Go-Live dalam Hitungan Hari
          </m.h2>
          <m.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            variants={fadeInUp}
            className="text-foreground text-lg max-w-3xl mx-auto"
          >
            Proses implementasi yang dirancang untuk UKM: cepat, fokus pada solusi siap pakai, dan tanpa birokrasi.
          </m.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-blue-600 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {STEPS.map((step, idx) => (
              <m.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                {/* Circle Icon */}
                <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center mb-6 shadow-xl shadow-brand-primary/20 border-4 border-brand-primary">
                  <RiCheckLine className="text-background text-4xl" strokeWidth={1} />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-brand-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground leading-relaxed max-w-[250px]">
                  {step.description}
                </p>

                {/* Mobile Connector (Mobile Only) */}
                {idx !== STEPS.length - 1 && (
                  <div className="md:hidden w-0.5 h-12 border-l-2 border-dashed border-brand-primary my-4" />
                )}
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};