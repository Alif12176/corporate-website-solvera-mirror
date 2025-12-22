"use client";

import React from "react";
import { m, Variants } from "framer-motion";
import {
  Factory,
  Package,
  Hammer,
  Bot,
  Banknote,
  FileText,
  Utensils,
  Home,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Industri & Manufaktur",
    description:
      "Mengoptimalkan proses produksi yang kompleks. Kami menyediakan solusi untuk mempercepat alur kerja, meningkatkan efisiensi, dan mengelola keterbatasan sumber daya secara efektif.",
    link: "/solusi/manufaktur",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Bisnis Trading & Distribusi",
    description:
      "Membutuhkan visibilitas real-time atas pergerakan barang. Solusi teknologi kami memungkinkan pelacakan (tracking) inventaris yang akurat untuk barang masuk dan keluar secara cepat dan cermat.",
    link: "/solusi/distribusi",
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Konstruksi & Pertambangan",
    description:
      "Mengelola proyek dan operasional lapangan yang kompleks. Teknologi membantu standarisasi proses (SOP), manajemen proyek, dan kepatuhan (compliance) untuk operasional yang terstruktur.",
    link: "/solusi/konstruksi",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Industri Mesin & Pengadaan",
    description:
      "Mengelola proses pengadaan (procurement) dari berbagai vendor. Teknologi dibutuhkan untuk otomatisasi pemesanan, pencatatan terpusat, dan manajemen komunikasi vendor skala besar.",
    link: "/solusi/mesin",
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    title: "Jasa Keuangan & Finansial",
    description:
      "Membutuhkan proses manajemen finansial yang cepat, aman, dan akurat. Teknologi menggantikan proses konvensional untuk meningkatkan akurasi data, keamanan transaksi, dan kecepatan pelaporan.",
    link: "/solusi/keuangan",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Jasa Asuransi",
    description:
      "Menyederhanakan manajemen polis dan klien (CRM) yang kompleks. Kami membantu membangun relasi klien yang lebih baik melalui layanan teknologi digital yang responsif dan terintegrasi.",
    link: "/solusi/asuransi",
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Restoran & Perhotelan",
    description:
      "Mengendalikan operasional high-traffic. Teknologi digital mempercepat sistem reservasi, manajemen meja (POS), penjadwalan staf, dan proses transaksi secara terpusat.",
    link: "/solusi/hospitality",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Bisnis Properti",
    description:
      "Mengelola portofolio properti skala besar membutuhkan sistem yang robust. Kami mempermudah manajemen properti dan siklus hidup kontrak (contract management) secara digital.",
    link: "/solusi/properti",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Bisnis Ritel",
    description:
      "Mengintegrasikan seluruh sistem bisnis retail (POS, Inventaris, Akuntansi). Solusi kami mempercepat proses checkout dan transaksi, sekaligus menghemat sumber daya operasional.",
    link: "/solusi/ritel",
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function SectorSolutions() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <m.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold text-gray-900 tracking-widest uppercase mb-3"
          >
            Keahlian Lintas Industri
          </m.p>

          <m.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight"
          >
            Solusi Teknologi yang Disesuaikan <br className="hidden md:block" />{" "}
            untuk Sektor Anda
          </m.h2>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Solvera menyediakan layanan yang dirancang khusus untuk berbagai
            sektor industri. Melalui Subject Matter Expert (SME) kami yang
            berpengalaman, kami mampu menganalisis tantangan unik Anda dan
            memberikan solusi teknologi yang paling efektif.
          </m.p>
        </div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {solutions.map((item, index) => (
            <m.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-700 mb-4 px-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                {item.description}
              </p>

              <Link
                href={item.link}
                className="w-full bg-blue-700 text-white py-3 rounded-md flex items-center justify-center gap-2 font-medium hover:bg-blue-800 transition-all hover:shadow-lg mt-auto text-sm"
              >
                Lihat Solusi Terkait
                <ArrowRight className="w-4 h-4" />
              </Link>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
