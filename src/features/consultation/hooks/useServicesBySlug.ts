import { useQuery } from "@tanstack/react-query";
import type { Service } from "../data/service";
import { getServiceBySlug } from "../api/consultation";

export function useServicesBySlug(slug: string) {
  return useQuery<Service | null>({
    queryKey: ["service", slug],
    queryFn: () => getServiceBySlug(slug),
    enabled: !!slug,
  });
}
