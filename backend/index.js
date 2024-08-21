import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";
import userRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js"
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth" , AuthRouter);

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