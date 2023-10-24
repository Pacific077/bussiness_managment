import mongoose, { Schema } from "mongoose";
import sellerModel from "./sellerModel.js";
import clientModel from "./clientModel.js";
import productModel from "./productModel.js";

const orderSchema = new Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: sellerModel,
  },
  sellerName: {
    type: String,
    required: true,
  },
  ClientName: {
    type: String,
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: clientModel,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  paidAmount: {
    type: Number,
    default: 0,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:productModel,
        required: true,
      },
      prodname:{
        type:String,
        required:true
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  Dues: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const OrderModel = mongoose.model("order", orderSchema);
export default OrderModel;
