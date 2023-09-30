import OrderModel from "../models/OrderModel.js";
import clientModel from "../models/clientModel.js";
import productModel from "../models/productModel.js";
import sellerModel from "../models/sellerModel.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";


//creating orders
const CreateOrder =async (req,res,next)=>{
  const errors = validationResult(req);
  console.log("create order backend");
  console.log("err",errors)
  if(errors.isEmpty()){
    const {
      clientId,
      products, 
      totalAmount,
      paidAmount,
    } = req.body;
    const Client = await clientModel.findById(clientId);
    const ClientName=Client.name;
    const {token} =req.cookies;
    const decoded = jwt.verify(token,"secretkey");
    const sellerId=decoded.id;
    const Seller = await sellerModel.findById(sellerId);
    const sellerName  =Seller.name;
    const Dues = totalAmount-paidAmount;
    let newarr= []
    for(let i=0;i<products.length;i++){
      const {ProdId,ProdAmount} = products[i];
      const Prod =await productModel.findById(ProdId);
      const {SellingPrice} = Prod;
      const obj ={
        productId:ProdId,
        prodname:Prod.name,
        quantity:(ProdAmount/SellingPrice)
      };
      newarr.push(obj);
      // console.log(obj);
    }
    console.log(newarr);
    const Order=await OrderModel.create({sellerId,
      sellerName,
      clientId,
      ClientName,
      products:newarr,
      totalAmount,
      paidAmount,
      Dues,});
      res.status(200).send(Order);
  }else{
    let arr = [];
    console.log("found errors");
    errors.array().forEach((error) => {
      arr.push(error.msg);
    });
    console.log(arr);
    res.status(400).send(arr);
  }
   
}

//get all orders 
const getAllorders = async (req,res,next)=>{
  const { token } = req.cookies;
  const decoded = jwt.verify(token, "secretkey");
  const { id } = decoded;
  const Orders =await OrderModel.find({
    sellerId:id
  })
  if(!Orders){
    const arr =["No order found"]
    res.status(400).send(arr);
  }else{
    res.send(Orders);
  }
}
export {CreateOrder,getAllorders};