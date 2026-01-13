import cors from "cors";
import express from "express";

import adminRoutes from "./routes/admin";
import authRoutes from "./routes/auth";
import trackRoutes from "./routes/track";

const app = express();

app.use(cors());
app.use(express.json());

// Auth route first
app.use("/admin", authRoutes);

// Admin-only routes
app.use("/admin", adminRoutes);

// Public tracking API
app.use("/api", trackRoutes);

export default app;
