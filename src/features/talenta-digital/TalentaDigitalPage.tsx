"use client"

import { CTA } from "../layout/components/CTA"
import { Hero } from "../layout/components/Hero"
import { Layout } from "./components/TalentaLayout"
import { Content } from "./components/TalentaContent"
import { Button } from "../layout/components/Button"

export const TalentaDigitalPage = () => {
  return (
    <>
      <Hero image='/images/hero-pelatihan.jpg' title='Akselerasi Bisnis dengan Talenta Digital Unggul' subtitle='Kami membantu Anda membangun dan mengelola tim talenta digital yang kompeten untuk mendukung dan mengakselerasi operasional serta inovasi teknologi bisnis Anda' action={<Button variant="default" radius="normal" size="base">Jadwalkan Konsultasi</Button>} />
      <Layout />
      <Content />
      <CTA />
    </>
  )
}
