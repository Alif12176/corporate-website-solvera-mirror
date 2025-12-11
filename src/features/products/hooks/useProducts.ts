import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import type { ProductsResponse } from "../types/product";

export function useProducts() {
  return useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false, 
  });
}
