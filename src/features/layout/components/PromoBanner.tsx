"use client";

import { Button } from "@/features/layout/components/Button";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { m } from "framer-motion";
import { PromoData } from "../types/promo";

interface PromoBannerProps {
  isScrolled: boolean;
  data: PromoData | null;
}

export const PromoBanner = ({ isScrolled, data }: PromoBannerProps) => {
  if (!data || !data.isActive) return null;

  const finalImage = data.image || "";

  const finalLink = data.ctaLink.startsWith("http") || data.ctaLink.startsWith("/")
    ? data.ctaLink
    : `/${data.ctaLink}`;

  return (
    <div
      style={{
        backgroundColor: isScrolled ? data.scrollBg : data.idleBg,
        transition: "all 0.5s ease-in-out",
      }}
      className={`w-full transition-all duration-500 ease-in-out border-b border-white/10 overflow-hidden relative
        ${isScrolled ? "h-[45px]" : "h-[120px] md:h-[180px]"}
      `}
    >
      <div
        className={`absolute right-0 top-0 bottom-0 h-full transition-all duration-500 ease-in-out
          ${isScrolled ? "opacity-0 translate-x-10" : "opacity-40 md:opacity-100 translate-x-0"}
        `}
        style={{
          width: "100%",
          backgroundImage: `url("${finalImage}")`,
          backgroundSize: "auto 100%",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />

      <div className="h-full px-page-mobile md:px-page-global mx-auto max-w-[1920px] relative z-20">
        <div className="relative h-full w-full flex items-center">

          {/* 1. STATE IDLE (BESAR) */}
          <div className={`flex items-center gap-4 md:gap-6 transition-all duration-500 w-full md:max-w-[65%]
            ${isScrolled ? "opacity-0 translate-y-[-20px] pointer-events-none invisible absolute" : "opacity-100 translate-y-0 visible relative"}
          `}>
            <div className="flex shrink-0">
              <div className="w-16 h-16 md:w-28 md:h-28 bg-white text-[#131D40] flex flex-col items-center justify-center" style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}>
                <span className="text-[7px] md:text-[10px] font-bold opacity-80 uppercase leading-none">{data.promoBadge.line1}</span>
                <span className="text-xl md:text-4xl font-black my-0.5 md:my-1 leading-none">{data.promoBadge.line2}</span>
                <span className="text-[7px] md:text-[9px] font-black uppercase leading-none">{data.promoBadge.label}</span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 md:gap-4">
              <h2 className="text-white font-bold text-sm md:text-3xl leading-tight line-clamp-2 italic">{data.title}</h2>
              <Button as={Link} href={finalLink} className="font-bold px-6 h-8 md:h-12 bg-white text-[#131D40] text-[10px] md:text-sm" radius="sm">
                {data.ctaLabel}
              </Button>
            </div>
          </div>

          {/* 2. STATE SCROLL (KECIL) */}
          <div className={`flex items-center justify-between w-full transition-all duration-500
            ${isScrolled ? "opacity-100 translate-y-0 visible relative" : "opacity-0 translate-y-[20px] pointer-events-none invisible absolute"}
          `}>

            {/* Kiri: Badge (Tetap) */}
            <div
              className="shrink-0 pl-2 pr-4 md:pl-3 md:pr-5 py-1 bg-white text-[#E7223A] font-bold text-[9px] md:text-[11px] italic z-30"
              style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
            >
              {data.promoBadge.line2} OFF
            </div>

            {/* Tengah: Kondisional Marquee vs Static */}
            <div className="flex-1 overflow-hidden mx-4 relative">
              <div className="block md:hidden">
                <m.div
                  className="whitespace-nowrap flex gap-10"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                >
                  <span className="text-white text-[11px] font-semibold italic uppercase tracking-wider">
                    {data.title} &nbsp; • &nbsp; {data.title}
                  </span>
                  <span className="text-white text-[11px] font-semibold italic uppercase tracking-wider">
                    {data.title} &nbsp; • &nbsp; {data.title}
                  </span>
                </m.div>
              </div>

              <div className="hidden md:block">
                <p className="text-white text-sm font-semibold italic uppercase tracking-wider truncate">
                  {data.title}
                </p>
              </div>
            </div>

            {/* Kanan: CTA (Tetap) */}
            <Link
              href={finalLink}
              className="shrink-0 flex items-center gap-1 px-3 py-1 bg-white text-[#E7223A] rounded-full text-[10px] md:text-xs font-bold transition-all z-30"
            >
              <span className="hidden md:inline">{data.ctaLabel}</span>
              <RiArrowRightLine className="text-sm" />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};