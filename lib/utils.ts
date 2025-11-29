import { clsx, type ClassValue } from "clsx";

/**
 * Utility function to merge class names
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format a date string to a more readable format
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "N/A";
  
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format a date to show only the year
 */
export function formatYear(dateString: string): string {
  if (!dateString) return "N/A";
  return new Date(dateString).getFullYear().toString();
}

/**
 * Format runtime in minutes to hours and minutes
 */
export function formatRuntime(minutes: number | null): string {
  if (!minutes) return "N/A";
  
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours === 0) return `${mins}m`;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}m`;
}

/**
 * Format a number with commas (e.g., 1000000 -> 1,000,000)
 */
export function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

/**
 * Format currency (USD)
 */
export function formatCurrency(amount: number): string {
  if (amount === 0) return "N/A";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Get TMDB image URL
 */
export function getImageUrl(path: string | null, size: string = "original"): string {
  if (!path) return "/placeholder-movie.png";
  
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL || "https://image.tmdb.org/t/p";
  return `${baseUrl}/${size}${path}`;
}

/**
 * Get poster URL with default size
 */
export function getPosterUrl(path: string | null): string {
  return getImageUrl(path, "w500");
}

/**
 * Get backdrop URL with default size
 */
export function getBackdropUrl(path: string | null): string {
  return getImageUrl(path, "w1280");
}

/**
 * Get profile image URL with default size
 */
export function getProfileUrl(path: string | null): string {
  return getImageUrl(path, "w185");
}

/**
 * Format rating to one decimal place
 */
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

/**
 * Get rating color class based on score
 */
export function getRatingColor(rating: number): string {
  if (rating >= 7) return "text-green-500";
  if (rating >= 5) return "text-yellow-500";
  return "text-red-500";
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
