import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/features/layout/components/SectionTitle";
import Link from "next/link";
import { MethodologyItem } from "../data/service";

interface LayoutProps {
  layout: string;
  heading: string;
  description: string;
  footer: string;
  items: MethodologyItem[];
}

export const Layout = ({ layout, heading, description, footer, items }: LayoutProps) => {

  return (
    <div className="py-12 md:px-16 px-4 space-y-20">
      <SectionTitle
        tagline={footer}
        title={heading}
        subtitle={description}
        classNames="text-center md:px-20 space-y-4"
      />

      <div className="flex md:flex-row flex-col gap-12 text-center">
        {
          items.map((l, index) => (
            <div className="flex flex-col items-center gap-8" key={index}>
              <Image src={l.icon} alt="icon" width={48} height={48} />
              <h5 className="text-brand-primary">{l.title}</h5>
              <p className="text-regular">{l.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
