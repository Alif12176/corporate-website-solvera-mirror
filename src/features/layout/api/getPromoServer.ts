import { PromoData } from "../types/promo";
import { getApiBaseUrl } from "@/utils/api-url";

export const getPromoServer = async (): Promise<PromoData | null> => {
  try {
    const endpoint = `${getApiBaseUrl()}/marketing-promo`;

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