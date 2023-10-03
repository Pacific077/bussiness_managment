import express from "express";
import { CreateOrder, getAllorders } from "../controllers/OrderController.js";
import isloggedin from "../auth/isloggedin.js";
import OrderValidator from "../validators/OrderValidator.js";
import checkProductStock from "../middlewares/checkproductStock.js";
import ClientAmountupdate from "../middlewares/clientAmountUpdate.js";
import ReduceProdStocks from "../middlewares/ReduceProdStock.js";
import SellerProfileUpdate from "../middlewares/sellerProfileUpdate.js";

const OrderRouter = express.Router();

OrderRouter.route("/create").post(
  isloggedin,
  OrderValidator,
  checkProductStock,
  ReduceProdStocks,
  ClientAmountupdate,
  SellerProfileUpdate,
  CreateOrder
);
OrderRouter.route("/allorders").get(getAllorders);

export default OrderRouter;
