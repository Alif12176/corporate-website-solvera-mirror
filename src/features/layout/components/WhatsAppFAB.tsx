"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { RiWhatsappFill } from "react-icons/ri";
import { m, AnimatePresence } from "framer-motion";

export const WhatsAppFAB = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-8 right-8 z-9999 flex items-center justify-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <m.div
        initial={false}
        animate={{
          width: isHovered ? "auto" : "64px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="overflow-hidden rounded-[20px] bg-[#25D366] shadow-2xl shadow-green-500/30"
      >
        <Button
          as="a"
          href="https://wa.me/62xxxxxxxx" // Ganti dengan nomor asli
          target="_blank"
          variant="flat"
          className="h-[64px] min-w-[64px] border-none bg-transparent p-0 text-white"
          disableRipple
        >
          <div className="flex items-center px-4 gap-3">
            {/* Icon WhatsApp */}
            <div className="flex min-w-6 items-center justify-center">
              <RiWhatsappFill size={36} />
            </div>

            {/* Teks Animasi */}
            <AnimatePresence>
              {isHovered && (
                <m.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-start pr-4 whitespace-nowrap"
                >
                  <span className="text-lg font-bold leading-tight">
                    Konsultasi Sekarang!
                  </span>
                  <span className="text-xs font-medium opacity-90">
                    Konsultasikan kebutuhan bisnis Anda sekarang!
                  </span>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </Button>
      </m.div>
    </div>
  );
};