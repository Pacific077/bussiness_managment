import mongoose,{Schema} from "mongoose";
import sellerModel from "./sellerModel.js";
import clientModel from "./clientModel.js";

const orderSchema = new Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: sellerModel
      },
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:clientModel
    },
    totalAmount:{
        type:Number,
        default:0
    },
    paidAmount:{
        type:Number,
        default:0
    },
    Dues:{
        type:Number,
        default:0
    }
})

const OrderModel = mongoose.model("order",orderSchema);
export default OrderModel;