"use client";

import { TableOfContents } from "./TableOfContents";

const sections = [
    { id: "pendahuluan", title: "1. Pendahuluan" },
    { id: "informasi", title: "2. Informasi yang Kami Kumpulkan" },
    { id: "penggunaan", title: "3. Bagaimana Kami Menggunakan Informasi Anda" },
    { id: "berbagi", title: "4. Berbagi dan Pengungkapan Informasi" },
    { id: "keamanan", title: "5. Keamanan Data" },
    { id: "cookies", title: "6. Penggunaan Cookies" },
    { id: "hak", title: "7. Hak Anda" },
    { id: "perubahan", title: "8. Perubahan pada Kebijakan Ini" },
    { id: "hubungi", title: "9. Hubungi Kami" },
];

export const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:py-16">
            <div className="flex flex-col lg:flex-row gap-12 relative">
                {/* Sidebar / Mobile Header */}
                <TableOfContents sections={sections} />

                {/* Content */}
                <div className="flex-1 max-w-3xl">
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4 text-center lg:text-left">
                            Kebijakan Privasi Solvera.id
                        </h1>
                        <p className="text-foreground-500 text-center lg:text-left">
                            Terakhir Diperbarui: 13 November 2023
                        </p>
                    </div>

                    <div className="flex flex-col gap-12">
                        <section id="pendahuluan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">1. Pendahuluan</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Terima kasih telah mengunjungi Solvera. Kebijakan Privasi ini menjelaskan bagaimana PT Solvera Indonesia ("Solvera", "Kami") mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda saat Anda mengunjungi website kami (solvera.id), menggunakan layanan kami, atau berinteraksi dengan kami termasuk saat Anda mengirimkan data melalui formulir "Konsultasi Gratis" kami.
                            </p>
                            <p className="text-foreground leading-relaxed">
                                Kami berkomitmen untuk melindungi privasi data Anda sesuai dengan hukum yang berlaku.
                            </p>
                        </section>

                        <section id="informasi" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">2. Informasi yang Kami Kumpulkan</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Kami dapat mengumpulkan dua jenis informasi:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                                <li>
                                    <strong>Informasi Identifikasi Pribadi (Data Pribadi):</strong> Informasi yang Anda berikan secara sukarela saat meminta konsultasi atau menghubungi kami, yang dapat mencakup:
                                    <ul className="list-circle pl-6 mt-2 space-y-1">
                                        <li>Nama Lengkap</li>
                                        <li>Alamat Email (Email Bisnis)</li>
                                        <li>Nama Perusahaan</li>
                                        <li>Jabatan</li>
                                        <li>Nomor Telepon</li>
                                        <li>Informasi Kebutuhan Bisnis Anda</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Informasi Non-Pribadi (Data Teknis):</strong> Informasi yang dikumpulkan secara otomatis saat Anda menjelajahi website kami, yang dapat mencakup:
                                    <ul className="list-circle pl-6 mt-2 space-y-1">
                                        <li>Alamat IP (Internet Protocol)</li>
                                        <li>Jenis browser dan perangkat</li>
                                        <li>Halaman yang Anda kunjungi dan waktu kunjungan</li>
                                        <li>Data Cookies</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section id="penggunaan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">3. Bagaimana Kami Menggunakan Informasi Anda</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Kami menggunakan informasi yang kami kumpulkan untuk tujuan berikut:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                                <li><strong>Untuk Menyediakan Layanan:</strong> Untuk menghubungi Anda kembali guna menjadwalkan "Konsultasi Gratis" dan mendiskusikan kebutuhan bisnis yang Anda ajukan.</li>
                                <li><strong>Untuk Komunikasi:</strong> Mengirimkan informasi terkait layanan, update teknis, atau materi pemasaran (seperti newsletter atau studi kasus), di mana Anda dapat berhenti berlangganan kapan saja.</li>
                                <li><strong>Untuk Analisis & Peningkatan:</strong> Untuk memahami bagaimana pengunjung menggunakan website kami, sehingga kami dapat meningkatkan fungsionalitas, UI/UX, dan penawaran konten kami.</li>
                                <li><strong>Untuk Keamanan:</strong> Memantau dan mencegah aktivitas penipuan atau penyalahgunaan website.</li>
                            </ul>
                        </section>

                        <section id="berbagi" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">4. Berbagi dan Pengungkapan Informasi</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Kami sangat menjaga kerahasiaan data B2B.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                                <li>Kami <strong>tidak akan menjual</strong> atau menyewakan data pribadi Anda kepada pihak ketiga.</li>
                                <li>Kami dapat membagikan informasi Anda kepada penyedia layanan pihak ketiga yang terpercaya yang membantu kami mengoperasikan website atau layanan kami (misalnya, penyedia cloud hosting atau platform CRM), yang terikat oleh perjanjian kerahasiaan.</li>
                                <li>Kami dapat mengungkapkan informasi Anda jika diwajibkan oleh hukum atau proses peradilan yang sah.</li>
                            </ul>
                        </section>

                        <section id="keamanan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">5. Keamanan Data</h2>
                            <p className="text-foreground leading-relaxed">
                                Kami menerapkan langkah-langkah keamanan teknis dan administratif yang wajar untuk melindungi data pribadi Anda dari akses tidak sah, kehilangan, atau penyalahgunaan. Ini termasuk penggunaan enkripsi SSL (HTTPS) pada website kami.
                            </p>
                        </section>

                        <section id="cookies" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">6. Penggunaan Cookies</h2>
                            <p className="text-foreground leading-relaxed">
                                Website kami menggunakan cookies (file teks kecil yang disimpan di perangkat Anda) untuk membantu menganalisis traffic web dan meningkatkan pengalaman Anda. Anda dapat menonaktifkan cookies melalui pengaturan browser Anda, namun ini dapat memengaruhi fungsionalitas website.
                            </p>
                        </section>

                        <section id="hak" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">7. Hak Anda</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Sesuai dengan undang-undang perlindungan data yang berlaku, Anda memiliki hak untuk:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
                                <li>Mengakses data pribadi Anda yang kami simpan.</li>
                                <li>Meminta koreksi perbaikan atas data yang tidak akurat.</li>
                                <li>Meminta penghapusan data pribadi Anda.</li>
                            </ul>
                            <p className="text-foreground leading-relaxed mt-4">
                                Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi di bawah.
                            </p>
                        </section>

                        <section id="perubahan" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">8. Perubahan pada Kebijakan Ini</h2>
                            <p className="text-foreground leading-relaxed">
                                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan selalu dipublikasikan di halaman ini dengan tanggal "Terakhir Diperbarui" yang baru.
                            </p>
                        </section>

                        <section id="hubungi" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-brand-primary mb-4">9. Hubungi Kami</h2>
                            <p className="text-foreground leading-relaxed mb-4">
                                Jika Anda memiliki pertanyaan mengenai syarat & ketentuan ini, silakan hubungi kami di:
                            </p>
                            <p className="text-foreground leading-relaxed">
                                <strong>Email:</strong> info@solvera.id<br />
                                <strong>Alamat:</strong> The Prominence Office Tower Level 28 Unit C, Jl. Jalur Sutera Barat No. 15, Alam Sutera, Tangerang, Banten - 15143.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
