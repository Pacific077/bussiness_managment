import mongoose from "mongoose";
const mongooseUrl = "mongodb://127.0.0.1:27017/bussinessManagment"
const connectDb = ()=>{
    try{
        mongoose.connect(mongooseUrl);
        console.log("connected to mongoose")
    }
    catch(er){
        console.log(er);
    }
}

export default connectDb;