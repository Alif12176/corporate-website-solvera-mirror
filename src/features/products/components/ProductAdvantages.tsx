
import React from 'react';
import Image from 'next/image';

const advantages = [
    {
        number: 1,
        title: "Perencanaan & Penjadwalan Produksi Akurat",
        description: "Solvera mendukung sistem perencanaan dan penjadwalan produksi (MRP & Scheduling) yang dinamis serta dapat beradaptasi dengan kebutuhan pabrik.",
        points: [
            "Penjadwalan otomatis sesuai kapasitas mesin & order",
            "Mengurangi risiko overproduction & stock-out",
            "Work order otomatis mengikuti kebutuhan material"
        ],
        result: "Hasil: produksi lebih stabil, cepat, dan sesuai permintaan pasar.",
        image: "/images/advantages-1.png", // Placeholder path
        imageAlt: "Ilustrasi perencanaan produksi"
    },
    {
        number: 2,
        title: "Pengendalian Biaya Produksi Lebih Transparan",
        description: "Setiap komponen biaya—material, tenaga kerja, dan overhead—dicatat dan dianalisis secara detail dalam satu sistem.",
        points: [
            "Tracking penggunaan bahan per batch/lot",
            "Perbandingan biaya aktual vs standar",
            "Analisis efisiensi tiap proses produksi"
        ],
        result: "Manfaat: mengurangi pemborosan dan meningkatkan profit perusahaan.",
        image: "/images/advantages-2.png", // Placeholder path
        imageAlt: "Ilustrasi pengendalian biaya"
    },
    {
        number: 3,
        title: "Forecasting Permintaan Lebih Akurat",
        description: "Solvera menyediakan forecasting berbasis data historis, tren permintaan, dan pola produksi.",
        points: [
            "Prediksi kebutuhan material & kapasitas produksi",
            "Mengurangi risiko dead stock",
            "Menjaga keseimbangan permintaan dan stok"
        ],
        result: "Hasil: produksi lebih terencana dan siap menghadapi perubahan pasar.",
        image: "/images/advantages-3.png", // Placeholder path
        imageAlt: "Ilustrasi forecasting"
    },
    {
        number: 4,
        title: "Optimasi Rantai Pasok",
        description: "Solvera memastikan bahan baku selalu tersedia saat diperlukan melalui otomasi proses supply chain.",
        points: [
            "Pembelian otomatis berdasarkan minimum stock, lead time, dan forecast",
            "Monitoring material secara real-time",
            "Integrasi penuh: Purchasing → Inventory → Produksi"
        ],
        result: "Hasil: produksi berjalan lebih lancar tanpa hambatan.",
        image: "/images/advantages-4.png", // Placeholder path
        imageAlt: "Ilustrasi rantai pasok"
    }
];

interface ProductAdvantagesProps {
    features: {
        number: number;
        title: string;
        description: string;
        points: string[];
        result: string;
        image: string;
        imageAlt: string;
    }[]
}

export const ProductAdvantages = ({ features = advantages }: ProductAdvantagesProps): React.JSX.Element => {

    console.log("DATA PRODUCT ADVANTAGES", features);
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Keunggulan Solvera untuk<br />
                        Sektor Industri dan Manufaktur
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kelola semua elemen penting bisnis Anda dalam satu sistem untuk meningkatkan produktivitas.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2" />

                    <div className="space-y-12 md:space-y-0 relative">
                        {features.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative ${index !== 0 ? 'md:pt-16' : ''}`}>

                                    {/* Center Dot for Desktop */}
                                    <div className="hidden md:flex absolute left-1/2 top-0 md:top-16 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm z-10 items-center justify-center">
                                        {index === 0 && <div className="absolute -top-12 text-blue-600 font-bold text-xl md:hidden"></div>}
                                    </div>

                                    {/* Content Side */}
                                    <div className={`w-full md:w-1/2 px-4 md:px-12 ${isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-2'}`}>
                                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                            <div className="text-blue-600 font-bold text-2xl mb-2">{item.number}</div>
                                            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3">{item.title}</h3>
                                            <p className="text-gray-600 mb-6">{item.description}</p>

                                            <ul className="space-y-3 mb-6">
                                                {item.points.map((point, i) => (
                                                    <li key={i} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                                        <div className="bg-blue-100 p-1 rounded min-w-[20px] h-[20px] flex items-center justify-center mt-1">
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 3L4.5 8.5L2 6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-gray-700 text-sm">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="text-gray-500 text-sm font-medium italic">
                                                {item.result}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Side */}
                                    <div className={`w-full md:w-1/2 px-4 md:px-12 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                        <div className="rounded-2xl p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                                            {/* Placeholder for actual images */}
                                            {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                                <div className="text-center">
                                                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="block text-sm">{item.imageAlt}</span>
                                                </div>
                                            </div> */}
                                            <Image
                                                src={item.image}
                                                alt={item.imageAlt}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
