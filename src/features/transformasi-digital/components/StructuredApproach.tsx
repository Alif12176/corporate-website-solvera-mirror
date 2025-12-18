"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiLightbulbLine, RiRefreshLine, RiHandHeartLine } from "react-icons/ri";

const APPROACH_DATA = [
  {
    icon: <RiLightbulbLine className="w-12 h-12 text-blue-600" />,
    title: "Solusi Inovatif & Tepat Guna",
    description: "Kami merancang solusi inovatif yang disesuaikan (customized) dengan kebutuhan unik bisnis Anda, memastikan operasional berjalan lebih optimal dan efisien.",
  },
  {
    icon: <RiRefreshLine className="w-12 h-12 text-blue-600" />,
    title: "Manajemen Bisnis Terintegrasi",
    description: "Teknologi kami menyederhanakan dan mengintegrasikan proses manajemen inti, mulai dari operasional harian hingga tata kelola dokumen bisnis.",
  },
  {
    icon: <RiHandHeartLine className="w-12 h-12 text-blue-600" />,
    title: "Dukungan Implementasi End-to-End",
    description: "Tim spesialis kami yang berpengalaman memberikan pendampingan penuh, mulai dari fase perencanaan dan implementasi awal hingga proyek dinyatakan selesai dan berjalan optimal.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const StructuredApproach = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h4 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4"
          >
            Metodologi Kami
          </motion.h4>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-blue-700 mb-6"
          >
            Pendekatan Terstruktur untuk Hasil Terukur
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed"
          >
            Kami menerapkan metodologi yang teruji dan transparan, dirancang agar mudah dipahami oleh berbagai jenis bisnis. Spesialis industri kami akan memandu Anda melalui setiap fase, memberikan rekomendasi strategis terbaik untuk memastikan kesuksesan implementasi.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {APPROACH_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};