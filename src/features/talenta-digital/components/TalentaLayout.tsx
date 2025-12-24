
import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/features/layout/components/SectionTitle";
import { Stat } from "@/features/layout/components/Stat";
import { FocusSectionItem } from "../data/service";

interface LayoutProps {
  tagline: string;
  heading: string;
  description: string;
  items: FocusSectionItem[];
}

export const Layout = ({ tagline, heading, description, items }: LayoutProps) => {
  return (
    <div className="py-12 md:px-16 px-4 space-y-20">
      <SectionTitle
        tagline={tagline}
        title={heading}
        subtitle={description}
        classNames="text-center md:px-20 space-y-4"
      />

      <div className="flex flex-col md:flex-row md:gap-12 gap-10 text-center">
        {
          items.map((l, index) => (
            <Stat icon={<Image src={l.icon} alt="logo" height={56} width={56} />} title={l.title} content={l.description} key={index} classNames="text-start !min-w-0" />
          ))
        }
      </div>
    </div>
  );
}
