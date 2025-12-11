import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "../api/products";
import type { Product } from "../types/product";

export function useProductBySlug(slug: string) {
  return useQuery<Product | null>({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
    enabled: !!slug,
  });
}
