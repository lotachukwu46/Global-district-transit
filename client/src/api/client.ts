import axios from "axios";

// FIXED: Added https:// and moved to environment variables
const API_BASE =
  import.meta.env.VITE_API_URL ||
  "https://global-district-transit-production.up.railway.app";

export const api = axios.create({
  baseURL: API_BASE,
  // Add this if you want to handle cookies/sessions correctly across domains
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const session = localStorage.getItem("admin_session");

  if (session && config.url?.startsWith("/admin")) {
    try {
      const { token } = JSON.parse(session);
      config.headers.Authorization = `Bearer ${token}`;
    } catch (e) {
      console.error("Failed to parse session", e);
    }
  }
  return config;
});
