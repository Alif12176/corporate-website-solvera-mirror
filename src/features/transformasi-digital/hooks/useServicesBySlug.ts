import { useQuery } from "@tanstack/react-query";
import type { Service } from "../data/service";
import { getTransformasiDigitalBySlug } from "../api/transformasi-digital";

export function useTransformasiDigitalBySlug(slug: string) {
  return useQuery<Service | null>({
    queryKey: ["service", slug],
    queryFn: () => getTransformasiDigitalBySlug(slug),
    enabled: !!slug,
  });
}
