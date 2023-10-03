import mongoose ,{Schema} from "mongoose"

const SellerSchema = new Schema({
    name :{
        type :String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    totalOrder:{
        type:Number,
        default:0
    },
    totalClients:{
        type:Number,
        default:0
    },
    totalProfit:{
        type:Number,
        default:0
    },
    totalsold:{
        type:Number,
        default:0
    },
    totalProd:{
        type:Number,
        default:0
    }
});

const sellerModel =  mongoose.model("Seller",SellerSchema);
export default sellerModel;