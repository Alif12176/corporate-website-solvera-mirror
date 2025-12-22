"use client";

import React from "react";
import { m } from "framer-motion";
import Image from "next/image";

const skills = [
  { label: "Strategy & Planning", value: 75 },
  { label: "Development & Implementation", value: 70 },
  { label: "Transformasi Digital", value: 80 },
  { label: "Konsultasi & Knowledge Transfer", value: 85 },
  { label: "Support & Maintenance", value: 90 },
];

export const ConsultationCompetency = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-page-global">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center overflow-hidden">
              <Image
                src="/vector/undraw_meeting_dunc.svg"
                alt="Consultation Competency Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </m.div>

          {/* Right Column: Content */}
          <div>
            <div className="mb-8">
              <m.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm font-bold text-brand-text-secondary tracking-widest uppercase mb-2 block"
              >
                Kompetensi Inti SOLVERA
              </m.span>
              <m.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-5xl font-medium text-brand-primary mb-6 leading-tight"
              >
                Keahlian Terukur di <br /> Setiap Fase Proyek
              </m.h2>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-brand-text-secondary text-lg leading-relaxed"
              >
                Kami memiliki keahlian mendalam di setiap tahap proyek, mulai dari
                perencanaan strategis hingga dukungan pasca implementasi, untuk
                memastikan keberhasilan transformasi digital perusahaan Anda.
              </m.p>
            </div>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-semibold text-brand-text-secondary">
                      {skill.label}
                    </span>
                    <span className="text-sm font-bold text-brand-text-secondary">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="w-full bg-brand-border-subtle rounded-full h-3 overflow-hidden">
                    <m.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
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