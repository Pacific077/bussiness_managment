import productModel from "../models/productModel.js";

const checkProductStock =async (req,res,next)=>{
    const {products} =req.body;

    for(let i=0;i<products.length;i++){
        const {ProdId,ProdAmount} = products[i];
        console.log("prod id",ProdId)
        const Prod =await productModel.findById(ProdId);
 
        const currquant = ProdAmount/Prod.SellingPrice;
        if(currquant>Prod.Stock){
            const arr=["not in stock"]
            res.status(400).send(arr);
              return;
        }
    }
    next();
}
export default checkProductStock;