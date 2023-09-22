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
  return (
    <div>
        <ProductContext.Provider value={{prodarr,getAllprod,DeletProduct}}>
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