"use client";
import { Button } from "@/features/layout/components/Button";
import { SectionTitle } from "@/features/layout/components/SectionTitle";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  tab: {
    id: number;
    label: string;
  }[];
  sectionTitle: {
    title: string;
    subtitle: string;
  };
  solution: {
    heading: string;
    text: string;
    list: string[];
  }[];
}

const dummyTab = [
  { id: 1, label: "Kontrol Stok Unit & Pembangunan" },
  { id: 2, label: "Penjualan Lebih Cepat" },
  { id: 3, label: "Pengelolaan Pembayaran" },
  { id: 4, label: "Kurangi Kesalahan & Duplikasi" },
];

const dummySolution = [
  {
    heading: "Kontrol Penuh terhadap Stok Unit & Progres Pembangunan",
    text: "Solvera memberikan visibilitas menyeluruh terhadap seluruh unit, mulai dari status ketersediaan, tipe unit, harga, sampai progres konstruksi secara real-time.",
    list: [
      "Dashboard stok unit lengkap (tersedia, booked, sold, hold)",
      "Update progres pembangunan dengan foto & persentase",
      "Manajemen perubahan harga & promo otomatis",
      "Notifikasi untuk unit yang hampir sold out",
    ],
  },
  {
    heading: "Proses jualan jadi lebih cepat dan terorganisir dengan baik!",
    text: "Setiap tahapan penjualan—dari lead capture hingga closing—tercatat otomatis dalam satu alur yang tertib dan mudah diakses.",
    list: [
      "Lead management otomatis dari website, iklan, atau sales",
      "Booking fee & reservasi unit secara digital",
      "Tanda tangan elektronik untuk dokumen pemesanan",
      "Riwayat interaksi customer lengkap di satu timeline",
      "Pipeline penjualan real-time untuk monitoring sales performance",
    ],
  },
  {
    heading: "Pengelolaan Pembayaran Lebih Tertib & Akurat",
    text: "Solvera membantu mengelola skema pembayaran KPR, KPA, cicilan bertahap, hingga pembayaran termin konstruksi secara terstruktur dan minim kesalahan.",
    list: [
      "Jadwal pembayaran otomatis berdasarkan skema pembeli",
      "Reminder jatuh tempo via email & WhatsApp",
      "Rekonsiliasi pembayaran dengan bank secara cepat",
      "Tracking status KPR/KPA (survei, appraisal, approval)",
      "Laporan arus kas proyek & aging invoice real-time",
    ],
  },
  {
    heading: "Meminimalkan Human Error & Duplikasi Data",
    text: "Dengan sistem yang terintegrasi, semua proses—dari pemasaran, penjualan, keuangan, sampai serah terima—terhubung tanpa perlu proses manual yang bisa bikin kesalahan.",
    list: [
      "Integrasi unit, customer, dokumen, dan pembayaran dalam satu data master",
      "Validasi otomatis untuk data penting ",
      "Penggunaan template dokumen untuk mengurangi input berulang",
      "Log aktivitas untuk audit & pelacakan error",
      "Backup data & keamanan berlapis untuk menjaga integritas informasi",
    ],
  },
];

export default function Tab({ tab = dummyTab, sectionTitle, solution = dummySolution }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  // console.log("solution", solution)
  return (
    <div>
      <div className="pt-16">
        <SectionTitle
          title={sectionTitle.title}
          subtitle={sectionTitle.subtitle}
        />
        <div className="flex py-6 md:px-20 px-4 gap-4 overflow-auto">
          {tab.map((t, index) => (
            <Button
              variant={activeTab == index ? "default" : "outline"}
              key={index}
              onClick={() => setActiveTab(index)}
              className="w-full"
            >
              {t.label}
            </Button>
          ))}
        </div>

        <div className="pt-6 pb-12 md:px-20 px-4 flex md:flex-row flex-col items-center md:gap-20 gap-10">
          <div className="space-y-8 md:w-1/2">
            <p className="text-heading tagline font-semibold">Our Solution</p>
            <div className="space-y-6">
              <h2 className="text-primary">{solution[activeTab]?.heading}</h2>
              <p className="text-medium">{solution[activeTab]?.text}</p>
            </div>
            <Link href={"/hubungi-kami"}>
              <Button variant="default">Hubungi Kami</Button>
            </Link>
          </div>
          <div className="space-y-8 md:w-1/2">
            <h5 className="text-primary">Nilai Strategis & Manfaat</h5>
            <div className="space-y-4 py-2">
              {solution[activeTab]?.list.map((l, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <div className="bg-primary-subtle rounded-lg w-8 h-8 flex justify-center items-center">
                    <CheckIcon className="h-6 text-primary" />
                  </div>
                  <p className="text-regular">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
