import express from "express";
import signupValidators from "../validators/signValidator.js";
import { LoginSeller , CreateSeller} from "../controllers/sellerController.js";
import loginValidator from "../validators/lognValidator.js";

const sellerRouter = express.Router();

sellerRouter.route("/signup").post(signupValidators,CreateSeller);
sellerRouter.route("/login").post(loginValidator,LoginSeller);

export default sellerRouter;