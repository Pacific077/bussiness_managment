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
    }
});

const sellerModel =  mongoose.model("Seller",SellerSchema);
export default sellerModel;