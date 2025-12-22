"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Content = () => {
  const contentData = [
    { label: "Strategy & Planning", value: 60 },
    { label: "System Customization & Development", value: 50 },
    { label: "Testing & User Guideline", value: 40 },
    { label: "Live Chat & Support Maintenance", value: 30 },
    { label: "Training & Certification", value: 40 },
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[600px]">
              <Image
                src="/images/placeholder.png"
                alt="Pelatihan Illustration"
                width={600}
                height={684}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div>
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-tagline font-semibold text-foreground tracking-widest uppercase mb-2 block"
              >
                Kompetensi Inti SOLVERA
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight"
              >
                Keahlian Terukur di <br /> Setiap Fase Proyek
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-medium text-foreground text-lg leading-relaxed"
              >
                Kami memiliki keahlian mendalam di setiap tahap proyek, mulai
                dari perencanaan strategis hingga dukungan pasca implementasi,
                untuk memastikan keberhasilan transformasi digital perusahaan
                Anda.
              </motion.p>
            </div>

            <div className="space-y-8">
              {contentData.map((c, index) => (
                <div key={index}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-medium text-regular text-foreground">
                      {c.label}
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {c.value}%
                    </span>
                  </div>
                  <div className="w-full bg-brand-border-subtle rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.value}%` }}
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