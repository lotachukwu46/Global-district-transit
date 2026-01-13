// src/api/auth.ts
import { api } from "./client";

export async function loginAdmin(password: string) {
  const res = await api.post("/admin/login", { password });
  return res.data; // { token: string }
}
