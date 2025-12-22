import type { Product, ProductsResponse } from "../data/product";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL + "api/v1/products";

export async function getProducts(query?: string, signal?: AbortSignal): Promise<ProductsResponse> {
  try {
    const queryString = new URLSearchParams(query || {}).toString();
    const res = await fetch(`${BASE_URL}?${queryString}`, {
      method: "GET",
      next: { revalidate: 60 }, // <-- GANTI JADI INI (Cache 1 menit)
      signal
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data: ProductsResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/${slug}`, { 
      next: { 
        revalidate: 3600 // Cache data selama 1 jam (3600 detik)
      } 
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
