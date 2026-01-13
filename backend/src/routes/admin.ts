// src/routes/admin.ts
import { Router } from "express";
import * as adminController from "../controllers/admin.controller";
import adminAuth from "../middleware/adminAuth";

const router = Router();

router.use(adminAuth); // protect all routes

router.get("/parcels", adminController.getAllParcels);
router.post("/parcels", adminController.createParcel);
router.post("/parcels/event", adminController.addParcelEvent);
router.delete("/parcels/:trackingNumber", adminController.deleteParcel);

export default router;
