import React, { useContext, useEffect } from "react";
import SellerContext from "../../context/Seller/SellerContext";

import Cards from "../cards/Cards";
import './Home.css'
import Mainnav from "../mainnav/Mainnav";
import Nav2 from "../sec nav/Nav2";
const Home = () => {
   


  return (
    <div className="maindivhome">
     <Mainnav/>
     <div className="homepage">
        <Nav2/>
        <Cards />

        <div className="updates">
         <div className="updsign">
            <h1>Sign up to Virtual Manager </h1>
            <p>Get updates about latest offers</p>
         </div>
         <div className="updformcont">
            <form action="" className="updform">
               <input type="email" className="updinp" placeholder="abc@example.com" />
               <button className="updbtn" type="submit">Sign up</button>
            </form>
         </div>
        </div>
        {/* <div className="footer">
         <div className="leftfoot">
          <div className="leftfootitems">
            Contact Us
            <ul>
               <li>hi</li>
               <li>hi</li>
               <li>hi</li>
               <li>hi</li>
            </ul>
         </div>
          <div className="leftfootitems">About Us</div>
          <div className="leftfootitems">Privacy Policy</div>
          <div className="leftfootitems">Follow</div>
         </div>
         <div className="rightfoot">
            lowfoot
         </div>
        </div> */}
     </div>
    </div>
  );
};

export default Home;
