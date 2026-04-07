import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const compactFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1
});

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCompactNumber = (value: number) => compactFormatter.format(value);

export const formatCurrency = (value: number) => currencyFormatter.format(value);

export const splitTextareaLines = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
