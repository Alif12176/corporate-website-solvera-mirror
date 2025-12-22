"use client";

import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@heroui/react";
import { Button } from "@/features/layout/components/Button";
import {
  RiCheckLine,
  RiCodeSSlashLine,
  RiAddLine,
  RiLightbulbFlashLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

const SOLUTIONS_DATA = [
  {
    title: "Strategic Advisory",
    icon: <RiLightbulbFlashLine className="w-6 h-6 text-brand-primary" />,
    description:
      "Perancangan arsitektur IT jangka panjang agar selaras dengan tujuan bisnis.",
    features: [
      "IT Blueprint Design",
      "Enterprise Architecture",
      "Cloud Strategy Advisory",
    ],
    isEngineering: false,
  },
  {
    title: "System Integration",
    icon: <RiAddLine className="w-6 h-6 text-brand-primary" />,
    description:
      "Menghubungkan silo data antar departemen menjadi satu ekosistem terpadu.",
    features: [
      "API Middleware Dev",
      "ERP - HR - Finance Bridge",
      "Legacy System Optimization",
    ],
    isEngineering: false,
  },
  {
    title: "Custom Development",
    icon: <RiCodeSSlashLine className="w-6 h-6 text-brand-primary" />,
    description:
      "Membangun aplikasi spesifik (Tailor-Made) yang tidak bisa dijawab oleh software pasaran.",
    features: [
      "Web & Mobile Apps (Android/iOS)",
      "Complex Dashboard Reporting",
      "SaaS Product Development",
    ],
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
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brand-primary mb-6"
          >
            Solusi Dari Konsep ke Kode
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Kami memadukan strategi konsultasi dengan keahlian rekayasa
            perangkat lunak (Software Engineering).
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SOLUTIONS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              variants={fadeInUp}
              className="relative flex h-full"
            >
              <Card
                shadow="sm"
                className={`w-full p-4 transition-transform hover:scale-[1.02] rounded-2xl ${
                  item.isEngineering
                    ? "border-2 border-brand-primary bg-white"
                    : "border border-brand-border-subtle bg-white"
                }`}
              >
                <CardHeader className="flex flex-col items-start gap-4 pb-0 relative">
                  {/* Icon Wrapper */}
                  <div className="flex items-center gap-2 bg-brand-primary-subtle px-3 py-2 rounded-lg">
                    {item.icon}
                  </div>

                  {item.isEngineering && (
                    <div className="absolute top-4 right-4 bg-brand-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-md tracking-wider uppercase shadow-sm select-none">
                      Engineering Team
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-brand-primary mt-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed min-h-[60px]">
                    {item.description}
                  </p>
                </CardHeader>

                <CardBody className="py-8 flex flex-col gap-4">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 bg-brand-primary-subtle p-1 rounded-md">
                        <RiCheckLine
                          className="w-4 h-4 text-brand-primary"
                          strokeWidth={3}
                        />
                      </div>
                      <p className="font-medium text-brand-primary">
                        {feature}
                      </p>
                    </div>
                  ))}
                </CardBody>

                {item.isEngineering && (
                  <CardFooter className="pt-0">
                    <Button
                      fullWidth
                      variant="default" 
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