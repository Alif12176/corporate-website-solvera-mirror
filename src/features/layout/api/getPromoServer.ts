import { PromoData } from "../types/promo";

export const getPromoServer = async (): Promise<PromoData | null> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
    
    const endpoint = `${baseUrl.replace(/\/$/, "")}/api/v1/marketing-promo`;

    const res = await fetch(endpoint, {
      cache: "no-store", 
    });

    if (!res.ok) {
      console.error(`Failed to fetch promo: ${res.status}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching promo on server:", error);
    return null;
  }
};