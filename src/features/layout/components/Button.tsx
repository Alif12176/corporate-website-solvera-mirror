"use client";

import { extendVariants, Button as HeroButton } from "@heroui/react";

export const Button = extendVariants(HeroButton, {
    variants: {
        // Contoh varian warna custom (opsional)
        color: {
            olive: "text-[#000] bg-[#84cc16]",
            orange: "bg-[#ff8c00] text-[#fff]",
        },
        radius: {
            normal: "rounded-[6px]", // Contoh hardcoded value
            // brand: "rounded-brand-medium", // Contoh menggunakan token (pastikan token ada di globals.css)
        },
        // Contoh menambahkan varian size baru
        // size: {
        //     xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
        // },
    },
    compoundVariants: [
        {
            isDisabled: "true",
            class: "!bg-brand-disabled !text-brand-disabled-content opacity-100",
            // opacity-100 agar warna kita terlihat jelas
        },
    ],
}); 