import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

const allowedOrigins = new Set([
  "https://restaurant-reservation-project-iota.vercel.app",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
]);

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true); // allow non-browser tools
      return cb(null, allowedOrigins.has(origin));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
//  it’s a middleware to parse form data into req.body, with support for complex fields when extended is true

app.use("/api/v1/reservation", reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
