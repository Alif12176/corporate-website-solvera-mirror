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

export const Header = ({stat}: Props) => {

  return (
    <div>
      <div className="md:pt-12 md:px-16 md:space-y-20 space-y-10 max-w-7xl mx-auto">
        <SectionTitle
          title={stat[0].section_title}
          subtitle={stat[0].section_subtitle}
        />

        <div className="md:flex md:gap-12 grid grid-cols-2 gap-6 px-4">
          {stat.map((s, index) => (
            <div
              className="bg-brand-primary-subtle md:p-8 p-5 space-y-12 rounded-xl flex flex-col items-center text-center border-[#00080426] md:w-1/4"
              key={index}
            >
              {/* <Image src={s.icon} alt="icon" /> */}
              <h6>{s.card_label}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
