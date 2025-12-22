// src/components/ui/PageLoader.tsx
import { Spinner } from "@heroui/react";

interface PageLoaderProps {
    text?: string;
}

export default function PageLoader({ text = "Memuat halaman..." }: PageLoaderProps) {
    return (
        <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-4">
            <Spinner size="lg" color="primary" />
            <p className="text-gray-500 animate-pulse font-medium">{text}</p>
        </div>
    );
}