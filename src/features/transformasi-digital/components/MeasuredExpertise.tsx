"use client";

import React from "react";
import { m } from "framer-motion";
import Image from "next/image";

const EXPERTISE_DATA = [
  { label: "Strategy & Planning", value: 60 },
  { label: "System Customization & Development", value: 70 },
  { label: "Testing & User Guideline", value: 50 },
  { label: "Live Chat & Support Maintenance", value: 65 },
  { label: "Training & Certification", value: 55 },
];

export const MeasuredExpertise = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg h-auto overflow-hidden">
              <Image
                src="/images/expertise-illustration.svg"
                alt="Keahlian Terukur Solvera"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </m.div>

          {/* Right Content & Progress Bars */}
          <div>
            <div className="mb-8">
              <m.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm font-bold text-foreground uppercase tracking-wider mb-2 block"
              >
                Kompetensi Inti SOLVERA
              </m.span>
              <m.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight"
              >
                Keahlian Terukur di <br className="hidden md:block" /> Setiap
                Fase Proyek
              </m.h2>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-foreground text-lg leading-relaxed"
              >
                Kami memiliki keahlian mendalam di setiap tahap proyek, mulai
                dari perencanaan strategis hingga dukungan pasca implementasi,
                untuk memastikan keberhasilan transformasi digital perusahaan
                Anda.
              </m.p>
            </div>

            <div className="space-y-8">
              {EXPERTISE_DATA.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-semibold text-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full bg-brand-border-subtle rounded-full h-3 overflow-hidden">
                    <m.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.0,
                        ease: "easeOut",
                        delay: 0.3 + index * 0.1,
                      }}
                      className="bg-brand-primary h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};