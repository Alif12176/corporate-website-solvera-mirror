"use client";

import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { m } from "framer-motion";
import { PromoData } from "@/features/layout/types/promo";

interface MintaDemoHeroProps {
    data: PromoData | null;
}

export const MintaDemoHero = ({ data }: MintaDemoHeroProps) => {

    const defaultContent = {
        title: "Transformasi Bisnis Anda Dimulai di Sini",
        subtitle: "Jangan hanya dengar kata kami. Buktikan sendiri bagaimana solusi kami membantu perusahaan tumbuh lebih cepat.",
        features: [
            "Sistem Terintegrasi: Kelola bisnis dalam satu dashboard.",
            "Fleksibel & Skalabel: Mendukung semua skala bisnis.",
            "Rekam Jejak Teruji: Dipercaya industri terkemuka."
        ],
        image: "/images/img_factory2.webp"
    };

    const isPromoActive = data && data.isActive;

    const content = isPromoActive && data ? {
        title: data.title,
        subtitle: data.subtitle,
        features: data.features || [],
        image: data.illustrationUrl || data.image || defaultContent.image
    } : defaultContent;

    return (
        <section className="relative w-full h-screen flex flex-col justify-center px-page-mobile lg:px-page-global py-section-medium-mobile lg:py-section-medium-desktop overflow-hidden bg-neutral-900 font-sans">

            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={content.image}
                    alt="Promo Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay Warna */}
                <div className="absolute inset-0 bg-[#0a1d639a] z-10" />
            </div>

            <div className="relative z-10 flex flex-col gap-8 text-white max-w-2xl mx-auto lg:mx-0">
                <div className="flex flex-col items-start gap-4">

                    {/* Badge Promo - Hanya muncul jika Promo dari API Aktif */}
                    {isPromoActive && (
                        <div className="inline-block bg-brand-danger text-white text-tiny font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                            Promo Terbatas
                        </div>
                    )}

                    {/* Heading */}
                    <h2 className="text-h2 font-bold leading-tight">
                        {content.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="tagline-md text-neutral-200 leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>

                {/* List Features */}
                <ul className="flex flex-col gap-4">
                    {content.features.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-4 group">
                            <div className="mt-1 min-w-6 min-h-6 w-6 h-6 rounded-md bg-brand-border-subtle flex items-center justify-center text-brand-primary text-sm shadow-sm transition-transform group-hover:scale-110">
                                <FaCheck />
                            </div>
                            <span className="text-regular text-neutral-200">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* --- Bagian Logo Client --- */}
            <div className="mt-16 relative z-10">
                <p className="text-tagline-md font-semibold mb-6 text-neutral-300 text-center uppercase tracking-widest">
                    Telah Dipercaya Oleh
                </p>

                <div className="relative w-full overflow-hidden mask-gradient-x flex flex-col gap-6">
                    {/* Row 1 */}
                    <div className="flex w-full overflow-hidden">
                        <m.div
                            className="flex gap-8 items-center"
                            animate={{ x: "-50%" }}
                            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                        >
                            {LOGO_ROW_1.map((logo, index) => (
                                <div key={`row1-${index}`} className="shrink-0 h-24 w-48 relative bg-brand-primary-subtle rounded-lg flex items-center justify-center border border-white/5 px-2 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <Image
                                        src={`/company-logo/${logo}`}
                                        alt="Client Logo"
                                        fill
                                        className="object-contain p-2 opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </m.div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex w-full overflow-hidden">
                        <m.div
                            className="flex gap-8 items-center"
                            animate={{ x: "0%" }}
                            initial={{ x: "-50%" }}
                            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                        >
                            {LOGO_ROW_2.map((logo, index) => (
                                <div key={`row2-${index}`} className="shrink-0 h-24 w-48 relative bg-brand-primary-subtle rounded-lg flex items-center justify-center border border-white/5 px-2 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <Image
                                        src={`/company-logo/${logo}`}
                                        alt="Client Logo"
                                        fill
                                        className="object-contain p-2 opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </m.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LOGO_ROW_1 = [
    "PT Brantas Abipraya.png", "PT Bukit Asam Tbk.png", "PT Depoguna Bangunan Online.png", "PT Elnusa Petrofin.png", "PT Gagas Energi Indonesia.png", "PT Hutama Karya.png", "PT INKA (Industri Kereta Api).png", "PT Indexim Coalindo.png", "PT Jasa Marga.png", "PT KBN (Kawasan Berikat Nusantara).png", "PT Kalbe Farma Tbk.png", "PT Kansai Paint Indonesia.png", "PT Kimia Farma Tbk.png", "PT Krakatau IT.png", "PT Krakatau Steel Tbk.png", "PT Brantas Abipraya.png", "PT Bukit Asam Tbk.png", "PT Depoguna Bangunan Online.png", "PT Elnusa Petrofin.png", "PT Gagas Energi Indonesia.png", "PT Hutama Karya.png", "PT INKA (Industri Kereta Api).png", "PT Indexim Coalindo.png", "PT Jasa Marga.png", "PT KBN (Kawasan Berikat Nusantara).png", "PT Kalbe Farma Tbk.png", "PT Kansai Paint Indonesia.png", "PT Kimia Farma Tbk.png", "PT Krakatau IT.png", "PT Krakatau Steel Tbk.png", "PT Lamong Energi Indonesia.png", "PT Latinusa Tbk.png", "PT Metta Sinar Sejahtera.png", "PT Nindya Karya.png", "PT Novell Pharmaceutical.png", "PT Nusantara Medika Utama.png", "PT Petrokimia Gresik.png", "PT SIER.png", "PT SMART Tbk.png", "PT Semen Indonesia Logistik (SILOG).png", "PT Staromni Industri.png", "PT Sucofindo.png",
];

const LOGO_ROW_2 = [
    "PT Lamong Energi Indonesia.png", "PT Latinusa Tbk.png", "PT Metta Sinar Sejahtera.png", "PT Nindya Karya.png", "PT Novell Pharmaceutical.png", "PT Nusantara Medika Utama.png", "PT Petrokimia Gresik.png", "PT SIER.png", "PT SMART Tbk.png", "PT Semen Indonesia Logistik (SILOG).png", "PT Staromni Industri.png", "PT Sucofindo.png", "Aerofood ACS.png", "Alfamart.png", "Astra International.png", "Coca-Cola Europacific Partners.png", "Dana Pensiun OJK.png", "Danone Indonesia.png", "Food Station Tjipinang Jaya.png", "Garuda Indonesia.png", "Indomaret.png", "Kalla Group.png", "LRT Jakarta.png", "MRT Jakarta.png", "Medco Energi.png", "Nestlé Indonesia.png", "PAM JAYA.png", "PT Alba Pack Global.png", "PT Antam Tbk.png", "Aerofood ACS.png", "Alfamart.png", "Astra International.png", "Coca-Cola Europacific Partners.png", "Dana Pensiun OJK.png", "Danone Indonesia.png", "Food Station Tjipinang Jaya.png", "Garuda Indonesia.png", "Indomaret.png", "Kalla Group.png", "LRT Jakarta.png", "MRT Jakarta.png", "Medco Energi.png", "Nestlé Indonesia.png", "PAM JAYA.png", "PT Alba Pack Global.png", "PT Antam Tbk.png",
];