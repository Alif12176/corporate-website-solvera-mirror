# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.22.2] - 2025-12-30

### Detail Versi 0.22.2

#### 🚀 Peningkatan UI/UX & Navigasi Homepage

- **Deskripsi:**
  - **Solutions Section Revamp:** Mengganti ikon SVG statis pada tab "Industri" dengan **Next.js Image** yang terintegrasi dengan **Vercel Blob Storage** untuk visualisasi yang lebih menarik.
  - **Dynamic Routing:** Mengaktifkan navigasi pada setiap kartu solusi:
    - Tab **Industri** kini mengarah ke halaman detail produk spesifik (contoh: `/products/logistic-dan-transportasi`).
    - Tab **Konsultasi** ("Strategic Digital Advisory") kini terhubung langsung ke **WhatsApp API** via tab baru.
    - Tab **Talenta Digital** kini mengarah ke halaman `/hubungi-kami`.
  - **Business Focus Interactivity:** Mengubah kartu pada bagian "Business Focus" menjadi komponen navigasi aktif:
    - Paket **Fast-to-Value** terhubung ke WhatsApp.
    - Paket **Integrated Transformation** terhubung ke `/minta-demo`.
    - Paket **Enterprise-Ready** terhubung ke `/hubungi-kami`.
  - **Link Handling:** Menambahkan logika deteksi link eksternal (`target="_blank"`) vs internal pada komponen Card.

#### 🛠️ Technical Updates

- **Deskripsi:**
  - **Button Wrapping:** Memperbaiki struktur HTML dengan membungkus komponen `Button` di dalam `Next/Link` untuk aksesibilitas yang benar.
  - **Pointer Events:** Menambahkan class `pointer-events-none` pada Button di dalam Card untuk mencegah konflik event klik ganda (*nested click issues*).

## [0.22.1] - 2025-12-29

### Detail Versi 0.22.1

#### ✨ Fitur & Peningkatan UX pada Form di `dev` untuk versi 0.22.1

- **Deskripsi:**
  - **Form Validation & Security:** Implementasi **Google ReCAPTCHA v2** dan logika validasi *real-time* pada halaman `ContactForm` dan `MintaDemoForm`. Tombol submit kini otomatis *disabled* hingga seluruh field wajib dan Captcha terisi valid.
  - **WhatsApp Integration:** Mengaktifkan tombol "Tanyakan Langsung" dengan *direct link* ke WhatsApp API (`wa.me`) untuk mempermudah user memulai percakapan instan.
  - **Custom Feedback UI:** Menggantikan penggunaan `window.alert` dengan **HeroUI Modal** untuk notifikasi status pengiriman (Sukses/Gagal) yang lebih konsisten dengan desain sistem.
  - **Improved Input Handling:** Menambahkan validasi format URL pada field Website dan Regex email yang lebih ketat.

#### 🐛 Bug Fix & Styling di `dev` untuk versi 0.22.1

- **Deskripsi:**
  - **Checkbox Alignment:** Memperbaiki isu layout pada *Checkbox Syarat & Ketentuan* yang tidak rata tengah (*center-aligned*) dengan teks dan link, serta memastikan link dapat diklik tanpa memicu checkbox.
  - **Code Quality:** Memperbaiki error linting `no-explicit-any` pada *catch block* fetch request dan menghapus penggunaan reserved keyword (`new`) yang menyebabkan build error.
  - **Loading State:** Menambahkan indikator loading pada tombol submit untuk mencegah *double-submit*.

## [0.22.0] - 2025-12-25

### Detail Versi 0.22.0

#### 🚀 Peningkatan Performa & Arsitektur di `dev` untuk versi 0.22.0

- **Deskripsi:**
  - **Server-Side Fetching (RSC):** Memindahkan logika pengambilan data *Promo Banner* dari Client-Side (`useEffect`) ke Server-Side (`layout.tsx`). Hal ini menghilangkan *Layout Shift* (tampilan bergeser/lag) saat halaman pertama kali dimuat.
  - **Next.js Proxy (Rewrites):** Mengonfigurasi `next.config.ts` untuk mem-proxy request API melalui server Next.js. Ini secara efektif menyelesaikan masalah **CORS (Cross-Origin Resource Sharing)** yang memblokir request browser ke backend.

#### ✨ Fitur & Integrasi Baru di `dev` untuk versi 0.22.0

