import type { Solution} from "../data/solutions";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL + "api/v1"; 
export async function getSolutionBySlug(slug: string): Promise<Solution | null> {
  try {
    const url = `${BASE_URL}/solusi-${slug}`;    
    console.log("🛠️ FETCHING URL:", url); 

    const res = await fetch(url, { 
      next: { revalidate: 3600 } 
    });

    if (res.status === 404) {
      console.warn(`⚠️ Data not found for slug: ${slug}`);
      return null;
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch solution: ${res.status}`);
    }

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching solution:", error);
    return null; 
  }
}