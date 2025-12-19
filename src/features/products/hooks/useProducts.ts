import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import type { ProductsResponse } from "../data/product";

export function useProducts(query?:any) {
  return useQuery<ProductsResponse>({
    queryKey: ["products", query],
    queryFn: ({signal})=>getProducts(query, signal),
    refetchOnWindowFocus: false, 
  });
}
