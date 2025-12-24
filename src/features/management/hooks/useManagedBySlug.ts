import { useQuery } from "@tanstack/react-query";
import type { Service } from "../data/service";
import { getManagementBySlug } from "../api/management";

export function useManagedBySlug(slug: string) {
  return useQuery<Service | null>({
    queryKey: ["service", slug],
    queryFn: () => getManagementBySlug(slug),
    enabled: !!slug,
  });
}
