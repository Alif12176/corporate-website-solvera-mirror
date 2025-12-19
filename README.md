# Solvera Landing Page Revamp

Project revamp website landing page untuk PT Solvera Indonesia, perusahaan inovatif di bidang teknologi informasi.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [HeroUI](https://heroui.com/) (formerly NextUI)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)

## ✨ Fitur Utama

### 1. Responsive Navigation
- **Mega Menu:** Dropdown menu responsif untuk kategori "Produk" dengan layout grid.
- **Mobile Menu:** Menu navigasi mobile yang intuitif dengan accordion untuk sub-menu dan akses cepat ke tombol aksi.
- **Sticky Navbar:** Navigasi tetap terlihat saat scrolling.

### 2. Halaman Layanan & Konsultasi
- **Hero Section:** Visualisasi menarik dengan overlay gambar dan tipografi yang kuat.
- **Grid Layanan:** Tampilan kartu layanan yang responsif.
- **Timeline Proses:** Visualisasi alur kerja "Proses Kami" (Strategy, Planning, Development, Quick Launch).
- **Kompetensi:** Grafik progress bar untuk menampilkan keahlian tim.
- **CTA Section:** Formulir berlangganan newsletter yang terintegrasi.

### 3. Halaman Informasi
- **Kebijakan Privasi:** Halaman legal dengan navigasi "Table of Contents" yang sticky (sidebar di desktop, accordion di mobile).
- **Footer Responsif:** Informasi perusahaan, tautan sosial media, dan navigasi cepat.

## 🛠️ Instalasi & Menjalankan Project

1. **Clone repository:**
   ```bash
   git clone [repository-url]
   cd landing-page-solvera-revamp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka di browser:**
   Kunjungi [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

Project ini menggunakan sistem desain berbasis token CSS untuk konsistensi:
- **Colors:** `brand-primary`, `brand-secondary`, `brand-text-secondary`, dll.
- **Typography:** Font **Poppins** dengan skala tipografi kustom (`text-h1`, `text-body`, dll).
- **Spacing:** Token spacing responsif (`page-global`, `section-large`, dll).

## 🏢 Tentang Solvera

**Solvera Indonesia** adalah perusahaan inovatif di bidang teknologi informasi yang berfokus pada transformasi tantangan operasional menjadi keunggulan kompetitif.

**Layanan Kami:**
- Konsultasi Bisnis
- Managed Services
- Transformasi Digital
- Layanan Bidang Industri
- Pelatihan & Sertifikasi

**Kontak:**
- 📍 The Prominence Office Tower Level 28 Unit C, Alam Sutera, Tangerang
- 📧 info@solvera.id
- 📞 +62 813-9000-9640

## 📂 Struktur Project & Migrasi

Project ini menggunakan arsitektur **Feature-Based** untuk menjaga kode tetap terorganisir, scalable, dan mudah di-maintain.

### Filosofi
Setiap fitur dalam aplikasi (misalnya: blog, layanan, manajemen) dianggap sebagai modul mandiri yang memiliki komponen, hooks, dan logic-nya sendiri. `src/app` hanya bertugas sebagai **Router** dan entry point, sedangkan implementasi detail ada di `src/features`.

### Struktur Direktori
```
src/
├── app/                 # Routing & Page Entry Points
│   ├── blog/            # Route: /blog
│   ├── layanan/         # Route: /layanan
│   └── page.tsx         # Home Page Entry
├── features/            # Implementasi Fitur
│   ├── blog/            # Fitur Blog
│   │   ├── components/  # Komponen khusus blog (Card, List, dll)
│   │   └── data/        # Data statis/mock khusus blog
│   ├── home/            # Komponen khusus Home Page
│   └── layout/          # Komponen Global (Navbar, Footer)
└── ...
```

### Panduan Migrasi (Step-by-Step)

Jika Anda ingin memigrasikan pekerjaan dari repository lain atau folder lama ke struktur ini, ikuti langkah berikut:

#### 1. Identifikasi Fitur
Tentukan nama fitur yang sedang Anda kerjakan. Contoh: `auth`, `dashboard`, `payment`.

#### 2. Buat Folder Fitur
Buat folder baru di dalam `src/features/<nama-fitur>`.
```bash
mkdir -p src/features/dashboard
```

#### 3. Struktur Folder Fitur
Di dalam folder fitur tersebut, organisir file Anda seperti ini:
- `components/`: Komponen UI yang hanya dipakai di fitur ini.
- `hooks/`: Custom hooks spesifik fitur.
- `types/`: TypeScript interfaces/types.
- `utils/`: Helper functions.
- `api/`: API calls (jika ada).

#### 4. Pindahkan Komponen
Pindahkan komponen dari folder lama ke `src/features/<nama-fitur>/components`.
**PENTING:** Jangan taruh komponen UI kompleks di `src/app`. `src/app` sebaiknya hanya berisi `page.tsx`, `layout.tsx`, dan `loading.tsx`.

#### 5. Update Import
Perbaiki path import di file-file Anda. Gunakan alias `@/features/...` jika sudah dikonfigurasi, atau relative path yang sesuai.

#### 6. Setup Routing
Buat folder route di `src/app/<nama-route>` dan buat file `page.tsx`. Import komponen utama fitur Anda ke sini.

**Contoh `src/app/dashboard/page.tsx`:**
```tsx
import { DashboardView } from '@/features/dashboard/components/DashboardView';

export default function DashboardPage() {
  return <DashboardView />;
}
```

### Aturan Main (Rules) ⚠️

1. **Keep `src/app` Clean:** Folder `app` jangan diisi logic berat atau komponen UI yang panjang. Delegasikan ke `features`.
2. **Colocation:** Taruh file yang berhubungan berdekatan. Jika sebuah komponen butuh gambar atau data json spesifik, taruh di folder fitur yang sama.
3. **Shared Components:** Jika ada komponen yang dipakai di BANYAK fitur (misal: Button, Input, Card generic), taruh di `src/features/ui` atau `src/components` (sesuai kesepakatan tim, saat ini bisa gunakan `src/features/layout` untuk komponen layout global atau buat `src/features/common`).
4.

