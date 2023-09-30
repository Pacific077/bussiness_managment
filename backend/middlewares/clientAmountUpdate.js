import clientModel from "../models/clientModel.js";

const ClientAmountupdate =async (req,res,next)=>{
    const {clientId,totalAmount,paidAmount} = req.body;
    const dues = totalAmount-paidAmount;
    const Client = await clientModel.findByIdAndUpdate(clientId,{
        $inc: {
          amount: totalAmount,
          dues: dues, 
        },
      },{ new: true }
      );
      next();
}

export default ClientAmountupdate;