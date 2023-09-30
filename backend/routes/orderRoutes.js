import express from "express"
import { CreateOrder } from "../controllers/OrderController.js";
import isloggedin from "../auth/isloggedin.js";
import OrderValidator from "../validators/OrderValidator.js";
import checkProductStock from "../middlewares/checkproductStock.js";

const OrderRouter = express.Router();

OrderRouter.route("/create").post( isloggedin,OrderValidator,checkProductStock,CreateOrder);

export default OrderRouter