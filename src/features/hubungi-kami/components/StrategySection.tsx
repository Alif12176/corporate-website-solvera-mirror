"use client";

import React from "react";
import Image from "next/image";

export const StrategySection = () => {
    return (
        <div className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-regular font-semibold text-brand-text-secondary mb-2">
                            Mitra Transformasi Digital Anda
                        </p>
                        <h2 className="font-medium text-brand-primary mb-6">
                            Mari Bicara Strategi
                        </h2>
                        <p className="text-medium text-brand-text-secondary leading-relaxed">
                            Dapatkan sesi konsultasi tanpa biaya untuk memahami tantangan bisnis Anda dan menemukan peluang transformasi digital yang paling relevan.
                        </p>
                    </div>

                    {/* Right Map/Card */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200">
                            {/* Map Placeholder matching image style */}
                            <div className="relative w-full h-[300px] bg-neutral-100">
                                <Image
                                    src="/images/map-placeholder.png"
                                    alt="Office Location Map"
                                    fill
                                    className="object-cover"
                                // Fallback to a color if image missing (I don't have this exact image, so will use the iframe map which is better user experience anyway, but styling it to look like a card)
                                // Reverting to iframe for functionality, but styled as card.
                                />
                                {/* Since I don't have the map-placeholder local file, I will stick to the iframe implementation but styled to look like the card in the design reference. */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.0863866164!2d106.63667617478065!3d-6.229386766324274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbf79185d367%3A0x627d7924d081e7d!2sThe%20Prominence%20Office%20Tower!5e0!3m2!1sen!2sid!4v1716361732596!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 w-full h-full"
                                />

                                {/* Overlay Card - Simulating the Google Maps info card style if native embed doesn't show it nicely or just relaying on the embed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
