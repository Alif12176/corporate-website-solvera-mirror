"use client";

import React from "react";
import { Stats } from "./PelatihanStat";
import { Layout } from "./PelatihanLayout";
import { Hero } from "../../layout/components/Hero";
import { Content } from "./PelatihanContent";
import { ConsultationCTA } from "../../layout/components/ConsultationCTA";
import { WhatsAppFAB } from "../../layout/components/WhatsAppFAB";

export const PelatihanPage = () => {
  return (
    <main>
      <Hero
        image="/images/hero-pelatihan.jpg"
        title="Pelatihan & Sertifikasi Talenta Digital"
        subtitle="Kami menyediakan program pelatihan dan sertifikasi yang dirancang untuk meningkatkan kompetensi tim Anda. Layanan ini memastikan tenaga profesional Anda siap mengadopsi dan mengoperasionalkan perkembangan teknologi terbaru secara efektif"
      />
      <div className="max-w-full mx-auto">
        <Stats />
        <Layout />
        <Content />
        <ConsultationCTA />
        <WhatsAppFAB />
      </div>
    </main>
  );
};
