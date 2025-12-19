"use client";

import React from "react";
import { Button, Card, CardBody, CardHeader, CardFooter, Chip } from "@heroui/react";
import { RiCheckLine, RiCodeSSlashLine, RiAddLine, RiLightbulbFlashLine } from "react-icons/ri";
import { motion } from "framer-motion";

const SOLUTIONS_DATA = [
  {
    title: "Strategic Advisory",
    icon: <RiLightbulbFlashLine className="w-6 h-6 text-blue-600" />,
    description: "Perancangan arsitektur IT jangka panjang agar selaras dengan tujuan bisnis.",
    features: ["IT Blueprint Design", "Enterprise Architecture", "Cloud Strategy Advisory"],
    isEngineering: false,
  },
  {
    title: "System Integration",
    icon: <RiAddLine className="w-6 h-6 text-blue-600" />,
    description: "Menghubungkan silo data antar departemen menjadi satu ekosistem terpadu.",
    features: ["API Middleware Dev", "ERP - HR - Finance Bridge", "Legacy System Optimization"],
    isEngineering: false,
  },
  {
    title: "Custom Development",
    icon: <RiCodeSSlashLine className="w-6 h-6 text-blue-600" />,
    description: "Membangun aplikasi spesifik (Tailor-Made) yang tidak bisa dijawab oleh software pasaran.",
    features: ["Web & Mobile Apps (Android/iOS)", "Complex Dashboard Reporting", "SaaS Product Development"],
    isEngineering: true,
    buttonText: "Request Demo Aplikasi",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ConceptToCode = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-6"
          >
            Solusi Dari Konsep ke Kode
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Kami memadukan strategi konsultasi dengan keahlian rekayasa perangkat lunak (Software Engineering).
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SOLUTIONS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              variants={fadeInUp}
              className="relative flex h-full"
            >
              <Card 
                shadow="sm"
                className={`w-full p-4 border-2 transition-transform hover:scale-[1.02] rounded-2xl ${
                  item.isEngineering ? "border-blue-700 bg-white ring-4 ring-blue-700/5" : "border-gray-100 bg-white"
                }`}
              >
                <CardHeader className="flex flex-col items-start gap-4 pb-0 relative">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                    {item.icon}
                  </div>
                  {item.isEngineering && (
                    <Chip color="primary" size="sm" className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl font-bold uppercase tracking-wider">
                      ENGINEERING TEAM
                    </Chip>
                  )}
                  <h3 className="text-xl font-bold text-blue-900 mt-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed min-h-[60px]">
                    {item.description}
                  </p>
                </CardHeader>

                <CardBody className="py-8 flex flex-col gap-4">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 bg-blue-100 p-1 rounded-md">
                        <RiCheckLine className="w-4 h-4 text-blue-700" strokeWidth={3} />
                      </div>
                      <p className="font-medium text-gray-700 text-sm">{feature}</p>
                    </div>
                  ))}
                </CardBody>

                {item.isEngineering && (
                  <CardFooter className="pt-0">
                    <Button 
                      fullWidth 
                      color="primary"
                      className="font-bold shadow-lg shadow-blue-500/30"
                      size="lg"
                      as="a"
                      href="#konsultasi"
                    >
                      {item.buttonText}
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};