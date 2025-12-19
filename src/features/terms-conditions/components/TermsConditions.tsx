"use client";

import { TableOfContents } from "./TableOfContents";

const sections = [
    { id: "penerimaan", title: "1. Penerimaan Ketentuan" },
    { id: "penggunaan", title: "2. Penggunaan Situs" },
    { id: "haki", title: "3. Hak Kekayaan Intelektual" },
    { id: "layanan", title: "4. Layanan Kami" },
    { id: "batasan", title: "5. Batasan Tanggung Jawab" },
    { id: "tautan", title: "6. Tautan ke Situs Pihak Ketiga" },
    { id: "penghentian", title: "7. Penghentian Akses" },
    { id: "hukum", title: "8. Hukum yang Berlaku" },
    { id: "perubahan", title: "9. Perubahan pada Ketentuan Ini" },
    { id: "hubungi", title: "10. Hubungi Kami" },
];

export const TermsConditions = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:py-16">
            <div className="flex flex-col lg:flex-row gap-12 relative">
                {/* Sidebar / Mobile Header */}
                <TableOfContents sections={sections} />

                {/* Content */}
                <div className="flex-1 max-w-3xl">
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4 text-center lg:text-left">
                            Syarat dan Ketentuan Penggunaan
                        </h1>
                        <p className="text-foreground-500 text-center lg:text-left">
                            Terakhir Diperbarui: 13 November 2023
                        </p>
                    </div>

                    <div className="flex flex-col gap-12">
                        <section id="penerimaan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">1. Penerimaan Ketentuan</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Selamat datang di <span className="text-brand-primary font-normal">solvera.id</span> ("Situs"), yang dimiliki dan dioperasikan oleh PT Solvera Indonesia ("Solvera", "Kami").
                            </p>
                            <p className="text-foreground leading-relaxed">
                                Dengan mengakses atau menggunakan Situs ini, Anda ("Pengguna", "Anda") setuju untuk mematuhi dan terikat oleh Syarat & Ketentuan Penggunaan ("Ketentuan") ini serta Kebijakan Privasi kami. Jika Anda tidak menyetujui Ketentuan ini, mohon untuk tidak menggunakan Situs ini.
                            </p>
                        </section>

                        <section id="penggunaan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">2. Penggunaan Situs</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Anda setuju untuk menggunakan Situs ini hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda dilarang:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                                <li>Menggunakan Situs untuk aktivitas penipuan atau melanggar hukum.</li>
                                <li>Mencoba merusak, meretas, atau mengganggu keamanan dan integritas server atau jaringan kami.</li>
                                <li>Mereproduksi atau menyalin konten Situs untuk tujuan komersial tanpa izin tertulis dari kami.</li>
                            </ul>
                        </section>

                        <section id="haki" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">3. Hak Kekayaan Intelektual (HAKI)</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Seluruh konten yang terdapat di Situs ini, termasuk namun tidak terbatas pada teks, grafik, logo, ikon, gambar, video, company profile (PDF), dan arsitektur software, adalah milik eksklusif Solvera atau pemberi lisensi kami dan dilindungi oleh undang-undang hak cipta dan merek dagang Indonesia.
                            </p>
                        </section>

                        <section id="layanan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">4. Layanan Kami</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Informasi mengenai layanan (termasuk Solvera ERP, Managed Services, Konsultasi, dll.) yang ditampilkan di Situs ini bersifat informasional. Penyediaan layanan spesifik kepada perusahaan Anda akan diatur dalam perjanjian atau kontrak layanan terpisah.
                            </p>
                        </section>

                        <section id="batasan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">5. Batasan Tanggung Jawab (Disclaimer)</h2>
                            <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                                <li>Situs ini disediakan "apa adanya" (as is). Kami tidak memberikan jaminan, baik tersurat maupun tersirat, bahwa konten di Situs ini selalu akurat, lengkap, atau bebas dari kesalahan (error).</li>
                                <li>Solvera tidak bertanggung jawab atas kerugian atau kerusakan apa pun (baik langsung maupun tidak langsung, termasuk kehilangan keuntungan) yang timbul dari penggunaan atau ketidakmampuan Anda menggunakan informasi di Situs ini.</li>
                                <li>Setiap keputusan bisnis yang Anda ambil berdasarkan informasi di Situs ini adalah tanggung jawab Anda sepenuhnya.</li>
                            </ul>
                        </section>

                        <section id="tautan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">6. Tautan ke Situs Pihak Ketiga</h2>
                            <p className="text-foreground leading-relaxed">
                                Situs ini mungkin berisi tautan ke website lain yang tidak dioperasikan oleh kami. Kami tidak memiliki kendali atas dan tidak bertanggung jawab atas konten atau praktik privasi dari situs pihak ketiga tersebut.
                            </p>
                        </section>

                        <section id="penghentian" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">7. Penghentian Akses</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Kami berhak, atas kebijakan kami sendiri, untuk menangguhkan atau menghentikan akses Anda ke Situs ini tanpa pemberitahuan sebelumnya jika Anda melanggar Ketentuan ini.
                            </p>
                        </section>

                        <section id="hukum" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">8. Hukum yang Berlaku</h2>
                            <p className="text-foreground leading-relaxed">
                                Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia.
                            </p>
                        </section>

                        <section id="perubahan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">9. Perubahan pada Ketentuan Ini</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Kami dapat merevisi Ketentuan ini kapan saja dengan memperbarui halaman ini. Anda disarankan untuk mengunjungi halaman ini secara berkala untuk meninjau Ketentuan yang berlaku.
                            </p>
                        </section>
                        <section id="hubungi" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">10. Hubungi Kami</h2>
                            <p className="text-foreground leading-relaxed">
                                Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, silakan hubungi kami di: <strong>Email: <span className="text-brand-primary cursor-pointer" onClick={() => window.open('mailto:info@solvera.id', '_blank')} rel="noopener noreferrer">info@solvera.id</span> Alamat:</strong> The Prominence Office Tower Level 28 Unit C, Jl. Jalur Sutera Barat No. 15... Kota Tangerang, Banten - 15143.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
