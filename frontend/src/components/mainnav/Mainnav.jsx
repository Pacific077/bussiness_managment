import React, { useContext, useEffect } from 'react'
import dp from "../../contents/images/dp.jpg"
import SellerContext from '../../context/Seller/SellerContext'
const Mainnav = () => {
  const Seller = useContext(SellerContext);
  const {Profile,user} = Seller;
  useEffect(()=>{
     Profile();
  },[])
  return (
    <div className="homenavbar">
        <div className="userprofile">
        <img src={dp} alt="a pic" />
           <span className="username">
              {user.name}
            </span> 
        </div>
        <div className="nav1items">Home</div>
        <div className="nav1items">About</div>
        <div className="nav1items">Contact</div>
        <div className="nav1items">Dashboard</div>
        <div className="nav1items">Products</div>
        <div className="nav1items">Customers</div>
        <div className="nav1items">Settings</div>
        <div className="nav1items">Logout</div>
     </div>
  )
}

export default Mainnav