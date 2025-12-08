"use client"

import { CTA } from "../layout/components/CTA"
import { BaseButton } from "../layout/components/BaseButton"
import { Hero } from "../layout/components/Hero"
import { Layout } from "./components/TalentaLayout"
import { Content } from "./components/TalentaContent"

export const TalentaDigitalPage = () => {
  return (
    <>
    <Hero image='/images/hero-pelatihan.jpg' title='Akselerasi Bisnis dengan Talenta Digital Unggul' subtitle='Kami membantu Anda membangun dan mengelola tim talenta digital yang kompeten untuk mendukung dan mengakselerasi operasional serta inovasi teknologi bisnis Anda' action={<BaseButton>Jadwalkan Konsultasi</BaseButton>}/>
    <Layout />
    <Content />
    <CTA />
    </>
  )
}
