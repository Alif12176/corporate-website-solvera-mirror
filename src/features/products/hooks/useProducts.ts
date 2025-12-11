import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import type { ProductsResponse } from "../types/product";

export function useProducts(query?:string) {
  return useQuery<ProductsResponse>({
    queryKey: ["products", query],
    queryFn: ()=>getProducts(query),
    refetchOnWindowFocus: false, 
  });
}
