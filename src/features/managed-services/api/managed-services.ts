import type { Service } from "../data/service";
import { getApiBaseUrl } from "@/utils/api-url";
export async function getManagedServicesBySlug(slug: string): Promise<Service | null> {
  try {
    const url = `${getApiBaseUrl()}/services/${slug}`;

    const res = await fetch(url, {
      next: { revalidate: 3600 }
    });

    if (res.status === 404) {
      console.warn(`⚠️ Data not found for slug: ${slug}`);
      return null;
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch service: ${res.status}`);
    }

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}