- **Deskripsi:**
  - **Dynamic Minta Demo Hero:** Halaman "Minta Demo" kini terintegrasi dengan API Promo Marketing. Konten (Judul, Subjudul, Fitur) akan berubah dinamis berdasarkan status promo aktif di backend, dengan *fallback* ke konten default jika promo non-aktif.
  - **Type Safety:** Penambahan definisi tipe TypeScript (`PromoData`, `PromoBadge`) yang ketat untuk memastikan integritas data antar komponen.

#### 🐛 Bug Fix & Refactor di `dev` untuk versi 0.22.0

- **Deskripsi:**
  - **Refactor Komponen:** Membersihkan `PromoBanner` dan `MintaDemoHero` dari logika fetching internal. Komponen kini bersifat *pure* (hanya menerima data via props).
  - **Fix TypeScript Error:** Memperbaiki error `implicit any` pada fungsi map dan error modul import pada komponen Hero.
  - **Fix Build Error (ConsultationContent):** Memperbaiki konflik tipe data pada properti `icon` yang menyebabkan gagal build di Vercel. Interface kini diperbarui untuk mendukung `string` (URL dari API) dan `React.ElementType` (Ikon dari dummy data) secara bersamaan.
  - 

## [0.21.0] - 2025-12-24

### Detail Versi 0.21.0

#### ✨ Fitur & Integrasi Baru di `dev` untuk versi 0.21.0

- **Deskripsi:**
  - **Integrasi Service API:** Menghubungkan halaman Service dengan Backend API (menggantikan dummy data).

## [0.20.1] - 2025-12-24

### Detail Versi 0.20.1

#### 🐛 Bug Fix di `dev` untuk versi 0.20.1

- **Deskripsi:**
  - **Null Safety:** Perbaikan *runtime error* (blank page) pada komponen `SolusiAdvantages` dengan menambahkan penanganan kondisi ketika data icon dari API bernilai `null`.
  - **Routing & Navigation:** Perbaikan link pada komponen `SolusiRelatedIndustries` agar mengarah ke halaman detail internal website (`/solusi/[slug]`) dan bukan ke URL API mentah.
  - **Type Definitions:** Update interface `Industry` dengan menambahkan properti `slug` untuk mendukung *dynamic routing*.

## [0.20.0] - 2025-12-23

### Detail Versi 0.20.0

#### ✨ Fitur & Integrasi Baru di `dev` untuk versi 0.20.0

- **Deskripsi:**
  - **Integrasi Blog API:** Menghubungkan halaman Blog dengan Backend API (menggantikan dummy data).
  - **React Query Hooks:** Pembuatan custom hooks (`useArticles`, `useCategories`) untuk manajemen state data, filter kategori, dan pagination yang responsif.
  - **Server-Side SEO:** Implementasi *Dynamic Metadata* pada halaman Detail Blog agar judul dan deskripsi sesuai konten artikel untuk SEO Google.

#### 🚀 Peningkatan Performa & UX di `dev` untuk versi 0.20.0

- **Deskripsi:**
  - **CSS-Based Animation:** Migrasi animasi *infinite scroll* pada `ClientLogos` dari Framer Motion (Main Thread) ke CSS Keyframes (Compositor Thread/GPU) untuk pengalaman scroll yang mulus.
  - **Visual Feedback:** Penambahan `nextjs-toploader` (progress bar) untuk navigasi halaman dan *loading overlay* saat filtering data.
  - **Reading Experience:** Peningkatan *styling* global untuk konten artikel (Typography, Spacing, Blockquote) agar lebih nyaman dibaca dan mendukung format dari Rich Text Editor backend.

#### 🐛 Bug Fix di `dev` untuk versi 0.20.0

- **Deskripsi:**
  - **Image Handling:** Perbaikan *runtime error* pada Next.js Image akibat URL gambar dari backend yang mengandung spasi (implementasi `.trim()`).
  - **Metadata:** Memperbarui default metadata (`title`, `description`, `openGraph`) di `layout.tsx` dan `page.tsx` agar sesuai branding Solvera (menghapus "Create Next App").
  - **Code Quality:** Perbaikan warning ESLint pada *dependency array* `useEffect` dan variabel yang tidak digunakan.

## [0.19.0] - 2025-12-23

### Detail Versi 0.19.0

#### 🚀 Peningkatan Performa & Optimasi di `dev` untuk versi 0.19.0

