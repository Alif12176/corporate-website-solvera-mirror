import { ProductsPage } from "@/features/products/components/ProductsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products - Solvera.id",
    description: "Temukan berbagai produk unggulan dari Solvera.id yang dirancang untuk memberikan solusi teknologi terbaik bagi bisnis Anda."
}

export default function Page() {
    return <ProductsPage />
}