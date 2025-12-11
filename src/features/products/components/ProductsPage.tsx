"use client"

import { Button } from "@/features/layout/components/Button"
import { ConsultationCTA } from "@/features/layout/components/ConsultationCTA"
import { Hero } from "@/features/layout/components/Hero"
import { Blog } from "./ProductBlog"

// import {Button} from '../components/Button'
// import {Gallery} from './_components/Gallery'
// import {Blog} from './_components/Blog'
// import {CTA} from './_components/CTA'

export const ProductsPage = () => {
  return (
    <>
      <Hero image='/images/hero_product.webp' title='Teknologi Bisnis yang Terintegrasi, Sederhana, dan Bermanfaat' subtitle='Solusi kami dirancang untuk mudah diakses, terjangkau , dan memberikan hasil terbaik untuk mendukung pertumbuhan perusahaan Anda di era digital' action={<Button color="primary" radius='normal'>Lihat Layanan Kami</Button>} />
      <Blog />
      <ConsultationCTA />
    </>
  )
}
