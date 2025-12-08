"use client";

import React from "react";
import { Stats } from "./components/PelatihanStat";
import { Layout } from "./components/PelatihanLayout";
import { Hero } from "../layout/components/Hero";
import { Content } from "./components/PelatihanContent";
import { CTA } from "../layout/components/CTA";
import { BaseButton } from "../layout/components/BaseButton";

export const PelatihanPage = () => {
  return (
    <main>
      <Hero
        image='/images/hero-pelatihan.jpg'
        title="Pelatihan & Sertifikasi Talenta Digital"
        subtitle="Kami menyediakan program pelatihan dan sertifikasi yang dirancang untuk meningkatkan kompetensi tim Anda. Layanan ini memastikan tenaga profesional Anda siap mengadopsi dan mengoperasionalkan perkembangan teknologi terbaru secara efektif"
        action={<BaseButton>Jadwalkan Konsultasi</BaseButton>}
      />
      <div className="max-w-full mx-auto">
      <Stats />
      <Layout />
      <Content />
      <CTA />
      </div>
    </main>
  );
};
