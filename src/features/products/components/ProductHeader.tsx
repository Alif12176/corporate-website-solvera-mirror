import Image from "next/image";
import React from "react";
// import Hub from "@/app/assets/icons/hub.svg";
// import Manufacturing from "@/app/assets/icons/manufacturing.png";
// import Bar from "@/app/assets/icons/bar_chart.svg";
import { SectionTitle } from "@/features/layout/components/SectionTitle";
import { WhyUsItem } from "../data/product";

interface Props {
  stat: WhyUsItem[]
}

export const Header = ({ stat }: Props) => {

  return (
    <div>
      <div className="md:pt-12 md:pb-20 py-10 px-4 md:px-16 space-y-10 md:space-y-16 max-w-7xl mx-auto">
        <SectionTitle
          title={stat[0].section_title}
          subtitle={stat[0].section_subtitle}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stat.map((s, index) => (
            <div
              className="bg-brand-primary-subtle p-6 md:p-8 space-y-4 md:space-y-6 rounded-xl flex flex-col items-center justify-center text-center border border-[#00080426]"
              key={index}
            >
              <Image src={s.icon} alt="icon" width={60} height={60} className="w-10 h-10 md:w-[60px] md:h-[60px]" />
              <h6 className="text-sm md:text-lg font-semibold text-brand-text-primary">{s.card_label}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
