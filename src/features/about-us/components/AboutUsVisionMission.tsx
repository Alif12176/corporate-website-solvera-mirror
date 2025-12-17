"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function VisionMission() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-gray-900 mb-2"
          >
            Teknologi untuk Negeri
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-blue-700 max-w-3xl mx-auto leading-tight"
          >
            Kami yakin teknologi adalah kunci pertumbuhan bisnis Anda.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto"
          >
            Solvera membantu bisnis beradaptasi dan berkembang di era digital
            dengan solusi inovatif dan implementasi yang efektif.
          </motion.p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* --- BAGIAN VISI (KIRI) --- */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="h-64 mb-8 flex items-center justify-center relative">
              <div className="absolute w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="/vector/technology.svg"
                  alt="Ilustrasi Task"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-sm font-bold text-gray-800 mb-2">
              Inovasi Tanpa Batas
            </p>
            <h3 className="text-4xl font-bold text-blue-700 mb-6 uppercase">
              VISI
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed px-4">
              Mewujudkan transformasi digital yang inklusif dan kolaboratif
              untuk mendorong pertumbuhan ekonomi B2B dan membuka peluang bagi
              kemajuan bersama. Kami berkomitmen menyediakan solusi teknologi
              yang memberdayakan bisnis dan komunitas melalui kemitraan
              strategis.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
          >
            <div className="h-64 mb-8 flex items-center justify-center relative">
              <div className="absolute w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="/vector/task.svg"
                  alt="Ilustrasi Task"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-sm font-bold text-gray-800 mb-2">
              Solusi Cerdas
            </p>
            <h3 className="text-4xl font-bold text-blue-700 mb-6 uppercase">
              MISI
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed px-4">
              Membangun masa depan digital yang berkelanjutan di Indonesia
              sebagai mitra teknologi yang andal dan inovatif. Kami berkomitmen
              mendukung pertumbuhan bisnis yang kuat dan berkelanjutan, serta
              menciptakan peluang kerja yang berarti melalui solusi teknologi
              terintegrasi.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
