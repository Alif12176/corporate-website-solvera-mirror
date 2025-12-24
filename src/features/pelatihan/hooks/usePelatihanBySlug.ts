import { useQuery } from "@tanstack/react-query";
import type { Service } from "../data/service";
import { getPelatihanBySlug } from "../api/pelatihan";

export function usePelatihanBySlug(slug: string) {
  return useQuery<Service | null>({
    queryKey: ["service", slug],
    queryFn: () => getPelatihanBySlug(slug),
    enabled: !!slug,
  });
}
