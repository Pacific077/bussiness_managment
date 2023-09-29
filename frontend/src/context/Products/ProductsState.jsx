import React, { useState } from 'react'
import ProductContext from './ProductsContext'
import { ToastContainer, toast } from "react-toastify";
const ProductsState =  (props) => {
    const [prodarr,setprodarr] = useState([]);


    //get all products
    const getAllprod = async () =>{
        const url = "http://localhost:5000/api/v1/products/all";
        const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",    
          });
          if(response.status===400){
            toast.error("Please Login")
          }else{
            const productsfromdb = await response.json();
            setprodarr(productsfromdb);
            console.log("Prod arr",productsfromdb);
          }
    }

    //delete products

    const DeletProduct =async (data)=>{
      console.log(data)
      const url =`http://localhost:5000/api/v1/products/delete/${data}`
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"    
      });
      if(response.status===400){
        toast.error("Please Logged in!!");
      }else{
        toast.success("Product Deleted Successfully");
        getAllprod();
      }
  
    }

    //add product
    const AddProduct =async (prp)=>{
      console.log("i reached add Product",prp);
      const data = {
        name:prp.title,
        discription:prp.desc,
        CostPrice:prp.cp,
        Stock:prp.stock,
        SellingPrice:prp.sp   
    }
      const url ="http://localhost:5000/api/v1/products/createProducts";
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
      console.log(errorMessages);
      errorMessages.forEach((err) => {
        toast.warning(err);
      });
      }else{
        toast.success("Producted created Successfully")
        getAllprod();
      }
    }
    //Edit product 
    const EditProduct =async (prp)=>{
      console.log("i reached Edit Product ",prp);
      const url = `http://localhost:5000/api/v1/products/updateProducts/${prp.id}`
      const data = {
        name:prp.title,
        discription:prp.desc,
        CostPrice:prp.cp,
        Stock:prp.stock,
        SellingPrice:prp.sp   
    }
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",  
      body: JSON.stringify(data)  
    });
    if(response.status===400){
      const errorMessages = await response.json();
      console.log(errorMessages);
      errorMessages.forEach((err) => {
        toast.warning(err);
      });
    }else{
      toast.success("Producted Edited Successfully")
        getAllprod();
    }
    }

    //get product Price
    const GetProductPrice = async(id)=>{
      console.log("on my way to reach product price",id);
      const url = "http://localhost:5000/api/v1/products/productPrice";
      const data ={
        id:id
      }
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
        console.log(errorMessages);
        errorMessages.forEach((err) => {
          toast.warning(err);
        });
      }else{
        const price = await response.json();
        return {price:price};
      }
    }
  return (
    <div>
        <ProductContext.Provider value={{prodarr,getAllprod,DeletProduct,AddProduct,EditProduct,GetProductPrice}}>
            {props.children}
        </ProductContext.Provider>
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

export default ProductsState