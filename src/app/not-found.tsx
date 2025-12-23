// src/app/not-found.tsx
import Link from 'next/link'
import { Button } from "@/features/layout/components/Button";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">404</h2>
            <p className="text-lg text-brand-text-secondary mb-8">Halaman yang Anda cari tidak ditemukan.</p>
            <Link href="/">
                <Button color="primary">Kembali ke Beranda</Button>
            </Link>
        </div>
    )
}