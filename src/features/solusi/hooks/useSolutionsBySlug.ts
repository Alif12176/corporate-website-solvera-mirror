import { useQuery } from "@tanstack/react-query";
import { getSolutionBySlug } from "../api/solusi";
import type { Solution } from "../data/solutions";

export function useSolutionBySlug(slug: string) {
  return useQuery<Solution | null>({
    queryKey: ["solution", slug],
    queryFn: () => getSolutionBySlug(slug),
    enabled: !!slug,
  });
}
