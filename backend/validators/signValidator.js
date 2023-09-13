import { body } from "express-validator";
import sellerModel from "../models/sellerModel.js";
const signupValidators = [
  body("name").notEmpty().withMessage("Name field is required"),
  body("email")
    .notEmpty()
    .withMessage("Email field is required")
    .isEmail()
    .withMessage("Invalid email format").custom(async (email) => {
        const seller = await sellerModel.findOne({ email });
        if (seller) {
          throw new Error('Email address is already registered');
        }
      }),
  body("password").notEmpty().withMessage("Password field is required"),
];

export default signupValidators;
