"use client";

import { motion } from "framer-motion";
import { Users, ArrowDownUp } from "lucide-react";

const services = [
  {
    icon: <Users className="w-8 h-8 text-black" />,
    title: "Akses Tim Ahli Multirole",
    description:
      "Dapatkan akses ke tim ahli multirole kami, termasuk programmer, analis bisnis, analis sistem, scrum master, dan manajer proyek. Kami siap membantu Anda mengatasi tantangan teknis dengan anggaran yang efisien dan terkelola.",
  },
  {
    icon: <ArrowDownUp className="w-8 h-8 text-black" />,
    title: "Skalabilitas Tim yang Fleksibel",
    description:
      "Selesaikan proyek khusus atau penuhi kebutuhan tahunan Anda tanpa perlu menambah staf tetap. Layanan kami menawarkan skalabilitas yang sesuai untuk proyek kecil hingga menengah, maupun untuk kebutuhan enterprise.",
  },
];

export default function ManagedServices() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold text-gray-900 tracking-wide uppercase mb-2 block"
          >
            Keahlian Tersedia, Kualitas Terjamin
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-blue-700 mb-6"
          >
            Solvera Managed Service
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Optimalkan efisiensi biaya dan waktu Anda tanpa mengorbankan
            kualitas. Fokus pada bisnis inti Anda sementara tim profesional kami
            mengelola operasional, pemeliharaan, dan optimalisasi infrastruktur
            IT Anda secara menyeluruh.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="bg-[#EBF1FF] rounded-xl p-10 flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-transparent mb-6">{service.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
