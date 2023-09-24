import mongoose,{Schema} from "mongoose";

const clientSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    PhoneNo:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    }
})

const clientModel = mongoose.model("client",clientSchema);
export default clientModel;