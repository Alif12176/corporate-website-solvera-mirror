"use client";

import { useState } from "react";
import { Button } from "@/features/layout/components/Button";
import { m, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Search,
  Wrench,
  Headphones,
  Users,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

const INDUSTRI_DATA = [
  {
    id: 1,
    title: "Logistic dan Transportasi",
    desc: "Optimalkan rute dalam sistem ERP terintegrasi untuk meningkatkan efisiensi operasional dan pengiriman.",
  },
  {
    id: 2,
    title: "Industri dan Manufaktur",
    desc: "Meningkatkan efisiensi produksi, akurasi perencanaan, pengendalian persediaan, hingga distribusi.",
  },
  {
    id: 3,
    title: "Jasa & Layanan Profesional",
    desc: "Meningkatkan efisiensi operasional, mempercepat layanan, dan mengelola proyek dengan lebih baik.",
  },
  {
    id: 4,
    title: "Perbankan & Asuransi",
    desc: "Mengelola operasional secara menyeluruh. Dari pengajuan sampai pelunasan—semua transparan.",
  },
  {
    id: 5,
    title: "Media, Telekomunikasi & IT",
    desc: "Mengelola konten, campaign, pelanggan, dan operasional secara lebih cepat, efisien, dan terukur.",
  },
];

const TABS = ["industri", "konsultasi", "talenta"] as const;
type Tab = typeof TABS[number];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Solutions() {
  const [activeTab, setActiveTab] = useState<Tab>("industri");

  return (
    <section className="py-20 bg-white" id="solutions">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <m.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2"
          >
            Produk Dan Layanan Solvera
          </m.p>

          <m.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
          >
            Solusi Lengkap untuk Transformasi Bisnis Anda
          </m.h2>

          <m.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            Jelajahi analisis mendalam, studi kasus, dan strategi praktis untuk
            mendorong transformasi digital di perusahaan Anda.
          </m.p>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {TABS.map((tab) => (
            <Button
              variant={`${activeTab === tab ? 'default' : 'outline'}`}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={"px-6 py-2 rounded-md"}
            >
              {tab === "industri"
                ? "Solusi Sektor Industri"
                : tab === "konsultasi"
                  ? "Konsultasi & Manajemen"
                  : "Talenta Digital"}
            </Button>
          ))}
        </m.div>

        <AnimatePresence mode="wait">
          {activeTab === "industri" && (
            <m.div
              key="industri"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {INDUSTRI_DATA.map((item, index) => (
                <m.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-full md:w-[350px] bg-brand-primary-subtle rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-blue-100 group"
                >
                  <div className="h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                    </svg>
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300"></div>
                  </div>
                  <div className="px-2 pb-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                      {item.desc}
                    </p>
                    <Button variant="default" className="w-full rounded-md">
                      Pelajari Selengkapnya <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </m.div>
              ))}
            </m.div>
          )}

          {activeTab === "konsultasi" && (
            <m.div
              key="konsultasi"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInUp}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-3"
            >
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="text-sm font-bold text-foreground mb-2 block">
                  Konsultasi & Manajemen
                </span>
                <h3 className="text-4xl font-bold text-brand-primary mb-6">
                  Strategic Digital Advisory
                </h3>
                <p className="text-foreground mb-8 leading-relaxed">
                  Pendekatan konsultatif untuk membangun arsitektur teknologi
                  yang selaras dengan strategi bisnis Anda. Dari assessment
                  hingga implementasi, kami pastikan setiap investasi teknologi
                  menghasilkan dampak nyata.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="bg-brand-primary-subtle p-2 rounded-full">
                      <Search className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="font-medium">
                      Audit & Analisis Proses Bisnis
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="bg-brand-primary-subtle p-2 rounded-full">
                      <Wrench className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="font-medium">
                      Implementasi Sistem yang Efisien
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="bg-brand-primary-subtle p-2 rounded-full">
                      <Headphones className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="font-medium">
                      Manajemen Proyek & Perubahan
                    </span>
                  </li>
                </ul>

                <Button variant="default" className="px-6 py-2 rounded-md">
                  Konsultasi Gratis
                </Button>
              </m.div>

              <m.div
                className="flex flex-col gap-4 items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="w-full max-w-md bg-white border-2 border-blue-500 rounded-xl p-6 text-center shadow-sm relative z-10">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-700">
                    <Search className="w-6 h-6" /> Analisis
                  </div>
                </div>
                <div className="h-8 w-0.5 bg-blue-500"></div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-blue-500"></div>

                <div className="w-full max-w-md bg-white border-2 border-blue-500 rounded-xl p-6 text-center shadow-sm relative z-10">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-700">
                    <Wrench className="w-6 h-6" /> Implementasi
                  </div>
                </div>
                <div className="h-8 w-0.5 bg-blue-500"></div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-blue-500"></div>

                <div className="w-full max-w-md bg-white border-2 border-blue-500 rounded-xl p-6 text-center shadow-sm relative z-10">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-700">
                    <Headphones className="w-6 h-6" /> Dukungan
                  </div>
                </div>
              </m.div>
            </m.div>
          )}

          {activeTab === "talenta" && (
            <m.div
              key="talenta"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInUp}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-3"
            >
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="text-sm font-bold text-foreground mb-2 block">
                  Talenta Digital
                </span>
                <h3 className="text-4xl font-bold text-brand-primary mb-6">
                  Penyediaan & Pelatihan <br /> Talenta Digital
                </h3>
                <p className="text-foreground mb-8 leading-relaxed">
                  Kami membantu Anda memenuhi kebutuhan talenta digital. Kami
                  menyediakan layanan rekrutmen ahli serta program pelatihan dan
                  sertifikasi untuk tim operasional Anda.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-brand-primary mt-1 shrink-0" />
                    <div>
                      <h6 className="font-bold text-gray-900">
                        Penyediaan Talenta Ahli (Talent Sourcing)
                      </h6>
                      <p className="text-sm text-gray-600">
                        Akses ke jaringan developer dan IT profesional siap
                        kerja.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <GraduationCap className="w-6 h-6 text-brand-primary mt-1 shrink-0" />
                    <div>
                      <h6 className="font-bold text-gray-900">
                        Pelatihan & Sertifikasi Karyawan
                      </h6>
                      <p className="text-sm text-gray-600">
                        Kurikulum berbasis industri untuk upskilling tim
                        internal Anda.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="px-6 py-2 rounded-md" variant="default">
                  Hubungi Tim Kami
                </Button>
              </m.div>

              <m.div
                className="relative h-[400px] w-full bg-blue-100 rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/img_group1.webp"
                    alt="Ilustrasi Task"
                    fill
                    className="object-cover"
                  />
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
