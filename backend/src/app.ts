import cors from "cors";
import express from "express";

import adminRoutes from "./routes/admin";
import authRoutes from "./routes/auth";
import trackRoutes from "./routes/track";

const app = express();

app.use(
  cors({
    // Use the environment variable we set in Railway, or localhost for dev
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.options("*", cors());

// Auth route first
app.use("/admin", authRoutes);

// Admin-only routes
app.use("/admin", adminRoutes);

// Public tracking API
app.use("/api", trackRoutes);

export default app;
