import mongoose,{Schema} from "mongoose";
const ProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
        
    },
    CostPrice:{
        type:Number,
        required:true
        
    },
    Stock:{
        type:Number,
        required:true
        
    },
    SellingPrice:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const productModel = mongoose.model("product",ProductSchema);

export default productModel;