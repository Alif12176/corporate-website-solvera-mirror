"use client";

import {
  LayoutGrid,
  User,
  ShieldCheck,
  Briefcase,
  Factory,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: <LayoutGrid className="w-10 h-10 text-blue-900" />,
    title: "Pendekatan Terstruktur",
    desc: "Kami menggunakan metodologi implementasi yang jelas, mulai dari analisis kebutuhan hingga governance, memastikan setiap keputusan berbasis data.",
  },
  {
    icon: <User className="w-10 h-10 text-blue-900" />,
    title: "Kompetensi yang Teruji",
    desc: "Tim konsultan berpengalaman dalam manufaktur, ekspor, distribusi, dan UMKM besar, dengan rekam jejak implementasi sistem yang sukses.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-900" />,
    title: "Solusi yang Scalable",
    desc: "Kami membangun sistem yang fleksibel dan dapat berkembang seiring pertumbuhan bisnis, termasuk integrasi AI dan automasi lanjutan.",
  },
];

const STATS = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    value: "40+",
    label: "Modul ERP",
  },
  {
    icon: <Factory className="w-8 h-8 text-blue-600" />,
    value: "50+",
    label: "Sektor Industri",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    value: "25+",
    label: "Konsultan Ahli",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-gray-900 mb-2"
          >
            Janji Kami
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-blue-700"
          >
            Kenapa Memilih Solvera <br /> sebagai Mitra Anda?
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Solvera menyediakan solusi komprehensif yang mendorong kesuksesan.
            Kami memberdayakan bisnis melalui teknologi inovatif dan dukungan
            khusus.
          </motion.p>
        </div>

        {/* --- ANIMASI FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {FEATURES.map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              // Animasi Kartu
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 border-t border-gray-100 pt-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <div className="mb-4">{stat.icon}</div>
              <span className="text-3xl font-bold text-blue-600 mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-gray-600">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
