"use client";

import { extendVariants, Button as HeroButton } from "@heroui/react";

export const Button = extendVariants(HeroButton, {
    variants: {
        // Mirip BaseButton: default, alternative, outline
        variant: {
            default:
                "border-2 border-brand-primary bg-brand-primary text-white",
            alternative:
                "border-2 border-[#C0CAF2] bg-[#C0CAF2] text-[#1C1C1C]",
            outline:
                "border-2 border-brand-primary text-brand-primary bg-[#E7EBFB]",
        },

        // Tambahan opsional: radius
        radius: {
            normal: "rounded-[6px]",
        },

        // Tambahan opsional: size mirip BaseButton
        size: {
            base: "py-2.5 px-6 font-medium",
        },
    },

    // Disabled custom (mirip BaseButton: opacity + cursor)
    compoundVariants: [
        {
            isDisabled: "true",
            class:
                "opacity-50 cursor-not-allowed !bg-brand-disabled !text-brand-disabled-content",
        },
    ],
});
