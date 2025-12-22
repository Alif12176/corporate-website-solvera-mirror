"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Button } from "@/features/layout/components/Button";
import { RiCustomerService2Line, RiBarChartGroupedLine, RiDatabase2Line, RiRefreshLine } from "react-icons/ri";
import { m } from "framer-motion";

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
          <m.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Strategi Digital</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
              Efektivitas Operasional Lewat Digitalisasi
            </h2>
            <p className="text-foreground text-lg leading-relaxed">
              Kami membantu bisnis Anda beroperasi secara profesional melalui standar kerja yang terstruktur dan terorganisir. Teknologi dari Solvera menyediakan sistem operasional inti yang dirancang khusus untuk memastikan model bisnis Anda berjalan secara efektif dan optimal.
            </p>
            <div className="mt-4">
              <Button variant="default" size="lg" color="primary" className="px-6 py-2 rounded-md" as="a" href="#konsultasi">
                Pelajari Detailnya
              </Button>
            </div>
          </m.div>

          {/* Right Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((item, idx) => (
              <m.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                variants={fadeInUp}
              >
                <Card className="bg-brand-primary-subtle border-none shadow-sm hover:shadow-md transition-shadow h-full rounded-xl">
                  <CardBody className="p-6 flex flex-col gap-4">
                    <div className="text-foreground">{item.icon}</div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardBody>
                </Card>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};