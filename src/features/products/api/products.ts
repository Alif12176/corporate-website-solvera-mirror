import type { Product, ProductsResponse } from "../types/product";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL+'api/v1/products';

export async function getProducts(): Promise<ProductsResponse> {
  try {
    console.log("Fetching products from:", BASE_URL);
    const res = await fetch(BASE_URL, { cache: "no-store" });

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
  const res = await fetch(`${BASE_URL}/${slug}`, { cache: "no-store" });

  if (!res.ok) {
    return null; 
  }

  const result = await res.json();
  return result.data;
}
