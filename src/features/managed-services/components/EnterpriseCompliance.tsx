"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";
import { RiCheckLine } from "react-icons/ri";
import { motion } from "framer-motion";

const COMPLIANCE_DATA = [
  {
    title: "Global Governance",
    features: [
      "PMBOK / PRINCE2 Standards",
      "Agile & Scrum Framework",
    ],
  },
  {
    title: "SLA Guarantee",
    features: [
      "99.9% Uptime Guarantee",
      "24/7 Monitoring Center",
    ],
  },
  {
    title: "Risk & Compliance",
    features: [
      "Audit-Ready (OJK/ISO)",
      "Data Privacy Protection",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const EnterpriseCompliance = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brand-primary mb-6"
          >
            Standar Enterprise & Kepatuhan
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            variants={fadeInUp}
            className="text-foreground text-lg max-w-3xl mx-auto"
          >
            Kami menerapkan standar global untuk menjamin keamanan data dan tata kelola proyek Anda.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPLIANCE_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-300 rounded-2xl h-full">
                <CardBody className="p-8">
                  <h3 className="text-xl font-bold text-brand-primary mb-8">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-5">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded bg-brand-primary-subtle flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                          <RiCheckLine className="text-brand-primary group-hover:text-white transition-colors" strokeWidth={2} />
                        </div>
                        <span className="text-foreground font-medium text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};