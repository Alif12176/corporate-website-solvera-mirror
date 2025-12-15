"use client";

import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { RiFacebookFill, RiInstagramLine, RiTwitterXFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

import { usePathname } from "next/navigation";

export const Footer = () => {
    const pathname = usePathname();

    // Hide footer on specific pages
    if (pathname === "/minta-demo") {
        return null;
    }

    const socialLinks = [
        { icon: RiFacebookFill, href: "#" },
        { icon: RiInstagramLine, href: "#" },
        { icon: RiTwitterXFill, href: "#" },
        { icon: RiLinkedinFill, href: "#" },
        { icon: RiYoutubeFill, href: "#" },
    ];

    const services = [
        "Konsultasi Bisnis",
        "Managed Service",
        "Transformasi Digital",
        "Layanan Bidang Industri",
        "Pelatihan Sertifikasi",
        "Talenta Digital",
        "Layanan Manajemen"
    ];

    const companyLinks = [
        "Produk Kami",
        "Berita dan Artikel",
        "Tentang Kami",
        "Hubungi Kami"
    ];

    return (
        <footer className="w-full pt-16 pb-8">
            <div className="container mx-auto px-page-mobile md:px-page-global">
                {/* Main Content */}
                <div className="bg-brand-primary-subtle rounded-3xl p-8 md:p-12 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <div className="relative w-[180px] h-[56px]">
                                <Image
                                    src="/icons/solvera-logo-text.svg"
                                    alt="Solvera Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="text-foreground text-body-md max-w-md">
                                Solvera Indonesia adalah perusahaan inovatif di bidang teknologi informasi
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                                {socialLinks.map((social, idx) => (
                                    <Link
                                        key={idx}
                                        href={social.href}
                                        className="text-foreground hover:text-brand-primary transition-colors"
                                    >
                                        <social.icon size={24} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Column */}
                        <div className="lg:col-span-3 flex flex-col gap-6">
                            <h4 className="font-bold text-lg">Hubungi Kami</h4>
                            <div className="flex flex-col gap-4 text-body-sm">
                                <div>
                                    <span className="font-bold">Alamat:</span> The Prominence Office Tower Level 28 Unit C, Jl. Jalur Sutera Barat No. 15... Kota Tangerang, Banten - 15143.
                                </div>
                                <div>
                                    <span className="font-bold">Email:</span> info@solvera.id
                                </div>
                                <div>
                                    <span className="font-bold">Telepon:</span> +62 813-9000-9640
                                </div>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <h4 className="font-bold text-lg">Layanan</h4>
                            <ul className="flex flex-col gap-3">
                                {services.map((item, idx) => (
                                    <li key={idx}>
                                        <Link href="#" color="foreground" className="text-body-sm hover:text-brand-primary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <h4 className="font-bold text-lg">Perusahaan</h4>
                            <ul className="flex flex-col gap-3">
                                {companyLinks.map((item, idx) => (
                                    <li key={idx}>
                                        <Link href="#" color="foreground" className="text-body-sm hover:text-brand-primary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-transparent">
                    <p className="text-body-sm text-foreground">
                        Solvera © 2025 All rights reserved
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/kebijakan-privasi" className="text-body-sm text-foreground underline hover:text-brand-primary">
                            Kebijakan Privasi
                        </Link>
                        <Link href="#" className="text-body-sm text-foreground underline hover:text-brand-primary">
                            Syarat dan Ketentuan Layanan
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
