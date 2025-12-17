"use client";

import { Briefcase, Factory, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutUsContact = () => {
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

  const content = [
    "/icons/webflow.svg",
    "/icons/relume.svg",
    "/icons/webflow.svg",
    "/icons/relume.svg",
    "/icons/webflow.svg",
    "/icons/relume.svg",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-28 px-16 max-w-7xl mx-auto space-y-20">
      <motion.h5
        className="text-brand-primary text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={fadeInUp}
      >
        Dipercaya oleh Perusahaan Terdepan di Indonesia
      </motion.h5>

      <div className="grid grid-cols-3 gap-2">
        {content.map((c, index) => (
          <motion.div
            key={index}
            className="bg-brand-primary-subtle rounded-lg p-3.5 flex justify-center hover:bg-brand-border-subtle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index*0.1 }}
            variants={fadeInUp}
          >
            <Image src={c} alt="webflow" width={140} height={56} />
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
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
  );
};
