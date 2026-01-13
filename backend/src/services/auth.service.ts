// src/services/auth.service.ts
import jwt from "jsonwebtoken";

const ADMIN_PASSWORD_HASH =
  "d74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1"; // hash of your password
const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // put in .env
const JWT_EXPIRY = "1h";

export async function verifyAdmin(password: string) {
  const { sha256 } = await import("../utils/hash"); // reuse your hash function
  const hash = await sha256(password);
  return hash === ADMIN_PASSWORD_HASH;
}

export function generateToken() {
  return jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
