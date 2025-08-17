import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
}));
app.use(express.json()); // Middleware to parse JSON bodies : req.body
app.use(rateLimiter); // Apply rate limiting middleware


app.use("/api/notes", notesRoutes); // Apply notes routes

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
