import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/features/layout/components/SectionTitle";

export const Layout = () => {
    const layoutData = [
        {icon: '/icons/network_wifi_3_bar.svg', title: 'Model Kerja Hybrid & Fleksibel', content: 'Model kerja fleksibel (WFA/WFO) yang dirancang untuk meningkatkan efisiensi operasional. Ini memberikan agilitas tim dan mendukung work-life balance untuk retensi talenta terbaik'},
        {icon: '/icons/share_reviews.svg', title: 'Kolaborasi Tim Terintegrasi', content: 'Memfasilitasi kolaborasi tim secara real-time melalui platform digital terpusat. Memastikan alur kerja berjalan lancar dan data terbagi secara efisien tanpa hambatan geografis'},
        {icon: '/icons/schedule.svg', title: 'Produktivitas & Keseimbangan Kerja', content: 'Mendukung keseimbangan antara kehidupan profesional dan pribadi. Lingkungan kerja yang seimbang terbukti meningkatkan fokus, produktivitas, dan engagement karyawan'},
    ]

  return (
    <div className="py-12 md:px-16 px-4 space-y-20">
      <SectionTitle
        tagline="Solusi Inovatif Terpercaya"
        title="Strategi Talenta untuk Produktivitas Tinggi"
        subtitle="Sistem kerja yang fleksibel sangat krusial untuk produktivitas tim modern. Kami menyediakan talenta digital berkualitas yang siap beradaptasi dan terintegrasi dengan alur kerja Anda untuk memastikan efisiensi operasional"
        classNames="text-center md:px-20 space-y-4"
      />

      <div className="flex md:flex-row flex-col gap-12 text-center">
    {
        layoutData.map((l,index)=> (
            <div className="flex flex-col items-center gap-8" key={index}>
                <Image src={l.icon} alt="icon" width={48} height={48}/>
                <h5 className="text-brand-primary">{l.title}</h5>
                <p className="text-regular">{l.content}</p>
            </div>
        ))
    }
      </div>
    </div>
  );
}
