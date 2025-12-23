// src/features/blog/types/index.ts

export interface Category {
  id: number;
  name: string;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string; 
  content: string; 
  image_url: string;
  published_at: string;
  publisher: Publisher;
  categories: Category[];
}

export interface MetaData {
  page: number;
  limit: number;
  has_more: boolean;
  count?: number;
}

export interface BlogResponse {
  success: boolean;
  data: {
    items: BlogPost[];
    page: number;
    limit: number;
    has_more: boolean;
  };
  error: string | null;
}

export interface CategoryResponse {
  success: boolean;
  data: {
    items: Category[];
    count: number;
  };
  error: string | null;
}

export interface SingleBlogResponse {
  success: boolean;
  data: BlogPost;
  error: string | null;
}

// Untuk Filter di Component
export interface BlogFilters {
  page: number;
  limit: number;
  category?: string;
  search?: string; 
}