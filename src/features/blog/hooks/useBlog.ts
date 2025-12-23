// src/features/blog/hooks/useBlog.ts
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getArticles, getCategories } from "../api/blog";
import { BlogFilters } from "../types";

export function useArticles(filters: BlogFilters) {
  return useQuery({
    queryKey: ["articles", filters],
    queryFn: ({ signal }) => getArticles(filters, signal),
    placeholderData: keepPreviousData,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: ({ signal }) => getCategories(signal),
    staleTime: 1000 * 60 * 60,
  });
}