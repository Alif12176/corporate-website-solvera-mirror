"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ClientLogos = () => {
    // Shared logo lists
    const logosRow1 = [
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Danone%20Indonesia.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Dana%20Pensiun%20OJK.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Coca-Cola%20Europacific%20Partners.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Astra%20International.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Victoria%20Care.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Trakindo%20Utama.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Telkom%20Sigma.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Sido%20Muncul.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Samudera%20Indonesia.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Wijaya%20Karya%20%28WIKA%29.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Waskita%20Karya.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Virtus%20Venturama.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Vale%20Indonesia%20Tbk.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20TPPI.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Tamaris%20Hydro.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Sucofindo.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Staromni%20Industri.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20SMART%20Tbk.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Pupuk%20Indonesia%20%28Persero%29.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Pulo%20Mas%20Jaya.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Pos%20Indonesia%20%28POS%20IND%29.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Polytama%20Propindo.png",
    ];

    // Duplicate for infinite scroll effect
    const logosRow1Duplicated = [...logosRow1, ...logosRow1];

    const logosRow2 = [
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Petrokimia%20Gresik.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Pertamedika%20IHC.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Penjaminan%20Infrastruktur%20Indonesia%20%28PII%29.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Pengadaan%20Indonesia.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Nusantara%20Medika%20Utama.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Novell%20Pharmaceutical.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Nindya%20Karya.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Metta%20Sinar%20Sejahtera.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Latinusa%20Tbk.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Lamong%20Energi%20Indonesia.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Krakatau%20Steel%20Tbk.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Kimia%20Farma%20Tbk.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20KBN%20%28Kawasan%20Berikat%20Nusantara%29.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Kansai%20Paint%20Indonesia.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Kalbe%20Farma%20Tbk.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Jasa%20Marga.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Jasa%20Marga%20Tollroad%20Maintenance.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20JakLingko%20Indonesia.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Jakarta%20Propertindo%20%28JakPro%29.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20INKA%20%28Industri%20Kereta%20Api%29.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Indonesia%20Chemical%20Alumina.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Indexim%20Coalindo.png",
    ];
    const logosRow2Duplicated = [...logosRow2, ...logosRow2];

    const logosRow3 = [
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Hutama%20Karya.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Gagas%20Energi%20Indonesia.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Elnusa%20Petrofin.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Depoguna%20Bangunan%20Online.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Bukit%20Asam%20Tbk.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Brantas%20Abipraya.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Antam%20Tbk.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Angkasa%20Pura%20Supports.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Angkasa%20Pura%20Properti%20%28IAS%20Properties%29.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PT%20Alba%20Pack%20Global.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Perumda%20Tirta%20Alam%20Tarakan.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Perum%20Jasa%20Tirta%20I.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Pelindo%20%28Pelabuhan%20Indonesia%29.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/PAM%20JAYA.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Nestl%C3%A9%20Indonesia.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/MRT%20Jakarta.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Medco%20Energi.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/LRT%20Jakarta.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Kalla%20Group.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Indomaret.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Garuda%20Indonesia.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Food%20Station%20Tjipinang%20Jaya.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Alfamart.png",
        "https://gqxmce8d8pkarsyu.public.blob.vercel-storage.com/Solvera/Solvera_Website/Client_Logo/Aerofood%20ACS.png",
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
                                    src={logo}
                                    alt={decodeURIComponent(logo.split('/').pop()?.replace('.png', '') || 'Client Logo')}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                                    src={logo}
                                    alt={decodeURIComponent(logo.split('/').pop()?.replace('.png', '') || 'Client Logo')}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                                    src={logo}
                                    alt={decodeURIComponent(logo.split('/').pop()?.replace('.png', '') || 'Client Logo')}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
