import React from 'react';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/features/products/api/products';
import { ProductDetailPage } from '@/features/products/components/ProductDetailPage';

interface ProductDetailProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductDetail({ params }: ProductDetailProps) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="flex flex-col w-full">
            <ProductDetailPage product={product} />
        </main>
    );
}
