import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config(); //load env variables
const app = express();
const PORT = process.env.PORT || 3000;

// connect database
connectDB();

// middleware unutk parsing json agar req.body bisa diakses
app.use(express.json());

// routes
app.use("/api/v2/auth", authRoutes);

// rute dasar
app.get("/", (req, res) => {
  res.send("Hello World!");
})

// jalankan server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})