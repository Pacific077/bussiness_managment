import jwt from "jsonwebtoken"
import sellerModel from "../models/sellerModel.js";

const UpdateSellerProduct =async (req,res,next)=>{
    const { token } = req.cookies;

    const decoded = jwt.verify(token, "secretkey");
    const { id } = decoded;
    const seller =await sellerModel.findByIdAndUpdate(id,{
        $inc:{
            totalProd:1
        }
    },{
        new:true
    })
    next();
}

export default UpdateSellerProduct;