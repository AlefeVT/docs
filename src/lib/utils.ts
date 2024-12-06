import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { QueryFunctionContext } from "@tanstack/react-query";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchAPI({
  queryKey,
}: QueryFunctionContext<[string, string]>) {
  const [, key] = queryKey;
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}
