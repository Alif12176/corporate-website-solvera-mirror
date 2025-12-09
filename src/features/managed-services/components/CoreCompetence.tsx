"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "Managed Service", percentage: 80 },
  { name: "Staff Augmentation", percentage: 60 },
];

export default function CoreCompetence() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-28 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="relative md:w-full w-[350px] max-w-md h-[350px] md:h-[500px] flex items-center justify-center text-gray-400 overflow-hidden">
              <Image
                src="/vector/maintenance.svg"
                alt="Maintenance Illustration"
                fill
                className="object-cover md:p-10 h-full w-full"
                priority
              />
            </div>
          </motion.div>

          <div>
            <div className="mb-8 ">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-2 block"
              >
                Kompetensi Inti SOLVERA
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight"
              >
                Keahlian Terukur di <br /> Setiap Fase Proyek
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                Kami memiliki keahlian mendalam di setiap tahap proyek, mulai
                dari perencanaan strategis hingga dukungan pasca implementasi,
                untuk memastikan keberhasilan transformasi digital perusahaan
                Anda.
              </motion.p>
            </div>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-semibold text-gray-900">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold text-gray-500">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="w-full bg-blue-100 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.0,
                        ease: "easeOut",
                        delay: 0.3 + index * 0.1,
                      }}
                      className="bg-blue-700 h-full rounded-full"
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
