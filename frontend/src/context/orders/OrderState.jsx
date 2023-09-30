import React from 'react'
import OrderContext from './OrderContext';
import { ToastContainer, toast } from "react-toastify";
const OrderState = (props) => {

    //creating order state
    const CreateOrder =async (props)=>{
      for(let i =0;i<props.items.length;i++){
        if(props.items[i].ProdId===0){
          toast.warning("please select the items")
          return;
        }
      }
      const data={
        clientId:props.clientId,
        products:props.items, 
        totalAmount:props.totalAmount,
        paidAmount:props.paid,
      }
      
      console.log("create order state",data);
      const url = "http://localhost:5000/api/v1/orders/create"
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",  
        body: JSON.stringify(data)  
      }); 
      if(response.status===400){
        const errorMessages = await response.json();
        console.log("errmsg",errorMessages);
        errorMessages.forEach((err) => {
          toast.warning(err);
        });
      }else{
        toast.success("Order created Successfully")
      }
    }
  return (
    <div>
        <OrderContext.Provider value={{CreateOrder}}>
            {props.children}
        </OrderContext.Provider>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default OrderState;