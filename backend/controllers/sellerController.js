import sellerModel from "../models/sellerModel.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
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
    console.log("found errors");``
    errors.array().forEach((error) => {
      arr.push(error.msg);
    });
    console.log(arr);
    res.status(400).send(arr);
  }
};
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
        const token = jwt.sign({id:seller._id},"secretkey");
        res.cookie('token',token,{ maxAge: 7 * 24 * 60 * 60 * 1000 });
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

const profile = async (req,res,next)=>{
  const {token}= req.cookies;
  console.log(token);
  const decoded = jwt.verify(token, 'secretkey');
  const {id}=decoded
  console.log(id);
  const seller =await sellerModel.findById(id);

  res.status(200).json(seller);
}

export { CreateSeller, LoginSeller ,profile};
