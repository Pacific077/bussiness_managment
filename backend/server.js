import express from "express";
import connectDb from "./database/connectdb.js";
import sellerRouter from "./routes/sellerRoutes.js";
import cookieParser from "cookie-parser";



const app =express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/sellers',sellerRouter)
connectDb();
app.listen(5000,()=>{
    console.log("server started on port 5000");
})