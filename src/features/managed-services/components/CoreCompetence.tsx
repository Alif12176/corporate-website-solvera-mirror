"use client";

import React from "react";
import { m } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "Managed Service", percentage: 60 },
  { name: "Staff Augmentation", percentage: 40 },
];

export default function CoreCompetence() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-28 gap-8 items-center">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="relative md:w-full w-[350px] max-w-md h-[350px] md:h-[500px] flex items-center justify-center text-foreground overflow-hidden">
              <Image
                src="/vector/maintenance.svg"
                alt="Maintenance Illustration"
                fill
                className="object-cover md:p-10 h-full w-full"
                priority
              />
            </div>
          </m.div>

          <div>
            <div className="mb-8 ">
              <m.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm font-bold text-foreground tracking-widest uppercase mb-2 block"
              >
                Kompetensi Inti SOLVERA
              </m.span>

              <m.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight"
              >
                Keahlian Terukur di <br /> Setiap Fase Proyek
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
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-semibold text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="w-full bg-brand-border-subtle rounded-full h-3 overflow-hidden">
                    <m.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
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
}
