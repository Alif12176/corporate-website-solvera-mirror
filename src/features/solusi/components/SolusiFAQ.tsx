'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FAQ } from '../data/solutions';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Button } from '@/features/layout/components/Button';

interface Props {
    faqs: FAQ[];
}

export const SolusiFAQ = ({ faqs }: Props) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-12 flex flex-col items-center">
                    <div className="mb-6">
                        <Image
                            src="/vector/faqs.svg"
                            alt="FAQ Illustration"
                            width={300}
                            height={250}
                            className="h-auto"
                        />
                    </div>
                    <p className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                        FAQ
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
                        Pertanyaan Umum
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Pertanyaan yang Sering Diajukan
                    </p>
                    <Button
                        as="a"
                        href="https://wa.me/6281390009640"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        radius="normal"
                        className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800"
                    >
                        <MessageCircle size={20} />
                        Tanyakan Langsung
                    </Button>
                </div>

                {/* Accordion List */}
                <div className="space-y-2">
                    {faqs.sort((a, b) => a.sequence - b.sequence).map((faq, index) => (
                        <div key={faq.id} className="border-b border-gray-100 py-4">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center text-left focus:outline-none group"
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-blue-700' : 'text-blue-700'}`}>
                                    {index + 1}. {faq.question}
                                </span>
                                <span className="shrink-0 ml-4 text-blue-700">
                                    {openIndex === index ? (
                                        <ChevronUp size={24} />
                                    ) : (
                                        <ChevronDown size={24} />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-700 leading-relaxed pb-2">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
