"use client"

import { ConsultationCTA } from "../../layout/components/ConsultationCTA"
import { Hero } from "../../layout/components/Hero"
import { Layout } from "./TalentaLayout"
import { Content } from "./TalentaContent"
import { WhatsAppFAB } from "@/features/layout/components/WhatsAppFAB"

export const TalentaDigitalPage = () => {
  return (
    <>
      <Hero image='/images/hero-pelatihan.jpg' title='Akselerasi Bisnis dengan Talenta Digital Unggul' subtitle='Kami membantu Anda membangun dan mengelola tim talenta digital yang kompeten untuk mendukung dan mengakselerasi operasional serta inovasi teknologi bisnis Anda' />
      <Layout />
      <Content />
      <ConsultationCTA />
      <WhatsAppFAB />
    </>
  )
}
