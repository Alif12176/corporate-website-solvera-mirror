// src/providers.tsx
'use client'

import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    // useState agar QueryClient tidak dibuat ulang saat re-render
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                // Data dianggap segar selama 1 menit (tidak akan refetch otomatis dalam waktu ini)
                staleTime: 60 * 1000,
                // Hindari refetch saat user pindah window/tab (hemat resource)
                refetchOnWindowFocus: false,
            },
        },
    }));

    return (
        <QueryClientProvider client={queryClient}>
            <HeroUIProvider navigate={router.push}>
                {children}
            </HeroUIProvider>
        </QueryClientProvider>
    )
}
