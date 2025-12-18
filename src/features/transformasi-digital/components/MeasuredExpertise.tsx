"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Progress } from "@heroui/react";

const EXPERTISE_DATA = [
  { label: "Strategy & Planning", value: 80 },
  { label: "System Customization & Development", value: 60 },
  { label: "Testing & User Guideline", value: 60 },
  { label: "Live Chat & Support Maintenance", value: 60 },
  { label: "Training & Certification", value: 60 },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const MeasuredExpertise = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="relative"
          >
            {/* Placeholder for Illustration - Ganti dengan path gambar ilustrasi Anda */}
            <Image 
                src="/images/expertise-illustration.svg" 
                alt="Keahlian Terukur Solvera" 
                width={600} 
                height={600} 
                className="w-full h-auto"
            />
          </motion.div>

          {/* Right Content & Progress Bars */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
             <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Kompetensi Inti SOLVERA</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                Keahlian Terukur di <br className="hidden md:block" /> Setiap Fase Proyek
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kami memiliki keahlian mendalam di setiap tahap proyek, mulai dari perencanaan strategis hingga dukungan pasca implementasi, untuk memastikan keberhasilan transformasi digital perusahaan Anda.
                </p>
             </div>

            <div className="flex flex-col gap-6">
              {EXPERTISE_DATA.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center font-bold text-blue-900 text-sm">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <Progress 
                    value={item.value} 
                    color="primary" 
                    size="sm" 
                    radius="full"
                    classNames={{
                        indicator: "bg-blue-700",
                        track: "bg-blue-100",
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};