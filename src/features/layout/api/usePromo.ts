"use client";

import { useQuery } from "@tanstack/react-query";
import { PromoData } from "../types/promo"; 

const fetchPromo = async (): Promise<PromoData> => {
  const res = await fetch("/api/proxy/marketing-promo");
  
  if (!res.ok) {
    throw new Error("Gagal mengambil data promo");
  }
  
  return res.json();
};

export const usePromo = () => {
  return useQuery({
    queryKey: ["marketing-promo"],
    queryFn: fetchPromo,
    staleTime: 1000 * 60 * 5, // Cache 5 menit
    retry: 1, // Coba ulang 1x jika gagal
  });
};