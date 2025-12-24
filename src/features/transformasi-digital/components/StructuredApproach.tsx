"use client";

import React from "react";
import { m } from "framer-motion";
import { RiLightbulbLine, RiRefreshLine, RiHandHeartLine } from "react-icons/ri";
import { MethodologyItem } from "../data/service";
import Image from "next/image";

interface StructuredApproachProps {
  layout: string;
  heading: string;
  description: string;
  footer: string;
  items: MethodologyItem[];
}

const APPROACH_DATA = [
  {
    icon: <RiLightbulbLine className="w-12 h-12 text-brand-primary" />,
    title: "Solusi Inovatif & Tepat Guna",
    description: "Kami merancang solusi inovatif yang disesuaikan (customized) dengan kebutuhan unik bisnis Anda, memastikan operasional berjalan lebih optimal dan efisien.",
  },
  {
    icon: <RiRefreshLine className="w-12 h-12 text-brand-primary" />,
    title: "Manajemen Bisnis Terintegrasi",
    description: "Teknologi kami menyederhanakan dan mengintegrasikan proses manajemen inti, mulai dari operasional harian hingga tata kelola dokumen bisnis.",
  },
  {
    icon: <RiHandHeartLine className="w-12 h-12 text-brand-primary" />,
    title: "Dukungan Implementasi End-to-End",
    description: "Tim spesialis kami yang berpengalaman memberikan pendampingan penuh, mulai dari fase perencanaan dan implementasi awal hingga proyek dinyatakan selesai dan berjalan optimal.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const StructuredApproach = ({ layout, heading, description, footer, items }: StructuredApproachProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <m.h4
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-sm font-bold text-foreground uppercase tracking-wider mb-4"
          >
            {footer}
          </m.h4>
          <m.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-brand-primary mb-6"
          >
            {heading}
          </m.h2>
          <m.p
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={fadeInUp}
            className="text-foreground text-lg max-w-4xl mx-auto leading-relaxed"
          >
            {description}
          </m.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {items.map((item, idx) => (
            <m.div
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="mb-6 p-4 bg-brand-primary-subtle rounded-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={38}
                  height={38}
                />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-4">
                {item.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {item.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};