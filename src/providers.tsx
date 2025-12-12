'use client'

import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
        <HeroUIProvider navigate={router.push}>
            {children}
        </HeroUIProvider>
        </QueryClientProvider>
    )
}
