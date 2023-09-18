import { body } from "express-validator";

const productValidator =[
    body("name")
    .notEmpty()
    .withMessage("Title field is required"),
  body("discription")
    .notEmpty()
    .withMessage("discription field is required"),
  body("CostPrice")
    .notEmpty()
    .withMessage("CostPrice field is required"),
  body("Stock")
    .notEmpty()
    .withMessage("Stock field is required"),
  body("SellingPrice")
    .notEmpty()
    .withMessage("SellingPrice field is required"),
]
export default productValidator;