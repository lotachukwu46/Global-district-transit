// src/middleware/adminAuth.ts
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../services/auth.service";

export default function adminAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "UNAUTHORIZED" });

  const payload = verifyToken(token);

  // type guard: check payload is object and has role
  if (
    !payload ||
    typeof payload === "string" || // reject string payloads
    !(payload as JwtPayload).role ||
    (payload as JwtPayload).role !== "admin"
  ) {
    return res.status(403).json({ error: "FORBIDDEN" });
  }

  next();
}
