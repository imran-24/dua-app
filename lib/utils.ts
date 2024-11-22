import { useOrigin } from "@/hooks/use-origin";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const makeUrl = (category: string, id: number) => {
  const origin = useOrigin();
  const url = `${origin}/duas/${category}?cat=${id}`;
  const decodedUrl = decodeURIComponent(url);
  return decodedUrl.replace(/\s/g, "-").toLowerCase();
};