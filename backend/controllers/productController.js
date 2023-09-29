import productModel from "../models/productModel.js";
import jwt from "jsonwebtoken";
import sellerModel from "../models/sellerModel.js";
import { validationResult } from "express-validator";

const createProduct = async (req, res, next) => {
  const errors  = validationResult(req);
  if(errors.isEmpty()){

    const { name, discription, CostPrice, Stock, SellingPrice } = req.body;
    const { token } = req.cookies;
    const decoded = jwt.verify(token, "secretkey");
    const { id } = decoded;
    const Seller = await sellerModel.findById(id);
    if (!Seller) {
      res.status(400).json({
        message: "user not found",
      });
    } else {
      const { email } = Seller;
      const Product = await productModel.create({
        name: name,
      discription: discription,
      CostPrice: CostPrice,
      Stock: Stock,
      SellingPrice: SellingPrice,
      email: email,
    });
    res.status(200).json({
      message: "product created succesffuly",
    });
  }
}else{
  let arr = [];
        console.log("found errors");
        errors.array().forEach((error) => {
          arr.push(error.msg);
        });
        console.log(arr);
        res.status(400).send(arr);
}
};

const updateProducts = async (req, res, next) => {
  const errors =validationResult(req);
  if(errors.isEmpty()){

    const prodid = req.params.id;
    const { name, discription, CostPrice, Stock, SellingPrice } = req.body;
    const { token } = req.cookies;
    const decoded = jwt.verify(token, "secretkey");
    const { id } = decoded;
    const Seller = await sellerModel.findById(id);
    if (!Seller) {
      res.status(400).json({
      message: "user not found",
    });
  } else {
    const { email } = Seller;
    const change = {
      name: name,
      discription: discription,
      CostPrice: CostPrice,
      Stock: Stock,
      SellingPrice: SellingPrice,
      email: email,
    };
    await productModel.findByIdAndUpdate(prodid, change);
    res.status(200).json({
      message: "updated successfully",
    });
  }
}else{
  let arr = [];
        console.log("found errors");
        errors.array().forEach((error) => {
          arr.push(error.msg);
        });
        console.log(arr);
        res.status(400).send(arr);
}
};

const DeleteProduct = async (req, res, next) => {
  const prodid = req.params.id;
  await productModel.findByIdAndDelete(prodid);
  res.status(200).json({
    messsage: "deleted",
  });
};

const GetallPoducts = async (req, res, next) => {
  const { token } = req.cookies;
  const decoded = jwt.verify(token, "secretkey");
  const { id } = decoded;
  const Seller = await sellerModel.findById(id);
  if (!Seller) {
    res.status(400).json({
      message: "user not found",
    });
  } else {
    const { email } = Seller;
    const Product = await productModel.find({ email: email });
    if (!Product) {
      res.status(400).json({
        message: "product not found",
      });
    } else {
      res.status(200).json(Product);
    }
  }
};

//get product Price

const getProductPrice = async(req,res,next)=>{
  const {id}=req.body;
  const Product =await productModel.findById(id);
  if(!Product){
    res.status(400).json({
      message: "product not found"
    });
  }else{
    const {SellingPrice} = Product
    res.status(200).json(SellingPrice);
  }
}

export { createProduct, updateProducts, DeleteProduct, GetallPoducts,getProductPrice };
