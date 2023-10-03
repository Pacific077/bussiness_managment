import express from "express"
import isloggedin from "../auth/isloggedin.js"
import { DeleteProduct, GetallPoducts, createProduct, getProductPrice, updateProducts } from "../controllers/productController.js";
import productValidator from "../validators/productValidator.js";
import UpdateSellerProduct from "../middlewares/UpdateSellerProduct.js";

const productRouter = express.Router();

productRouter.route('/createProducts').post(isloggedin,productValidator,UpdateSellerProduct,createProduct);
productRouter.route('/updateProducts/:id').put(isloggedin,productValidator,updateProducts);
productRouter.route('/delete/:id').delete(isloggedin,DeleteProduct);
productRouter.route('/all').get(isloggedin,GetallPoducts);
productRouter.route('/productPrice').post(getProductPrice);


export default productRouter;