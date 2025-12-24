"use client"

import { ConsultationCTA } from "../../layout/components/ConsultationCTA"
import { Hero } from "../../layout/components/Hero"
import { Layout } from "./TalentaLayout"
import { Content } from "./TalentaContent"
import { WhatsAppFAB } from "@/features/layout/components/WhatsAppFAB"
import { Service } from "../data/service"

export const TalentaDigitalPage = ({ service }: { service: Service }) => {
  console.log("service", service)

  return (
    <>
      <Hero image={service.hero.bg_image} title={service.hero.heading} subtitle={service.hero.tagline} />
      <Layout tagline={service.focus_section.tagline} heading={service.focus_section.heading} description={service.focus_section.description} items={service.focus_section.items} />
      <Content heading={service.competency_section.heading} description={service.competency_section.description} footer={service.competency_section.footer} items={service.competency_section.items} />
      <ConsultationCTA />
      <WhatsAppFAB />
    </>
  )
}
