import express from "express"
import { CreateOrder } from "../controllers/OrderController.js";

const OrderRouter = express.Router();

OrderRouter.route("/create").post(CreateOrder);

export default OrderRouter