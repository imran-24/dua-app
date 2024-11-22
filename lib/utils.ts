import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const makeUrl = (origin: string, category: string, id: number) => {
  const url = `${origin}/duas/${category}?cat=${id}`;
  const decodedUrl = decodeURIComponent(url);
  return decodedUrl.replace(/\s/g, "-").toLowerCase();
};