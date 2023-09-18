import express from "express";
import connectDb from "./database/connectdb.js";
import sellerRouter from "./routes/sellerRoutes.js";
import notesRouter from "./routes/notesRoutes.js";
import productRouter from "./routes/productRoutes.js";
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
app.use('/api/v1/sellers',sellerRouter);
app.use('/api/v1/notes',notesRouter);
app.use('/api/v1/products',productRouter);
connectDb();
app.listen(5000,()=>{
    console.log("server started on port 5000");
})