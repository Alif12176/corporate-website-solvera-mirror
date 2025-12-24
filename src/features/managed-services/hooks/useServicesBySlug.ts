import { useQuery } from "@tanstack/react-query";
import type { Service } from "../data/service";
import { getManagedServicesBySlug } from "../api/managed-services";

export function useManagedServicesBySlug(slug: string) {
  return useQuery<Service | null>({
    queryKey: ["service", slug],
    queryFn: () => getManagedServicesBySlug(slug),
    enabled: !!slug,
  });
}
