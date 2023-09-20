import React, { useContext, useEffect } from 'react'
import dp from "../../contents/images/dp.jpg"
import SellerContext from '../../context/Seller/SellerContext'
import { useNavigate } from 'react-router-dom';
const Mainnav = () => {
  const Seller = useContext(SellerContext);
  const {Profile,user} = Seller;
  const navigate = useNavigate();
  useEffect(()=>{
     Profile();
  },[])
  const handlenoteNav = ()=>{
   navigate("/notes")
  }
  const handleHomeNav = ()=>{
   navigate("/home")
  }
  const handlenoteDash = ()=>{
   navigate("/dashboard")
  }

  return (
    <div className="homenavbar">
        <div className="userprofile">
        <img src={dp} alt="a pic" />
           <span className="username">
              {user.name}
            </span> 
        </div>
        <div className="nav1items" onClick={handleHomeNav}>Home</div>
        <div className="nav1items" onClick={handlenoteNav}>Notes</div>
        <div className="nav1items">Contact</div>
        <div className="nav1items" onClick={handlenoteDash}>Dashboard</div>
        <div className="nav1items">Products</div>
        <div className="nav1items">Customers</div>
        <div className="nav1items">Settings</div>
        <div className="nav1items">Logout</div>
     </div>
  )
}

export default Mainnav