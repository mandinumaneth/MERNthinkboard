import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/reteLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json()); // Middleware to parse JSON bodies : req.body

app.use(rateLimiter); // Apply rate limiting middleware

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
