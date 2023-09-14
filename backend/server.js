import express from "express";
import connectDb from "./database/connectdb.js";
import sellerRouter from "./routes/sellerRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors"



const app =express();
const allowedOrigins = ["http://localhost:3000"]; // Update with your frontend's origin(s)

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies to be included in requests
  })
);
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/sellers',sellerRouter)
connectDb();
app.listen(5000,()=>{
    console.log("server started on port 5000");
})