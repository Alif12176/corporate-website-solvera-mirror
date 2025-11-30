# Solvera Corporate Website

Website resmi perusahaan Solvera yang menampilkan informasi produk, layanan, dan solusi bisnis kami.

## 📁 Project Structure

Repository ini adalah monorepo yang terdiri dari beberapa bagian:

```
solvera-website/
├── ci-cd/                 # CI/CD configuration dan templates
├── corporate-cms/         # CMS untuk mengelola konten website
├── corporate-web/         # Frontend website corporate
├── shared-libs/           # Library yang dibagikan antar project
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm atau yarn
- Git

### Installation

```bash
# Clone repository
git clone https://gitlab.com/solvera-official/coorporate-website/corporate-website-solvera.git
cd solvera-website

# Install dependencies untuk semua project
npm install
```

## 📦 Sub-Projects

### corporate-web
Frontend website corporate Solvera.

```bash
cd corporate-web
npm run dev
```

### corporate-cms
CMS untuk mengelola konten website.

```bash
cd corporate-cms
npm run dev
```

### shared-libs
Library dan utilities yang digunakan oleh project lain.

### ci-cd
Konfigurasi CI/CD pipeline untuk deployment otomatis.

## 🛠️ Available Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run start` - Jalankan production server

## 📧 Contact

- Email: info@solvera.com
- Website: https://www.solvera.com

## 📄 License

Proprietary and Confidential - Solvera