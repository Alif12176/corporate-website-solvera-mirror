/**
 * API URL Utility
 * 
 * Handles the difference between server-side and client-side API calls.
 * - Server-side: Uses the full API URL (process.env.NEXT_PUBLIC_API_URL)
 * - Client-side: Uses the proxy path (/api/proxy/) to avoid Mixed Content errors
 * 
 * The proxy is configured in next.config.ts to rewrite /api/proxy/* to the actual API.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "";

/**
 * Check if code is running on the server
 */
export function isServer(): boolean {
  return typeof window === "undefined";
}

/**
 * Get the base URL for API calls.
 * - On server: Returns the full API URL (for SSR/ISR)
 * - On client: Returns the proxy path (to avoid Mixed Content)
 */
export function getApiBaseUrl(): string {
  if (isServer()) {
    // Server-side: use the full URL
    return `${API_URL}/api/v1`;
  }
  // Client-side: use the proxy to avoid Mixed Content
  return "/api/proxy";
}

/**
 * Get the full API URL (for server-side only, e.g., image URLs)
 * This should only be used when you need the actual external URL,
 * like for image sources that can't go through the proxy.
 */
export function getFullApiUrl(): string {
  return API_URL;
}
