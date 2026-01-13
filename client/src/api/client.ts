import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const api = axios.create({
  baseURL: API_BASE,
});

// Attach token automatically if stored in localStorage
api.interceptors.request.use((config) => {
  const session = localStorage.getItem("admin_session");

  // ONLY attach token if the URL starts with /admin
  if (session && config.url?.startsWith("/admin")) {
    const { token } = JSON.parse(session);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
