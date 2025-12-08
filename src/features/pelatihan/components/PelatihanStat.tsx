import React from "react";
import Image from "next/image";
import { Button } from "@/features/layout/components/Button";
import { Stat } from "@/features/layout/components/Stat";

export const Stats = () => {
  const statData = [
    { icon: '/icons/flowchart.svg', title: "Pelatihan Arsitektur Software", content: "Kami menyediakan program edukasi komprehensif mengenai arsitektur software, mencakup materi dari tingkat fundamental hingga konsep advanced" },
    { icon: '/icons/lightbulb_2.svg', title: "Strategi Peningkatan Bisnis", content: "Peserta akan mendapatkan *insight* strategis dan rekomendasi praktis mengenai penerapan teknologi untuk mengidentifikasi peluang dan mendorong peningkatan proses bisnis" },
    { icon: '/icons/search_insights.png', title: "Riset dan Analisis Data", content: "Metodologi kami berfokus pada pengembangan kemampuan berpikir analitis. Kami melatih peserta untuk memulai setiap inisiatif dengan riset mendalam dan analisis data yang objektif" },
    { icon: '/icons/cycle.png', title: "Praktik Aplikatif", content: "Kurikulum kami menyeimbangkan pemahaman teoretis dengan praktik aplikatif. Peserta akan mengerjakan studi kasus dan *workshop* secara langsung untuk memastikan keahlian siap digunakan" },
  ]

  return (
    <div className="flex md:flex-row flex-col md:gap-20 gap-10 md:pt-28 pt-12 md:px-16 px-4 pb-12 justify-center">
      <div className="space-y-8 md:w-[400px]">
        <div className="space-y-4">
          <p className="text-heading tagline-md font-semibold">Mentor Tim Ahli</p>
          <div className="space-y-6">
            <h2>Transfer Pengetahuan & Bimbingan Ahli</h2>
            <p className="text-medium">
              Adopsi teknologi baru agar tetap kompetitif perlu diimbangi dengan keahlian tim. Kami menjembatani kesenjangan keahlian tersebut. Solvera menyediakan mentor ahli dan program edukasi terstruktur untuk melatih karyawan Anda, memastikan mereka siap mengoperasikan teknologi baru secara optimal dan mandiri
            </p>
          </div>
        </div>
        <div>
          <Button variant="default" radius="normal" size="base" classNames="flex gap-3">
            Pelajari Detail
          </Button>
        </div>
      </div>
      <div className="md:w-[800px] grid md:grid-cols-2 gap-8">
        {
          statData.map((s, index) => (
            <Stat icon={<Image src={s.icon} alt="logo" width={56} height={56} />} title={s.title} content={s.content} key={index} classNames="!min-w-0" />
          ))
        }
      </div>
    </div>
  );
}
