import { body } from "express-validator";
const loginValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email field is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password").notEmpty().withMessage("Password field is required"),
];

export default loginValidator;
