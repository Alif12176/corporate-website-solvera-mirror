"use client";

import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { RiCustomerService2Line, RiBarChartGroupedLine, RiDatabase2Line, RiRefreshLine } from "react-icons/ri";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: <RiCustomerService2Line className="w-10 h-10" />,
    title: "Peningkatan Pengalaman Pelanggan",
    description: "Teknologi yang tepat meningkatkan responsivitas layanan, yang pada gilirannya meningkatkan kepuasan, loyalitas, dan retensi klien bisnis Anda.",
  },
  {
    icon: <RiBarChartGroupedLine className="w-10 h-10" />,
    title: "Skalabilitas dan Keunggulan Kompetitif",
    description: "Teknologi mempercepat pertumbuhan bisnis Anda, memberikan kemampuan adaptasi penting terhadap perubahan pasar, dan menciptakan keunggulan kompetitif yang berkelanjutan.",
  },
  {
    icon: <RiDatabase2Line className="w-10 h-10" />,
    title: "Akses Data & Operasional Terintegrasi",
    description: "Penerapan teknologi mengintegrasikan data operasional, memberikan akses real-time terpusat untuk pengambilan keputusan yang lebih cepat dan berbasis data.",
  },
  {
    icon: <RiRefreshLine className="w-10 h-10" />,
    title: "Optimalisasi Proses & Layanan",
    description: "Teknologi mempermudah identifikasi dan penyelesaian kendala operasional, baik internal maupun eksternal, untuk mengoptimalkan proses dan meningkatkan kualitas layanan.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const OperationalEffectiveness = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="pelajari-lebih">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider">Strategi Digital</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Efektivitas Operasional Lewat Digitalisasi
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Kami membantu bisnis Anda beroperasi secara profesional melalui standar kerja yang terstruktur dan terorganisir. Teknologi dari Solvera menyediakan sistem operasional inti yang dirancang khusus untuk memastikan model bisnis Anda berjalan secara efektif dan optimal.
            </p>
            <div className="mt-4">
                <Button size="lg" color="primary" className="font-bold px-8" as="a" href="#konsultasi">
                    Pelajari Detailnya
                </Button>
            </div>
          </motion.div>

          {/* Right Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                variants={fadeInUp}
              >
                <Card className="bg-blue-50/50 border-none shadow-sm hover:shadow-md transition-shadow h-full rounded-xl">
                  <CardBody className="p-6 flex flex-col gap-4">
                    <div className="text-blue-700">{item.icon}</div>
                    <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};