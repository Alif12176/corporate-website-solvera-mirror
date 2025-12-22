"use client";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Chip } from "@heroui/react";
import { Check, ArrowUp, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/features/layout/components/Button";

const FOCUS_DATA = [
  {
    title: "FOKUS: EFISIENSI",
    icon: <ArrowUp className="w-5 h-5 text-blue-600" />,
    heading: "Solusi Praktis & Siap Pakai",
    description: "Hilangkan hambatan teknis. Ideal untuk operasional yang lincah tanpa perlu membangun tim IT besar.",
    features: [
      { label: "All-in-One System", detail: "ERP, HRM, & CRM dalam satu aplikasi." },
      { label: "Support 360 Derajat", detail: "Kami kelola server & teknis sepenuhnya." },
      { label: "Biaya Terukur", detail: "Model berlangganan tanpa biaya kejutan." },
    ],
    buttonText: "Lihat Paket Kilat",
    isPopular: false,
  },
  {
    title: "FOKUS: INTEGRASI",
    icon: <Plus className="w-5 h-5 text-blue-600" />,
    heading: "Transformasi End-to-End",
    description: "Hubungkan silo antar departemen. Mitra strategis dari perencanaan hingga support jangka panjang.",
    features: [
      { label: "Advisory & Roadmap", detail: "Arsitektur IT sesuai strategi bisnis." },
      { label: "Integrasi Total", detail: "Satukan Finance, Ops, HR & Legacy." },
      { label: "SLA Enterprise-Class", detail: "Managed Services 24/7 transparan." },
    ],
    buttonText: "Konsultasi Transformasi",
    isPopular: true,
  },
  {
    title: "FOKUS: TATA KELOLA",
    icon: <ArrowUp className="w-5 h-5 text-blue-600" />,
    heading: "Standar Global, Eksekusi Lokal",
    description: "Manajemen kompleksitas tinggi untuk multi-entitas dengan standar kepatuhan yang ketat.",
    features: [
      { label: "Global Governance", detail: "PMBOK, PRINCE2, & Agile Delivery." },
      { label: "Multi-Entity Integration", detail: "Integrasi Holding & Lintas Negara." },
      { label: "Extended IT Team", detail: "Mitra IT strategis jangka panjang." },
    ],
    buttonText: "Hubungi Corporate Team",
    isPopular: false,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BusinessFocus() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.p 
            variants={fadeInUp} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-4"
          >
            MENGAPA SOLVERA?
          </motion.p>
          <motion.h2 
            variants={fadeInUp} initial="hidden" whileInView="visible" transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-brand-primary mb-6"
          >
            Pilih Pendekatan Sesuai Fokus <br className="hidden md:block" /> Bisnis Anda
          </motion.h2>
          <motion.p 
            variants={fadeInUp} initial="hidden" whileInView="visible" transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Teknologi yang beradaptasi dengan skala tantangan Anda, bukan sebaliknya.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {FOCUS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              variants={fadeInUp}
              className="relative flex h-full"
            >
              <Card 
                shadow="sm"
                className={`w-full p-4 border-2 transition-transform hover:scale-[1.02] ${
                  item.isPopular ? "border-blue-700 brand-primary-subtle ring-4 ring-brand-primary/5" : "border-gray-100"
                }`}
              >
                <CardHeader className="flex flex-col items-start gap-4 pb-0">
                  <div className="w-full flex justify-between items-center">
                    
                    <div className="flex items-center gap-2 bg-brand-primary-subtle px-3 py-1 rounded-md">
                      {item.icon}
                      <span className="text-xs font-bold text-brand-primary">{item.title}</span>
                    </div>

                    {item.isPopular && (
                      <Chip 
                        color="primary" 
                        className="animate-pulse"
                      >
                        PALING POPULER
                      </Chip>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-brand-primary mt-2 leading-tight">
                      {item.heading}
                    </h3>
                    <p className="text-foreground text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </CardHeader>

                <CardBody className="py-8 flex flex-col gap-6">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex gap-4">
                      <div className="mt-1 bg-brand-primary-subtle p-1 rounded-md h-fit">
                        <Check className="w-4 h-4 text-blue-700" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="font-bold text-brand-primary text-sm">{feature.label}</p>
                        <p className="text-foreground text-xs mt-1">{feature.detail}</p>
                      </div>
                    </div>
                  ))}
                </CardBody>

                <CardFooter className="pt-0">
                  <Button 
                    fullWidth
                    variant={item.isPopular ? "default" : "outline"}
                    className="font-semibold px-8"
                    size="lg"
                  >
                    {item.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}