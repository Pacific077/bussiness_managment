import jwt  from "jsonwebtoken"
import sellerModel from "../models/sellerModel.js";
const isloggedin=async (req,res,next)=>{
    try{
        const {token}=req.cookies;
        const decoded = jwt.verify(token,"secretkey");
        const {id}  = decoded;
        const seller =await sellerModel.findById(id);
        if(seller){
            next();
        }else{
            res.status(400).json({
                "message":"Please Login"
            })
        }
    }catch(er){
        res.status(400).json({
            "messaage":"Please Login to Continue"
        })
    }


}
export default isloggedin;