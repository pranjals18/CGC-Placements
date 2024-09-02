// // utils/auth.ts
import { parseCookies } from "nookies";

export function isAuthenticated() {
  const cookies = parseCookies();
  return !!cookies.token; // Ensure this matches the cookie name set in the backend
}