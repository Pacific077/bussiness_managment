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
  const handleDashNav = ()=>{
   navigate("/dashboard")
  }
  const handleProdNav = ()=>{
   navigate("/products")
  }
  const handleClient =()=>{
   navigate('/clients')
  }
  const handleOrder =()=>{
   navigate('/orders')
  }
  const handleSettings =()=>{
   navigate('/maint')
  }
  const handlelogout =()=>{
   navigate('/maint')
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
        <div className="nav1items" onClick={handleProdNav}>Products</div>
        <div className="nav1items" onClick={handleDashNav}>Dashboard</div>
        <div className="nav1items" onClick={handleClient}>Clients</div>
        <div className="nav1items" onClick={handleOrder}>Orders</div>
        <div className="nav1items" onClick={handleSettings}>Settings</div>
        <div className="nav1items" onClick={handlelogout}>Logout</div>
     </div>
  )
}

export default Mainnav