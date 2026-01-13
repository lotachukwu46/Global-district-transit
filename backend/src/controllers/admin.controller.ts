// src/controllers/admin.controller.ts
import { Request, Response } from "express";
import * as parcelService from "../services/parcel.service";

export async function createParcel(req: Request, res: Response) {
  try {
    const parcel = await parcelService.createParcel(req.body);
    res.json(parcel);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function addParcelEvent(req: Request, res: Response) {
  try {
    const event = await parcelService.addParcelEvent(req.body);
    res.json(event);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function getAllParcels(req: Request, res: Response) {
  const parcels = await parcelService.getAllParcels();
  res.json(parcels);
}

export async function deleteParcel(req: Request, res: Response) {
  try {
    const { trackingNumber } = req.params;
    await parcelService.deleteParcel(trackingNumber);
    res.json({ success: true });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
