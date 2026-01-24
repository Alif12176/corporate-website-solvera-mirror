// src/features/blog/api/blog.ts
import { BlogFilters, BlogResponse, CategoryResponse, SingleBlogResponse } from "../types";
import { getApiBaseUrl } from "@/utils/api-url";

// 1. Get List Articles (Client Side Fetching via React Query)
export async function getArticles(filters: BlogFilters, signal?: AbortSignal): Promise<BlogResponse> {
  const params = new URLSearchParams({
    page: filters.page.toString(),
    limit: filters.limit.toString(),
  });

  if (filters.category) {
    params.append("category", filters.category);
  }

  // Jika backend mendukung search, tambahkan di sini
  // if (filters.search) params.append("search", filters.search);

  const res = await fetch(`${getApiBaseUrl()}/articles?${params.toString()}`, {
    method: "GET",
    signal, // Penting untuk cancel request jika user pindah halaman cepat
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

// 2. Get Categories (Client Side Fetching)
export async function getCategories(signal?: AbortSignal): Promise<CategoryResponse> {
  const res = await fetch(`${getApiBaseUrl()}/categories`, {
    method: "GET",
    signal,
  });

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

// 3. Get Single Article (Server Side Fetching)
export async function getArticleBySlug(slug: string): Promise<SingleBlogResponse | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/articles/${slug}`, {
      method: "GET",
      next: { revalidate: 60 }, // Cache 60 detik (ISR)
    });

    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Failed to fetch article");

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}