
import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/features/layout/components/SectionTitle";
import { Stat } from "@/features/layout/components/Stat";

export const Layout = () => {
    const layoutData = [
        {icon: '/icons/analytics.svg', title: 'Analisis Tantangan & Kebutuhan', content: 'Kami melakukan analisis mendalam untuk mengidentifikasi root cause dari tantangan operasional, memastikan strategi dan solusi yang dirancang dapat tepat sasaran'},
        {icon: '/icons/date_range.svg', title: `Perancangan Solusi & Prioritas`, content: 'Kami merancang roadmap solusi dan menentukan prioritas implementasi, berfokus pada tindakan yang memberikan dampak bisnis dan Return on Investment secara maksimal'},
        {icon: '/icons/checklist.svg', title: 'Implementasi & Optimalisasi', content: 'Kami memastikan teknologi dan talenta baru tidak hanya terimplementasi, tetapi juga terintegrasi penuh dan beroperasi secara optimal dalam ekosistem bisnis Anda'},
    ]

  return (
    <div className="py-12 md:px-16 px-4 space-y-20">
      <SectionTitle
        tagline="Mengapa Memilih Kami"
        title="Talenta Berkualitas Melalui Proses Terukur"
        subtitle="Kami menjamin kualitas layanan untuk mendukung operasional bisnis Anda secara optimal. Solusi penempatan talenta kami didasarkan pada analisis data yang mendalam dan metodologi terukur untuk memberikan hasil yang akurat"
        classNames="text-center md:px-20 space-y-4"
      />

      <div className="flex flex-col md:flex-row md:gap-12 gap-10 text-center">
    {
        layoutData.map((l,index)=> (
            <Stat icon={<Image src={l.icon} alt="logo" height={56} width={56}/>} title={l.title} content={l.content} key={index} classNames="text-start !min-w-0"/>
        ))
    }
      </div>
    </div>
  );
}
