// src/routes/track.ts
import { Router } from "express";
import * as parcelController from "../controllers/parcel.controller";

const router = Router();

router.get("/track/:trackingNumber", parcelController.trackParcel);

export default router;
