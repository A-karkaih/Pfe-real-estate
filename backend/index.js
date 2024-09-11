import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from 'mongoose';
//import { connectDB } from "./config/DB.js";
import userRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js"
import ListingRouter from "./routes/listing.route.js"
import path from 'path';

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => {
  console.log("Connected to MongoDB!");
})
.catch((err) => {
  console.log(err);
});

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  //connectDB();
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth" , AuthRouter);
app.use("/api/listing" , ListingRouter);



app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})


//midlware for handling errors
app.use((err,req,res,next)=> {
const statusCode = err.statusCode || 500 ;
const message = err.message || "Internal Server Error";
return res.status(statusCode).json({
  success : false ,
  statusCode,
  message ,
})
})