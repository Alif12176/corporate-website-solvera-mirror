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
import { m } from "framer-motion";
import { OfferingsSectionItem } from "../data/service";
import Image from "next/image";


interface ConceptToCodeProps {
  heading: string;
  description: string;
  items: OfferingsSectionItem[];
}

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

export const ConceptToCode = ({ heading, description, items }: ConceptToCodeProps) => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <m.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brand-primary mb-6"
          >
            {heading}
          </m.h2>
          <m.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            {description}
          </m.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {items.map((item, idx) => (
            <m.div
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
                className={`w-full p-4 transition-transform hover:scale-[1.02] rounded-2xl ${item.badge === "ENGINEERING TEAM"
                  ? "border-2 border-brand-primary bg-white"
                  : "border border-brand-border-subtle bg-white"
                  }`}
              >
                <CardHeader className="flex flex-col items-start gap-4 pb-0 relative">
                  {/* Icon Wrapper */}
                  <div className="flex items-center gap-2 bg-brand-primary-subtle px-3 py-2 rounded-lg">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                  </div>

                  {item.badge === "ENGINEERING TEAM" && (
                    <div className="absolute top-4 right-4 bg-brand-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-md tracking-wider uppercase shadow-sm select-none">
                      {item.badge}
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
                  {item.checklist.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="shrink-0 bg-brand-primary-subtle p-1 rounded-md">
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

                {item.button && (
                  <CardFooter className="pt-0">
                    <Button
                      fullWidth
                      variant="default"
                      size="lg"
                      as="a"
                      href="#konsultasi"
                    >
                      {item.button.text}
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};