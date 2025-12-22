"use client";

import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { m } from "framer-motion";

export const MintaDemoHero = () => {
    return (
        <div className="relative w-full h-full min-h-[600px] flex flex-col justify-center p-8 lg:p-16 overflow-hidden bg-neutral-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/img_factory2.webp"
                    alt="Manajemen Bisnis Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#0a1d639a] z-10" />
            </div>
            <div className="relative z-10 flex flex-col gap-8 text-white max-w-2xl mx-auto lg:mx-0">
                <div>
                    <h2 className="text-h2 font-medium mb-4 leading-tight">
                        Transformasi Bisnis Anda Dimulai di Sini
                    </h2>
                    <p className="text-tagline-md text-neutral-200 leading-relaxed">
                        Jangan hanya dengar kata kami. Buktikan sendiri bagaimana solusi kami membantu perusahaan manufaktur, logistik, dan sektor lainnya tumbuh lebih cepat.
                    </p>
                </div>

                <ul className="flex flex-col gap-4">
                    {[
                        "Sistem Terintegrasi: Kelola seluruh proses bisnis dalam satu dashboard pusat.",
                        "Fleksibel & Skalabel: Mendukung pertumbuhan bisnis dari skala kecil, menengah, hingga enterprise.",
                        "Rekam Jejak Teruji: Telah dipercaya oleh pemain industri terkemuka."
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <div className="mt-1 min-w-6 min-h-6 w-6 h-6 rounded-md bg-[#8496F6] flex items-center justify-center text-white text-sm">
                                <FaCheck />
                            </div>
                            <span className="text-neutral-200">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-8 relative z-10">
                <p className="text-tagline-md font-semibold mb-4 text-neutral-300 text-center">
                    Dipercaya oleh Perusahaan Terdepan di Indonesia
                </p>
                {/* Infinite Logo Slider */}
                <div className="relative w-full overflow-hidden mask-gradient-x flex flex-col gap-6">
                    {/* <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-neutral-900 via-neutral-900/80 to-transparent" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-neutral-900 via-neutral-900/80 to-transparent" /> */}

                    {/* Row 1 - Scroll Left */}
                    <div className="flex w-full overflow-hidden">
                        <m.div
                            className="flex gap-8 items-center"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 50,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[
                                "Aerofood ACS.png", "Alfamart.png", "Astra International.png", "Coca-Cola Europacific Partners.png",
                                "Dana Pensiun OJK.png", "Danone Indonesia.png", "Food Station Tjipinang Jaya.png", "Garuda Indonesia.png",
                                "Indomaret.png", "Kalla Group.png", "LRT Jakarta.png", "MRT Jakarta.png",
                                "Medco Energi.png", "Nestlé Indonesia.png", "PAM JAYA.png", "PT Alba Pack Global.png",
                                "PT Angkasa Pura Properti (IAS Properties).png", "PT Angkasa Pura Supports.png", "PT Antam Tbk.png",
                                // Duplicates
                                "Aerofood ACS.png", "Alfamart.png", "Astra International.png", "Coca-Cola Europacific Partners.png",
                                "Dana Pensiun OJK.png", "Danone Indonesia.png", "Food Station Tjipinang Jaya.png", "Garuda Indonesia.png",
                                "Indomaret.png", "Kalla Group.png", "LRT Jakarta.png", "MRT Jakarta.png",
                                "Medco Energi.png", "Nestlé Indonesia.png", "PAM JAYA.png", "PT Alba Pack Global.png",
                                "PT Angkasa Pura Properti (IAS Properties).png", "PT Angkasa Pura Supports.png", "PT Antam Tbk.png",
                            ].map((logo, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 h-24 w-48 relative bg-brand-primary-subtle rounded-lg flex items-center justify-center border border-white/5 px-2 backdrop-blur-sm hover:bg-white/10 transition-colors"
                                >
                                    <Image
                                        src={`/company-logo/${logo}`}
                                        alt={logo.replace(".png", "")}
                                        fill
                                        className="object-contain p-2 opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </m.div>
                    </div>

                    {/* Row 2 - Scroll Right */}
                    <div className="flex w-full overflow-hidden">
                        <m.div
                            className="flex gap-8 items-center"
                            animate={{ x: "0%" }}
                            initial={{ x: "-50%" }}
                            transition={{
                                duration: 50,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[
                                "PT Brantas Abipraya.png", "PT Bukit Asam Tbk.png", "PT Depoguna Bangunan Online.png", "PT Elnusa Petrofin.png",
                                "PT Gagas Energi Indonesia.png", "PT Hutama Karya.png", "PT INKA (Industri Kereta Api).png", "PT Indexim Coalindo.png",
                                "PT Indonesia Chemical Alumina.png", "PT JakLingko Indonesia.png", "PT Jakarta Propertindo (JakPro).png",
                                "PT Jasa Marga Tollroad Maintenance.png", "PT Jasa Marga.png", "PT KBN (Kawasan Berikat Nusantara).png",
                                "PT Kalbe Farma Tbk.png", "PT Kansai Paint Indonesia.png", "PT Kimia Farma Tbk.png", "PT Krakatau IT.png",
                                "PT Krakatau Steel Tbk.png",
                                // Duplicates
                                "PT Brantas Abipraya.png", "PT Bukit Asam Tbk.png", "PT Depoguna Bangunan Online.png", "PT Elnusa Petrofin.png",
                                "PT Gagas Energi Indonesia.png", "PT Hutama Karya.png", "PT INKA (Industri Kereta Api).png", "PT Indexim Coalindo.png",
                                "PT Indonesia Chemical Alumina.png", "PT JakLingko Indonesia.png", "PT Jakarta Propertindo (JakPro).png",
                                "PT Jasa Marga Tollroad Maintenance.png", "PT Jasa Marga.png", "PT KBN (Kawasan Berikat Nusantara).png",
                                "PT Kalbe Farma Tbk.png", "PT Kansai Paint Indonesia.png", "PT Kimia Farma Tbk.png", "PT Krakatau IT.png",
                                "PT Krakatau Steel Tbk.png",
                            ].map((logo, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 h-24 w-48 relative bg-brand-primary-subtle rounded-lg flex items-center justify-center border border-white/5 px-2 backdrop-blur-sm hover:bg-white/10 transition-colors"
                                >
                                    <Image
                                        src={`/company-logo/${logo}`}
                                        alt={logo.replace(".png", "")}
                                        fill
                                        className="object-contain p-2 opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </m.div>
                    </div>

                    {/* Row 3 - Scroll Left */}
                    <div className="flex w-full overflow-hidden">
                        <m.div
                            className="flex gap-8 items-center"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 45,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[
                                "PT Lamong Energi Indonesia.png", "PT Latinusa Tbk.png", "PT Metta Sinar Sejahtera.png", "PT Nindya Karya.png",
                                "PT Novell Pharmaceutical.png", "PT Nusantara Medika Utama.png", "PT Pengadaan Indonesia.png", "PT Penjaminan Infrastruktur Indonesia (PII).png",
                                "PT Pertamedika IHC.png", "PT Petrokimia Gresik.png", "PT Polytama Propindo.png", "PT Pos Indonesia (POS IND).png",
                                "PT Pulo Mas Jaya.png", "PT Pupuk Indonesia (Persero).png", "PT Purna Baja Harsco.png", "PT SIER.png",
                                "PT SMART Tbk.png", "PT Sarana Multi Infrastruktur (SMI).png", "PT Semen Indonesia Logistik (SILOG).png",
                                "PT Staromni Industri.png", "PT Sucofindo.png",
                                // Duplicates
                                "PT Lamong Energi Indonesia.png", "PT Latinusa Tbk.png", "PT Metta Sinar Sejahtera.png", "PT Nindya Karya.png",
                                "PT Novell Pharmaceutical.png", "PT Nusantara Medika Utama.png", "PT Pengadaan Indonesia.png", "PT Penjaminan Infrastruktur Indonesia (PII).png",
                                "PT Pertamedika IHC.png", "PT Petrokimia Gresik.png", "PT Polytama Propindo.png", "PT Pos Indonesia (POS IND).png",
                                "PT Pulo Mas Jaya.png", "PT Pupuk Indonesia (Persero).png", "PT Purna Baja Harsco.png", "PT SIER.png",
                                "PT SMART Tbk.png", "PT Sarana Multi Infrastruktur (SMI).png", "PT Semen Indonesia Logistik (SILOG).png",
                                "PT Staromni Industri.png", "PT Sucofindo.png",
                            ].map((logo, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 h-24 w-48 relative bg-brand-primary-subtle rounded-lg flex items-center justify-center border border-white/5 px-2 backdrop-blur-sm hover:bg-white/10 transition-colors"
                                >
                                    <Image
                                        src={`/company-logo/${logo}`}
                                        alt={logo.replace(".png", "")}
                                        fill
                                        className="object-contain p-2 opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </m.div>
                    </div>
                </div>
            </div>

        </div>
    );
};
