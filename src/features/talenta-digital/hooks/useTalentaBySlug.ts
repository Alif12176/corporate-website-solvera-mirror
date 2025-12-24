import { useQuery } from "@tanstack/react-query";
import type { Service } from "../data/service";
import { getTalentaBySlug } from "../api/talenta";

export function useTalentaBySlug(slug: string) {
  return useQuery<Service | null>({
    queryKey: ["service", slug],
    queryFn: () => getTalentaBySlug(slug),
    enabled: !!slug,
  });
}