- **Deskripsi:**
  - **Core Web Vitals:** Implementasi **Incremental Static Regeneration (ISR)** pada halaman Produk dan Solusi untuk waktu muat yang instan.
  - **Code Splitting:** Penerapan **Lazy Loading** (`next/dynamic`) pada komponen berat di Halaman Utama.
  - **Bundle Optimization:** Migrasi animasi ke **LazyMotion** (`m` component) dari Framer Motion.
  - **Memory Optimization:** Refaktor data statis keluar dari komponen React.
  - **Image Optimization:** Optimasi loading gambar dengan properti `sizes` dan `priority`.
  - **UX:** Penambahan `PageLoader` dan perbaikan *Hydration Mismatch*.


## [0.18.1] - 2025-12-22

### Detail Versi 0.18.1

#### 🐛 Bug Fix di `dev` untuk versi 0.18.1

- **Deskripsi:**
  - ImplementasiUI Refinement: Sinkronisasi Global Style dan Perbaikan Komponen


## [0.18.0] - 2025-12-19

### Detail Versi 0.18.0

#### ✨ Fitur baru di `dev` untuk versi 0.18.0

- **Deskripsi:**
  - Implementasi fitur / halaman Solusi (Solutions).
  

## [0.17.0] - 2025-12-18

### Detail Versi 0.17.0

#### ✨ Fitur baru di `dev` untuk versi 0.17.0

- **Deskripsi:**
  - Implementasi Navbar baru.
  - Penambahan component baru di halaman Home Page.
  - Penambahan component baru di halaman transformasi digital.
  - Penambahan component baru di halaman managed services.
  - Penambahan component baru di halaman konsultasi-page.


## [0.16.0] - 2025-12-18

### Detail Versi 0.16.0

#### ✨ Fitur baru di `dev` untuk versi 0.16.0

- **Deskripsi:**
  - Fetching data detail product.


## [0.15.1] - 2025-12-17

### Detail Versi 0.15.1
🔒 Security Fix

- Update **Next.js** ke versi **15.5.9** (Patch) untuk mengatasi kerentanan keamanan kritis (CVE-2025-66478).

## [0.15.0] - 2025-12-16

### Detail Versi 0.15.0

#### ✨ Fitur baru di `dev` untuk versi 0.15.0

- **Deskripsi:**
  - Penambahan fitur untuk menampilkan halaman hubungi kami.
  

## [0.14.2] - 2025-12-15

### Detail Versi 0.14.2

#### 🐛 Bug Fix di `dev` untuk versi 0.14.2

- **Deskripsi:**
  - Implementasi Suspense dan Spinner untuk komponen Blog.
  - Menghapus import Link yang tidak digunakan.


## [0.14.1] - 2025-12-15

### Detail Versi 0.14.1

- Refaktor komponen product tab menggunakan component shared.


## [0.14.0] - 2025-12-15

### Detail Versi 0.14.0

- Menambahkan fitur minta demo.


## [0.12.1] - 2025-12-09

### Detail Versi 0.13.1

- Melakukan refaktor dengan memindahkan komponen terkait layanan managed service ke dalam folder feature/managed-service/component.

- Menstandarkan struktur komponen agar sesuai pola arsitektur feature-based.

- Memperbarui path dan import komponen untuk menyesuaikan perubahan struktur.

## [0.12.0] - 2025-12-09

### Detail Versi 0.13.0

- Menambahkan halaman layanan managed services.

- Penyesuaian routing dan struktur navigasi untuk mendukung halaman baru tersebut.

- Menambahkan komponen pendukung awal yang diperlukan pada halaman baru.

## [0.12.1] - 2025-12-09

### Detail Versi 0.12.1

- Melakukan refaktor dengan memindahkan komponen terkait bidang industri ke dalam folder feature/bidang-industri/component.

- Menstandarkan struktur komponen agar sesuai pola arsitektur feature-based.

- Memperbarui path dan import komponen untuk menyesuaikan perubahan struktur.

## [0.12.0] - 2025-12-09

### Detail Versi 0.12.0

- Menambahkan halaman baru pada aplikasi sesuai kebutuhan fitur terbaru.

- Penyesuaian routing dan struktur navigasi untuk mendukung halaman baru tersebut.

- Menambahkan komponen pendukung awal yang diperlukan pada halaman baru.

## [0.11.1] - 2025-12-08

### Detail Versi 0.11.1

- Melakukan refaktor dengan mengganti komponen lama menggunakan komponen shared yang sudah tersedia dalam codebase.

- Memindahkan dan merapikan struktur UI component ke dalam folder feature/layout untuk konsistensi arsitektur dan kemudahan pengelolaan.

## [0.11.0] - 2025-12-07

### Detail Versi 0.11.0

