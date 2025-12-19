export interface BlogPost {
    id: number | string;
    slug: string;
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
    content?: string; // For the detail page content
}

export const FEATURED_POST: BlogPost = {
    id: 'featured',
    slug: "masa-depan-perbankan-transformasi-digital",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    category: "Opsi",
    date: "1 Januari 2023",
    title: "Masa Depan Perbankan: Transformasi Digital",
    description: "Bagaimana bank beradaptasi untuk memenuhi tuntutan dunia yang mengutamakan digital.",
    content: `
        <h3>Masa Depan Perbankan: Transformasi Digital</h3>
        <p>Dunia digital yang berkembang pesat di sektor perbankan mengalami transformasi yang signifikan. Inovasi teknologi mengubah cara bank beroperasi, berinteraksi dengan nasabah, dan mengelola risiko. Artikel ini akan membahas bagaimana teknologi membentuk masa depan sektor perbankan.</p>
        <p>Ada tantangan besar dan peluang dalam mengadopsi AI dan big data, blockchain, dan algoritma canggih untuk meningkatkan efisiensi dan mengurangi biaya. Bank harus beradaptasi dengan cepat untuk tetap relevan di era digital ini, memastikan keamanan data nasabah dan memberikan layanan terbaik secara online maupun di cabang fisik.</p>
        
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Digital Banking Dashboard" class="w-full rounded-2xl my-8" />
        <p class="text-sm text-brand-text-secondary mt-2 mb-8">Digital dashboard displaying real-time financial data and analytics.</p>

        <p>Salah satu tren utama adalah perbankan terbuka (open banking), yang memungkinkan pihak ketiga untuk membangun aplikasi dan layanan di sekitar lembaga keuangan. Ini membuka pintu bagi inovasi yang lebih besar dan memberikan konsumen lebih banyak pilihan dalam mengelola keuangan mereka.</p>
        <p>Selain itu, bank digital (neobanks) semakin populer, menawarkan layanan perbankan tanpa biaya administrasi bulanan dan dengan pengalaman pengguna yang lebih baik melalui aplikasi seluler. Bank tradisional merespons dengan meluncurkan layanan digital mereka sendiri atau bermitra dengan fintech.</p>

        <blockquote class="border-l-4 border-brand-primary pl-4 italic text-lg text-brand-text-primary my-8">
            "Transformasi digital bukan hanya tentang teknologi, tetapi juga tentang mengubah budaya organisasi dan cara berpikir. Bank perlu berinvestasi dalam pengembangan sumber daya manusia yang melek teknologi digital dan kemampuan beradaptasi dengan perubahan."
        </blockquote>

        <p>Keamanan siber menjadi prioritas utama seiring dengan meningkatnya ancaman digital. Bank berinvestasi besar-besaran dalam sistem keamanan canggih, termasuk biometrik dan enkripsi, untuk melindungi aset dan data nasabah. Kepercayaan adalah mata uang utama di dunia perbankan, dan menjaganya adalah prioritas nomor satu.</p>
        
        <h3>Kesimpulan</h3>
        <p>Masa depan perbankan adalah digital. Bank yang mampu beradaptasi dengan cepat dan merangkul inovasi akan memimpin pasar. Sementara itu, mereka yang lambat beradaptasi berisiko tertinggal. Transformasi ini membawa manfaat besar bagi konsumen, mulai dari kemudahan akses hingga biaya yang lebih rendah.</p>
        <p>Dengan terus memantau tren dan teknologi baru, kita dapat melihat bagaimana sektor ini akan terus berkembang di tahun-tahun mendatang. Baik bagi investor maupun konsumen, memahami perubahan ini adalah kunci untuk mengambil keputusan keuangan yang cerdas di masa depan.</p>
    `
};

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        slug: "investasi-di-real-estat-panduan-untuk-pemula",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
        category: "Komoditas",
        date: "2 Januari 2023",
        title: "Investasi di Real Estat: Panduan untuk Pemula",
        description: "Tips dan strategi penting bagi investor real estat pemula.",
        content: `
            <h3>Investasi di Real Estat: Panduan untuk Pemula</h3>
            <p>Investasi properti adalah salah satu cara paling populer untuk membangun kekayaan. Namun, bagi pemula, dunia real estat bisa terlihat menakutkan.</p>
            <br/>
            <h3>Langkah Pertama</h3>
            <p>Mulailah dengan riset pasar. Pahami lokasi, harga pasar, dan potensi pertumbuhan area yang Anda incar.</p>
        `
    },
    {
        id: 2,
        slug: "dampak-ai-pada-analisis-keuangan",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        category: "Kryptocurrency",
        date: "3 Januari 2023",
        title: "Dampak AI pada Analisis Keuangan",
        description: "Jelajahi bagaimana kecerdasan buatan menevaluasi analisis keuangan dan pengambilan keputusan.",
        content: `
            <h3>Dampak AI pada Analisis Keuangan</h3>
            <p>Kecerdasan Buatan (AI) telah merevolusi banyak industri, termasuk keuangan. Algoritma canggih kini dapat menganalisis data pasar dengan kecepatan dan akurasi yang jauh melebihi manusia.</p>
        `
    },
    {
        id: 3,
        slug: "perencanaan-pensiun-mengamankan-masa-depan-anda",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        category: "REITs",
        date: "4 Januari 2023",
        title: "Perencanaan Pensiun: Mengamankan Masa Depan Anda",
        description: "Strategi untuk membangun dana pensiun yang nyaman dan aman.",
        content: `
            <h3>Perencanaan Pensiun: Mengamankan Masa Depan Anda</h3>
            <p>Pensiun yang nyaman adalah impian semua orang. Namun, tanpa perencanaan yang matang, impian itu bisa sulit dicapai.</p>
        `
    },
    {
        id: 4,
        slug: "investasi-etis-menyelaraskan-nilai-dengan-keuntungan",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
        category: "Anuitas",
        date: "5 Januari 2023",
        title: "Investasi Etis: Menyelaraskan Nilai dengan Keuntungan",
        description: "Temukan cara untuk berinvestasi di perusahaan yang mencerminkan nilai etis dan sosial Anda.",
        content: `
            <h3>Investasi Etis: Menyelaraskan Nilai dengan Keuntungan</h3>
            <p>Investasi tidak harus hanya soal keuntungan finansial. Semakin banyak investor yang mencari cara untuk menyelaraskan portofolio mereka dengan nilai-nilai pribadi mereka.</p>
        `
    },
    {
        id: 5,
        slug: "kenaikan-fintech-di-pasar-berkembang",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
        category: "Saham",
        date: "6 Januari 2023",
        title: "Kenaikan Fintech di Pasar Berkembang",
        description: "Jelajahi bagaimana teknologi keuangan mengubah ekonomi dan memberdayakan individu.",
        content: "<p>Content placeholder...</p>"
    },
    {
        id: 6,
        slug: "menavigasi-volatilitas-pasar-tips-dari-ahli",
        image: "https://images.unsplash.com/photo-1504384308090-c54be3855462?auto=format&fit=crop&q=80&w=800",
        category: "Obligasi",
        date: "7 Januari 2023",
        title: "Menavigasi Volatilitas Pasar: Tips dari Ahli",
        description: "Pelajari strategi untuk melindungi investasi Anda di masa ketidakpastian.",
        content: "<p>Content placeholder...</p>"
    },
    {
        id: 7,
        slug: "5-peluang-investasi-teratas-di-energi-hijau",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        category: "Reksa Dana",
        date: "8 Januari 2023",
        title: "5 Peluang Investasi Teratas di Energi Hijau",
        description: "Temukan opsi investasi berkelanjutan yang memberikan keuntungan dan dampak positif.",
        content: "<p>Content placeholder...</p>"
    },
    {
        id: 8,
        slug: "memahami-regulasi-cryptocurrency-di-seluruh-dunia",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800",
        category: "ETF",
        date: "9 Januari 2023",
        title: "Memahami Regulasi Cryptocurrency di Seluruh Dunia",
        description: "Panduan komprehensif tentang lanskap hukum yang berkembang dari mata uang digital.",
        content: "<p>Content placeholder...</p>"
    }
];

export const getAllPosts = () => {
    return [FEATURED_POST, ...BLOG_POSTS];
};

export const getPostBySlug = (slug: string) => {
    const allPosts = getAllPosts();
    return allPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3) => {
    const allPosts = getAllPosts();
    return allPosts
        .filter(post => post.slug !== currentSlug)
        .slice(0, limit);
};
