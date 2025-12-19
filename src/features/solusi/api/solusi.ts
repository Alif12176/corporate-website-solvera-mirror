import type { Solution, SolutionsResponse } from "../data/solutions";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL + "api/v1/";

export async function getSolutionBySlug(slug: string): Promise<Solution | null> {
  try {
    const res = await fetch(`${BASE_URL}/solusi-${slug}`, { cache: "no-store" });
    // console.log('res solusi', res)
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

// export async function getSolutions(params?: any, signal?: AbortSignal): Promise<SolutionsResponse> {
//   try {
//     const url = new URL(BASE_URL);
//     if (params) {
//       Object.keys(params).forEach((key) => {
//         if (params[key] !== undefined && params[key] !== null) {
//           url.searchParams.append(key, String(params[key]));
//         }
//       });
//     }

//     const res = await fetch(url.toString(), { signal, cache: "no-store" });
//     if (!res.ok) {
//       // If 404, maybe return empty list? or throw? Sticking to throw for now or standard error handling
//       throw new Error(`Failed to fetch solutions: ${res.status}`);
//     }
//     const result = await res.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching solutions list:", error);
//     throw error;
//   }
// }
