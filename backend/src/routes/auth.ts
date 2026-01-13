import { Router } from "express";
import { adminLogin } from "../controllers/auth.controller";

const router = Router();

/**
 * POST /admin/login
 * Body: { password: string }
 */
router.post("/login", adminLogin);

export default router;
