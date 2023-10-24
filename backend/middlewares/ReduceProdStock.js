import productModel from "../models/productModel.js";

const ReduceProdStocks  =async (req,res,next) =>{
    const {products} =req.body;
    for(let i=0;i<products.length;i++){
        const {ProdId,ProdAmount} = products[i];
        const Prod =await productModel.findById(ProdId);
 
        const currquant = ProdAmount/Prod.SellingPrice;
        const newSt = Prod.Stock-currquant;
        const newtemp = {
            name: Prod.name,
            discription: Prod.discription,
            CostPrice: Prod.CostPrice,
            Stock: newSt,
            SellingPrice: Prod.SellingPrice,
            email: Prod.email,
        }
        const updprod = await productModel.findByIdAndUpdate(ProdId,newtemp);
        
    }
    next();
}

export default ReduceProdStocks;