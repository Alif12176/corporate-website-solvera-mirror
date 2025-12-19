"use client";

import React from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export const ContactInfo = () => {
    return (
        <div className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Email Column */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-brand-primary text-4xl mb-2">
                            <FaEnvelope />
                        </div>
                        <h4 className="font-medium text-brand-primary">Pertanyaan</h4>
                        <p className="text-neutral-600 max-w-xs mx-auto text-sm leading-relaxed">
                            Ada pertanyaan tentang solusi atau layanan kami? Tim dukungan pelanggan kami siap membantu Anda.
                        </p>
                        <a href="mailto:info@solvera.id" className="text-neutral-900 font-medium underline mt-2 hover:text-brand-primary transition-colors">
                            info@solvera.id
                        </a>
                    </div>

                    {/* Phone Column */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-brand-primary text-4xl mb-2">
                            <FaPhone />
                        </div>
                        <h4 className="font-medium text-brand-primary">Dukungan</h4>
                        <p className="text-neutral-600 max-w-xs mx-auto text-sm leading-relaxed">
                            Butuh bantuan teknis atau panduan penggunaan produk? Hubungi tim dukungan teknis kami sekarang.
                        </p>
                        <a href="tel:+6281390009640" className="text-neutral-900 font-medium underline mt-2 hover:text-brand-primary transition-colors">
                            +62 813-9000-9640
                        </a>
                    </div>

                    {/* Address Column */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-brand-primary text-4xl mb-2">
                            <FaLocationDot />
                        </div>
                        <h4 className="font-medium text-brand-primary">Kunjungi Kami</h4>
                        <p className="text-neutral-600 max-w-xs mx-auto text-sm leading-relaxed">
                            Ingin bertemu langsung dengan tim kami? Kunjungi kantor kami dibawah ini.
                        </p>
                        <p className="text-neutral-900 font-medium mt-2 max-w-[250px] underline decoration-neutral-300">
                            Prominence Office Tower Level 28 Unit C, Jl. Jalur Sutera Barat No. 15., Kota Tangerang, Banten - 15143.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
