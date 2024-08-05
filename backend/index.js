import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Config/DB.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
