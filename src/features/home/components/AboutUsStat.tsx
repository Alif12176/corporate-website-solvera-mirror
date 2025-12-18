"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const AboutUsStat = () => {
  const pilar = [
    { icon: "/icons/support-agent.svg", title: "Advisory & Consulting" },
    {
      icon: "/icons/manage_accounts.svg",
      title: "Managed Services & IT Operation",
    },
    {
      icon: "/icons/devices_other.svg",
      title: "Software Development & Implementation",
    },
    { icon: "/icons/date_range.svg", title: "Program & Project Management" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-12 px-16 flex gap-20 max-w-7xl mx-auto">
      <div className="w-[400px] space-y-8">
        <motion.p
          className="text-sm font-semibold text-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Keunggulan Kami
        </motion.p>
        <div className="space-y-6">
          <motion.h2
            className="text-brand-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Empat Pilar Layanan Utama Solvera
          </motion.h2>
          <motion.p
            className="text-medium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dengan pendekatan end-to-end, kami memastikan setiap tahap
            transformasi digital klien berjalan efektif, efisien, dan
            berkelanjutan
          </motion.p>
        </div>
      </div>
      <div className="w-[800px] flex items-center">
        <div className="grid grid-cols-2 gap-8">
          {pilar.map((p, index) => (
            <motion.div
              key={index}
              className="bg-brand-primary-subtle flex gap-2 items-center rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image src={p.icon} alt="icon" height={56} width={56} />
              <h6>{p.title}</h6>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
