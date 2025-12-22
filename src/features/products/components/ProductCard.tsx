import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  action?: React.ReactNode;
  onClick?: () => void;
  image?: any;
}

export const Card = ({
  title,
  subtitle,
  action,
  onClick,
  image = "/images/placeholder-image.png",
}: Props) => {
  return (
    <div className="rounded-xl flex flex-col">
      <div className="relative min-h-[177px] w-full rounded-t-xl overflow-hidden">
        <Image
          src={image}
          alt="img"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="p-6 bg-brand-primary-subtle rounded-b-xl h-[223px] flex flex-col justify-between">
        <div className="space-y-4">
          <h6 className="truncate">{title}</h6>
          <p className="line-clamp-2 ">{subtitle}</p>
        </div>
        {action}
      </div>
    </div>
  );
};
