import React from "react";
import Image from "next/image";
import { Button } from "@/features/layout/components/Button";
import { Stat } from "@/features/layout/components/Stat";
import { FocusSectionItem } from "../data/service";
import Link from "next/link";

interface StatsProps {
  tagline: string;
  heading: string;
  description: string;
  items: FocusSectionItem[];
}

export const Stats = ({ tagline, heading, description, items }: StatsProps) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-20 gap-10 md:pt-28 pt-12 md:px-16 px-4 pb-12 justify-center">
      <div className="space-y-8 md:w-[400px]">
        <div className="space-y-4">
          <p className="text-heading tagline-md font-semibold">{tagline}</p>
          <div className="space-y-6">
            <h2 className="text-brand-primary">{heading}</h2>
            <p className="text-medium">
              {description}
            </p>
          </div>
        </div>
        <div>
          <Button as={Link} href="#" variant="default" radius="normal" size="base" classNames="flex gap-3">
            Pelajari Detail
          </Button>
        </div>
      </div>
      <div className="md:w-[800px] grid md:grid-cols-2 gap-8">
        {
          items.map((s, index) => (
            <Stat icon={<Image src={s.icon} alt="logo" width={56} height={56} />} title={s.title} content={s.description} key={index} classNames="!min-w-0" />
          ))
        }
      </div>
    </div>
  );
}
