"use client";

import React from "react";
import { Stats } from "./components/PelatihanStat";
import { Layout } from "./components/PelatihanLayout";
import { Hero } from "../layout/components/Hero";
import { Content } from "./components/PelatihanContent";
import { ConsultationCTA } from "../layout/components/ConsultationCTA";
import { Button } from "../layout/components/Button";

export const PelatihanPage = () => {
  return (
    <main>
      <Hero
        image="/images/hero-pelatihan.jpg"
        title="Pelatihan & Sertifikasi Talenta Digital"
        subtitle="Kami menyediakan program pelatihan dan sertifikasi yang dirancang untuk meningkatkan kompetensi tim Anda. Layanan ini memastikan tenaga profesional Anda siap mengadopsi dan mengoperasionalkan perkembangan teknologi terbaru secara efektif"
        action={<Button variant="default" radius="normal" size="base">Jadwalkan Konsultasi</Button>}
      />
      <div className="max-w-full mx-auto">
        <Stats />
        <Layout />
        <Content />
        <ConsultationCTA />
      </div>
    </main>
  );
};
