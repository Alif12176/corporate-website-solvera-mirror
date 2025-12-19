"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ClientLogos = () => {
    // Shared logo lists
    const logosRow1 = [
        "Aerofood ACS.png", "Alfamart.png", "Astra International.png", "Coca-Cola Europacific Partners.png",
        "Dana Pensiun OJK.png", "Danone Indonesia.png", "Food Station Tjipinang Jaya.png", "Garuda Indonesia.png",
        "Indomaret.png", "Kalla Group.png", "LRT Jakarta.png", "MRT Jakarta.png",
        "Medco Energi.png", "Nestlé Indonesia.png", "PAM JAYA.png", "PT Alba Pack Global.png",
        "PT Angkasa Pura Properti (IAS Properties).png", "PT Angkasa Pura Supports.png", "PT Antam Tbk.png",
    ];

    // Duplicate for infinite scroll effect
    const logosRow1Duplicated = [...logosRow1, ...logosRow1];

    const logosRow2 = [
        "PT Brantas Abipraya.png", "PT Bukit Asam Tbk.png", "PT Depoguna Bangunan Online.png", "PT Elnusa Petrofin.png",
        "PT Gagas Energi Indonesia.png", "PT Hutama Karya.png", "PT INKA (Industri Kereta Api).png", "PT Indexim Coalindo.png",
        "PT Indonesia Chemical Alumina.png", "PT JakLingko Indonesia.png", "PT Jakarta Propertindo (JakPro).png",
        "PT Jasa Marga Tollroad Maintenance.png", "PT Jasa Marga.png", "PT KBN (Kawasan Berikat Nusantara).png",
        "PT Kalbe Farma Tbk.png", "PT Kansai Paint Indonesia.png", "PT Kimia Farma Tbk.png", "PT Krakatau IT.png",
        "PT Krakatau Steel Tbk.png",
    ];
    const logosRow2Duplicated = [...logosRow2, ...logosRow2];

    const logosRow3 = [
        "PT Lamong Energi Indonesia.png", "PT Latinusa Tbk.png", "PT Metta Sinar Sejahtera.png", "PT Nindya Karya.png",
        "PT Novell Pharmaceutical.png", "PT Nusantara Medika Utama.png", "PT Pengadaan Indonesia.png", "PT Penjaminan Infrastruktur Indonesia (PII).png",
        "PT Pertamedika IHC.png", "PT Petrokimia Gresik.png", "PT Polytama Propindo.png", "PT Pos Indonesia (POS IND).png",
        "PT Pulo Mas Jaya.png", "PT Pupuk Indonesia (Persero).png", "PT Purna Baja Harsco.png", "PT SIER.png",
        "PT SMART Tbk.png", "PT Sarana Multi Infrastruktur (SMI).png", "PT Semen Indonesia Logistik (SILOG).png",
        "PT Staromni Industri.png", "PT Sucofindo.png",
    ];
    const logosRow3Duplicated = [...logosRow3, ...logosRow3];

    return (
        <div className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <h5 className="font-medium text-brand-primary mb-2">
                    Dipercaya oleh Perusahaan Terdepan di Indonesia
                </h5>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient-x flex flex-col gap-6">
                {/* Row 1 - Scroll Left */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex gap-8 items-center"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {logosRow1Duplicated.map((logo, index) => (
                            <div
                                key={`row1-${index}`}
                                className="shrink-0 h-24 w-48 relative bg-brand-primary-subtle rounded-lg flex items-center justify-center border border-brand-primary-subtle px-2 backdrop-blur-sm hover:bg-brand-primary-subtle/10 transition-colors"
                            >
                                <Image
                                    src={`/company-logo/${logo}`}
                                    alt={logo.replace(".png", "")}
                                    fill
                                    className="object-contain p-2 opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Scroll Right */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex gap-8 items-center"
                        animate={{ x: "0%" }}
                        initial={{ x: "-50%" }}
                        transition={{
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {logosRow2Duplicated.map((logo, index) => (
                            <div
                                key={`row2-${index}`}
                                className="shrink-0 h-24 w-48 relative bg-brand-primary-subtle rounded-lg flex items-center justify-center border border-brand-primary-subtle px-2 backdrop-blur-sm hover:bg-brand-primary-subtle/10 transition-colors"
                            >
                                <Image
                                    src={`/company-logo/${logo}`}
                                    alt={logo.replace(".png", "")}
                                    fill
                                    className="object-contain p-2 opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 3 - Scroll Left */}
                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex gap-8 items-center"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 45,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {logosRow3Duplicated.map((logo, index) => (
                            <div
                                key={`row3-${index}`}
                                className="shrink-0 h-24 w-48 relative bg-brand-primary-subtle rounded-lg flex items-center justify-center border border-brand-primary-subtle px-2 backdrop-blur-sm hover:bg-brand-primary-subtle/10 transition-colors"
                            >
                                <Image
                                    src={`/company-logo/${logo}`}
                                    alt={logo.replace(".png", "")}
                                    fill
                                    className="object-contain p-2 opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
