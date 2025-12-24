"use client";

import React from "react";
import { m } from "framer-motion";
import { RiCheckLine } from "react-icons/ri";
import { QuickStepsItem } from "../data/service";


interface EnterpriseComplianceProps {
  layout: string;
  heading: string;
  subheading: string;
  footer: string;
  items: QuickStepsItem[];
}

const STEPS = [
  {
    step: "1",
    title: "Audit & Assessment",
    description: "Analisis proses bisnis dan identifikasi gap.",
  },
  {
    step: "2",
    title: "IT Blueprint Design",
    description: "Perancangan arsitektur jangka panjang & roadmap.",
  },
  {
    step: "3",
    title: "System Integration",
    description: "Menyatukan data Finance, HR, Ops dalam satu atap..",
  },
  {
    step: "check",
    title: "Go-Live & Scale",
    description: "Implementasi sukses dengan support berkelanjutan.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const EnterpriseCompliance = ({ layout, heading, subheading, footer, items }: EnterpriseComplianceProps) => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
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
            className="text-foreground text-lg max-w-3xl mx-auto"
          >
            {subheading}
          </m.p>
        </div>

        {/* Timeline Container */}
        <div className="relative mb-16">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-brand-primary z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {items.map((item, idx) => {
              const isCheck = item.type === "check";
              return (
                <m.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle Icon */}
                  <div
                    className={`
                      w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 
                      relative z-10 transition-transform group-hover:scale-105
                      ${isCheck
                        ? "bg-brand-primary text-white border-4 border-brand-primary shadow-xl shadow-brand-primary/20"
                        : "bg-brand-primary-subtle text-brand-primary border-2 border-brand-primary"
                      }
                    `}
                  >
                    {isCheck ? (
                      <RiCheckLine className="text-3xl md:text-4xl" strokeWidth={2} />
                    ) : (
                      <span className="text-2xl md:text-3xl font-bold">{item.label}</span>
                    )}
                  </div>

                  {/* Text Content */}
                  <h3 className="text-lg font-bold text-brand-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed max-w-[220px]">
                    {item.description}
                  </p>

                  {/* Mobile Connector (Mobile) */}
                  {idx !== items.length - 1 && (
                    <div className="md:hidden w-0.5 h-12 border-l-2 border-dashed border-brand-primary my-4" />
                  )}
                </m.div>
              );
            })}
          </div>
        </div>

        {/* Result Box (Bottom) */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto bg-brand-primary-subtle border border-brand-border-subtle rounded-xl p-6 md:p-8 text-center"
        >
          <p className="text-foreground text-lg md:text-xl">
            <span className="font-bold text-brand-primary">Hasil Akhir: </span>
            {footer}
          </p>
        </m.div>
      </div>
    </section>
  );
};