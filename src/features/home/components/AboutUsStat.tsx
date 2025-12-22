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
    // 1. Container: Padding responsif (px-6 -> px-16) dan Flex direction (col -> row)
    <div className="py-12 px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-7xl mx-auto">
      
      {/* 2. Text Section: Full width di mobile, 35% di desktop */}
      <div className="w-full lg:w-[35%] space-y-6 lg:space-y-8">
        <motion.p
          className="text-sm font-semibold text-foreground uppercase tracking-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Keunggulan Kami
        </motion.p>
        <div className="space-y-4 md:space-y-6">
          <motion.h2
            // 3. Typography: Ukuran font responsif
            className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Empat Pilar Layanan Utama Solvera
          </motion.h2>
          <motion.p
            className="text-foreground text-base md:text-lg leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dengan pendekatan end-to-end, kami memastikan setiap tahap
            transformasi digital klien berjalan efektif, efisien, dan
            berkelanjutan.
          </motion.p>
        </div>
      </div>

      {/* 4. Grid Section: Full width di mobile, 65% di desktop */}
      <div className="w-full lg:w-[65%] flex items-center">
        {/* 5. Grid: 1 kolom di mobile, 2 kolom di tablet ke atas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {pilar.map((p, index) => (
            <motion.div
              key={index}
              className="bg-brand-primary-subtle flex gap-4 items-center rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay lebih cepat
            >
              {/* Icon wrapper (shrink-0) */}
              <div className="shrink-0">
                <Image 
                  src={p.icon} 
                  alt={p.title} 
                  height={56} 
                  width={56} 
                  className="w-10 h-10 md:w-14 md:h-14" // Ukuran icon responsif
                />
              </div>
              <h6 className="font-bold text-gray-800 text-sm md:text-base leading-snug group-hover:text-brand-primary transition-colors">
                {p.title}
              </h6>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};