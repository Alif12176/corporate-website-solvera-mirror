import { Button } from '@/features/layout/components/Button'
import { Hero } from '@/features/layout/components/Hero'
import React from 'react'
import VisionMission from './AboutUsVisionMission'
import { AboutUsHeader } from './AboutUsHeader'
import { AboutUsStat } from './AboutUsStat'
import { AboutUsContact } from './AboutUsContact'
import { AboutUsTim } from './AboutUsTim'
import { ConsultationCTA } from '@/features/layout/components/ConsultationCTA'

export const AboutUsPage = () => {
  return (
    <div>
        <Hero image='/images/hero_product.webp' title='Mitra Strategis Anda Dalam Transformasi Digital' subtitle='Solvera Indonesia adalah perusahaan inovatif di bidang teknologi informasi. Kami adalah mitra strategis Anda dalam mengarungi era digital, menyediakan solusi teknologi inovatif dan konsultasi ahli untuk pertumbuhan bisnis yang berkelanjutan' action={<Button color='primary' radius='normal'>Hubungi Kami</Button>} />
        <VisionMission />
        <AboutUsHeader />
        <AboutUsStat />
        <AboutUsContact />
        <AboutUsTim />
        <ConsultationCTA />
    </div>
  )
}