- Migrasi source code untuk landing page dari repository pribadi ke repository perusahaan.

## [0.10.2] - 2025-12-09

### 🧹 Maintenance

- Melakukan standarisasi tipografi menggunakan CSS variables dan menghapus utility class font-weight.

- Menghapus komponen BaseButton dan memigrasikan seluruh fungsionalitas serta penggunaannya ke komponen Button.

- Menghapus komponen CTA dan menyeragamkan penggunaan ConsultationCTA di seluruh halaman.

- Menghapus komponen Input yang sudah tidak digunakan.

- Memperbarui import path untuk seluruh page component agar menggunakan struktur components di dalam folder fitur.

## [0.10.1] - 2025-12-05

### 🧹 Maintenance

- Memindahkan source code dari repository pribadi ke repository perusahaan.
- Menyesuaikan struktur awal project agar sesuai standar internal tim.
- Melakukan penyesuaian konfigurasi awal tanpa perubahan fitur maupun bug fix.

## [0.10.0] - 2025-12-04

### Detail Versi 0.10.0

#### ✨ Fitur baru di `main` untuk versi 0.10.0

- **Deskripsi:**
  - Penambahan fitur untuk menampilkan halaman manajemen bisnis dan optimasi proses.

## [0.9.0] - 2025-12-04

### Detail Versi 0.9.0

#### ✨ Fitur baru di `main` untuk versi 0.9.0

- **Deskripsi:**
  - Penambahan fitur untuk menampilkan halaman blog detail.

## [0.8.0] - 2025-12-03

### Detail Versi 0.8.0

#### ✨ Fitur baru di `main` untuk versi 0.8.0

- **Deskripsi:**
  - Penambahan fitur untuk menampilkan halaman blog.

## [0.7.0] - 2025-11-30

### Detail Versi 0.7.0

#### ✨ Fitur baru di `main` untuk versi 0.7.0

- **Deskripsi:**
  - Penambahan fitur untuk membuat email clickable di halaman syarat dan ketentuan.

## [0.6.2] - 2025-11-30

### Detail Versi 0.6.2

#### 🐛 Bug Fix di `main` untuk versi 0.6.2

- **Deskripsi:**
  - Bug fix untuk mengatasi masalah z-index mobile table of contents.

## [0.6.1] - 2025-11-30

### Detail Versi 0.6.1

#### 🐛 Bug Fix di `main` untuk versi 0.6.1

- **Deskripsi:**
  - Bug fix untuk mengatasi masalah memecah list sub menu produk di mega menu.

## [0.6.0] - 2025-11-28

### Detail Versi 0.6.0

#### ✨ Fitur baru di `main` untuk versi 0.6.0

- **Deskripsi:**
  - Penambahan fitur untuk menampilkan halaman konsultasi-page.

## [0.5.0] - 2025-11-28

### Detail Versi 0.5.0

#### ✨ Fitur baru di `main` untuk versi 0.5.0

- **Deskripsi:**
  - Penambahan fitur untuk menampilkan halaman syarat dan ketentuan.

## [0.4.0] - 2025-11-28

### Detail Versi 0.4.0

#### ✨ Fitur baru di `main` untuk versi 0.4.0

- **Deskripsi:**
  - Penambahan fitur untuk menampilkan footer global di setiap halaman.
  - Membuat halaman kebijakan privasi.

## [0.3.0] - 2025-11-28

### Detail Versi 0.3.0

#### ✨ Fitur baru di `main` untuk versi 0.3.0

- **Deskripsi:**
  - Penambahan fitur untuk menampilkan logo Solvera di header dan footer.
  - Penambahan fitur untuk menampilkan menu produk dan layanan di header.
  - Penambahan fitur untuk menampilkan menu produk dan layanan di mobile menu.

## [0.2.0] - 2025-11-27

### Detail Versi 0.2.0

#### ✨ Fitur baru di `main` untuk versi 0.2.0

- **Deskripsi:**
  - Inisialisasi project **Next.js Landing Page** menggunakan **HeroUI** untuk komponen UI.
  - Setup struktur awal project termasuk konfigurasi folder `/app`, pemasangan dependensi HeroUI, serta styling dasar.
  - Penambahan komponen awal untuk landing page (layout, header, dan komponen dasar lainnya).
  - File terpengaruh: struktur dasar project (`app/*`), file konfigurasi styling, serta file inisialisasi HeroUI.
  - Catatan: commit inisialisasi ini menjadi pondasi awal untuk pengembangan fitur berikutnya.
