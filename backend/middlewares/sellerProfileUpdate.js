import jwt from "jsonwebtoken"
import sellerModel from "../models/sellerModel.js";
import productModel from "../models/productModel.js";

const SellerProfileUpdate =async (req,res,next)=>{
    const {products,totalAmount} =req.body;
    let TotalProfit = 0;
    for(let i =0;i<products.length;i++){
        const {ProdId,ProdAmount} = products[i];
        const Prod = await productModel.findById(ProdId);
        const currquant = ProdAmount/Prod.SellingPrice;
        const totalCp = currquant*Prod.CostPrice;
        TotalProfit+=(ProdAmount-totalCp);
    }
    const { token } = req.cookies;

    const decoded = jwt.verify(token, "secretkey");
    const { id } = decoded;
    // const 
    const seller = await sellerModel.findByIdAndUpdate(id,{
        $inc:{
            totalOrder:1,
            totalProfit:TotalProfit,
            totalsold:totalAmount
        }
    },{new:true});
    next();
}

export default SellerProfileUpdate;