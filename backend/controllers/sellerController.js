import sellerModel from "../models/sellerModel.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import clientModel from "../models/clientModel.js";

//signup
const CreateSeller = async (req, res, next) => {
  const errors = validationResult(req);
  //   console.log(req.body);
  if (errors.isEmpty()) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const Seller = await sellerModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    res.status(201).send(Seller);
  } else {
    let arr = [];
    console.log("found errors");
    errors.array().forEach((error) => {
      arr.push(error.msg);
    });
    console.log(arr);
    res.status(400).send(arr);
  }
};

//login
const LoginSeller = async (req, res, next) => {
  const errors = validationResult(req);
  console.log("login seller");
  if (errors.isEmpty()) {
    const { email, password } = req.body;
    const seller = await sellerModel.findOne({ email });
    if (!seller) {
      res.status(401).json({
        message: " no user found",
      });
    } else {
      if (bcrypt.compareSync(password, seller.password)) {
        const token = jwt.sign({ id: seller._id }, "secretkey");
        res.cookie("token", token, { maxAge: 7 * 24 * 60 * 60 * 1000 });
        res.status(201).json({
          message: "loggedd in!!!!",
        });
      } else {
        res.status(401).json({
          message: " invalid password",
        });
      }
    }
  } else {
    let arr = [];
    console.log("found errors");
    errors.array().forEach((error) => {
      arr.push(error.msg);
    });
    console.log(arr);
    res.status(400).send(arr);
  }
};
//profile
const profile = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  const decoded = jwt.verify(token, "secretkey");
  const { id } = decoded;
  console.log(id);
  const seller = await sellerModel.findById(id);

  res.status(200).json(seller);
};

//createClients
const createClinets =async (req,res,next)=>{
  const {name,PhoneNo,address} = req.body;
  const {token} =req.cookies;
  const decoded = jwt.verify(token, "secretkey");
  const { id } = decoded;
  const Client =await clientModel.create({
    name:name,
    seller_id:id,
    PhoneNo:PhoneNo,
    address:address,
    amount:0,
    dues:0
  });
  res.status(200).send(Client);
}

//getallclient

const GetAllClients =async (req,res,next)=>{
  const {token} =req.cookies;
  const decoded = jwt.verify(token,"secretkey");
  const {id}=decoded;
  const Client = await clientModel.find({
    seller_id:id
  });
  if(!Client){
    res.status(400).json("no clients")
  }else{
    res.status(200).json(Client);
  }
}

export { CreateSeller, LoginSeller, profile ,createClinets,GetAllClients};
