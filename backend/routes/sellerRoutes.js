import express from "express";
import signupValidators from "../validators/signValidator.js";
import { LoginSeller , CreateSeller, profile} from "../controllers/sellerController.js";
import loginValidator from "../validators/lognValidator.js";
import isloggedin from "../auth/isloggedin.js";

const sellerRouter = express.Router();

sellerRouter.route("/signup").post(signupValidators,CreateSeller);
sellerRouter.route("/login").post(loginValidator,LoginSeller);
sellerRouter.route("/profile").get(isloggedin,profile);

export default sellerRouter;