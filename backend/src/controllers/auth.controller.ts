// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function adminLogin(req: Request, res: Response) {
  const { password } = req.body;

  if (!password) return res.status(400).json({ error: "MISSING_PASSWORD" });

  const valid = await authService.verifyAdmin(password);
  if (!valid) return res.status(401).json({ error: "INVALID_CREDENTIALS" });

  const token = authService.generateToken();
  res.json({ token });
}
