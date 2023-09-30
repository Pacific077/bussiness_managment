import { body } from "express-validator";
const OrderValidator = [
  body("clientId")
  .custom((value) => {
    if (value === 0) {
      console.log("validators")
      return false;
    }
    return true;
  }).withMessage("Client ID cannot be zero")
];

export default OrderValidator;
