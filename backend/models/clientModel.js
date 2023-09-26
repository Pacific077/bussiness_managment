import mongoose,{Schema} from "mongoose";
import sellerModel from "./sellerModel.js";

const clientSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    seller_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:sellerModel,
        required:true,
    },
    PhoneNo:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true    
    },
    dues:{
        type:Number,
        required:true    
    }
})

const clientModel = mongoose.model("client",clientSchema);
export default clientModel;