import React, { useContext, useEffect } from "react";
import SellerContext from "../../context/Seller/SellerContext";
import dp from "../../contents/images/dp.jpg"
import Cards from "../cards/Cards";
import './Home.css'
const Home = () => {


    //dont remove commnets
//   const Seller = useContext(SellerContext);
//   const { Profile, user } = Seller;
//   useEffect(() => {
//     Profile();
//   }, []);

  return (
    <div className="maindivhome">
     <div className="homenavbar">
        <div className="userprofile">
        <img src={dp} alt="a pic" />
           <span className="username">
              Mr x
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
     <div className="homepage">
        <div className="homenav2">
            nav2
        </div>
        <Cards />
     </div>
    </div>
  );
};

export default Home;
