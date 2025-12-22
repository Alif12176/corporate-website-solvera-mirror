"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ClipboardList,
  Award,
  LineChart,
  User,
  RefreshCw,
  TerminalSquare,
} from "lucide-react";

const expertRoles = [
  {
    icon: <ClipboardList className="w-10 h-10" />,
    title: "Project Manager",
    description:
      "Mengelola proyek dan program layanan secara menyeluruh, dari awal hingga akhir. Tim kami memberikan saran strategis, manajemen pengadaan, dan fleksibel untuk beroperasi di organisasi kecil, besar, maupun lembaga pemerintah.",
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Subject Matter Expert",
    description:
      "Menyediakan keahlian khusus industri yang mendalam untuk memastikan ketepatan, kualitas, dan inovasi di setiap aspek proyek Anda. Kami berperan sebagai mitra transformasi Anda untuk mencapai kesuksesan.",
  },
  {
    icon: <LineChart className="w-10 h-10" />,
    title: "Business Analyst",
    description:
      "Melakukan analisis bisnis untuk mengoptimalkan proses dan aplikasi. Peran kami adalah mengubah data dan kebutuhan bisnis Anda menjadi insight yang aplikatif, serta menjamin solusi memberikan dampak nyata bagi organisasi.",
  },
  {
    icon: <User className="w-10 h-10" />,
    title: "Product Manager",
    description:
      "Memahami kebutuhan dan keinginan pelanggan melalui riset pasar. Bertanggung jawab menentukan roadmap produk jangka pendek dan panjang, serta mengevaluasi ide baru dan mengelola siklus hidup produk.",
  },
  {
    icon: <RefreshCw className="w-10 h-10" />,
    title: "Scrum Master",
    description:
      "Bertindak sebagai fasilitator utama dalam metodologi Scrum, yang mendukung kolaborasi efektif antara Product Owner dan tim. Peran ini berfokus menjaga ritme kerja tim tanpa mengambil alih otoritas manajemen.",
  },
  {
    icon: <TerminalSquare className="w-10 h-10" />,
    title: "Programmer",
    description:
      "Kami menyediakan tenaga ahli IT dengan skill terkini, sehingga mengurangi beban biaya pelatihan dan sertifikasi internal perusahaan Anda. Kami memastikan pengembangan aplikasi selalu up-to-date dan relevan dengan kebutuhan bisnis.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ExpertTeam() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold text-foreground tracking-wider uppercase mb-2 block"
          >
            Dapatkan Keahlian Sesuai Permintaan
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-brand-primary mb-6"
          >
            Akses Tim Ahli Multirole
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-foreground text-base md:text-lg leading-relaxed"
          >
            Layanan kami memberikan akses langsung kepada perusahaan Anda ke
            profesional spesialis tanpa perlu proses rekrutmen internal yang
            rumit. Kami menyediakan tim ahli berpengalaman untuk memastikan
            proyek Anda berjalan dengan keahlian, kualitas, dan inovasi terbaik.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {expertRoles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-brand-primary mb-6 transform hover:scale-110 transition-transform duration-300">
                {role.icon}
              </div>

              <h3 className="text-xl font-bold text-brand-primary mb-4">
                {role.title}
              </h3>

              <p className="text-foreground text-sm leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
