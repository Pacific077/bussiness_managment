import OrderModel from "../models/OrderModel.js";


const CreateOrder =async (req,res,next)=>{
    const {
        sellerId,
        sellerName,
        clientId,
        ClientName,
        products, 
        totalAmount,
        paidAmount,
        dues,
      } = req.body;
      const Order=await OrderModel.create({sellerId,
        sellerName,
        clientId,
        ClientName,
        products,
        totalAmount,
        paidAmount,
        dues,});
        res.status(200).send(Order);
}
export {CreateOrder};