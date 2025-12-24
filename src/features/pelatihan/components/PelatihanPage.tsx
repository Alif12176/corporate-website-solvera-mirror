"use client";

import React from "react";
import { Stats } from "./PelatihanStat";
import { Layout } from "./PelatihanLayout";
import { Hero } from "../../layout/components/Hero";
import { Content } from "./PelatihanContent";
import { ConsultationCTA } from "../../layout/components/ConsultationCTA";
import { WhatsAppFAB } from "../../layout/components/WhatsAppFAB";
import type { Service } from "../data/service";

export const PelatihanPage = ({ service }: { service: Service }) => {
  return (
    <main>
      <Hero
        image={service.hero.bg_image}
        title={service.hero.heading}
        subtitle={service.hero.tagline}
      />
      <div className="max-w-full mx-auto">
        <Stats tagline={service.focus_section.tagline} heading={service.focus_section.heading} description={service.focus_section.description} items={service.focus_section.items} />
        <Layout layout={service.methodology_section.layout} heading={service.methodology_section.heading} description={service.methodology_section.description} footer={service.methodology_section.footer} items={service.methodology_section.items} />
        <Content heading={service.competency_section.heading} description={service.competency_section.description} footer={service.competency_section.footer} items={service.competency_section.items} />
        <ConsultationCTA />
        <WhatsAppFAB />
      </div>
    </main>
  );
};
