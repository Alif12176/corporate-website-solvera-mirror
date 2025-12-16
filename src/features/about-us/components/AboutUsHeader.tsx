"use client";
import { SectionTitle } from "@/features/layout/components/SectionTitle";
import { Stat } from "@/features/layout/components/Stat";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const AboutUsHeader = () => {
  const pendekatan = [
    {
      icon: "/icons/support-agent.svg",
      title: "Konsultasi",
      content:
        "ahli kami siap membantu Anda mulai dari analisis kebutuhan hingga perencanaan strategis",
    },
    {
      icon: "/icons/manufacturing.svg",
      title: "Implementasi",
      content:
        "Proses implementasi yang terstruktur dan efisien untuk memastikan semua solusi berjalan dengan optimal",
    },
    {
      icon: "/icons/monitor-heart.svg",
      title: "Monitoring",
      content:
        "Monitoring penuh untuk memastikan sistem Anda berjalan lancar dan memberikan hasil terbaik",
    },
    {
      icon: "/icons/handshake.svg",
      title: "Support",
      content:
        "Tim kami siap memberikan dukungan berkelanjutan untuk memastikan kesuksesan jangka panjang bisnis Anda",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-12 px-16 space-y-20 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          title="Pendekatan Kami untuk Kesuksesan Anda"
          subtitle="Kami mengedepankan solusi untuk setiap tantangan bisnis Anda"
        />
      </motion.div>

      <motion.div className="flex flex-col md:flex-row md:gap-12 gap-10" initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}>
        {pendekatan.map((p, index) => (
            <Stat
              key={index}
              icon={
                <Image
                  src={p.icon}
                  alt="icon"
                  height={50}
                  width={56}
                  className="h-14"
                />
              }
              title={p.title}
              content={p.content}
              classNames="!min-w-0 !w-full"
            />
        ))}
      </motion.div>
    </div>
  );
};
