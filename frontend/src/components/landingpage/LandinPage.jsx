import React from "react";
import "./Landingpage.css";
import { useNavigate } from "react-router-dom";
import Typed from 'react-typed';

const LandinPage = () => {
  const navigate = useNavigate();
  const handlelogin =() =>{
   navigate('/login')
  }
  const handlesignup = () =>{
  navigate('/signup')
  }
  return (
    <div className="landingpage">
      <div className="navbar">
        <div className="name">Virtual Manager</div>
      </div>
      <div className="body">
        <div className="desc">
          <div className="heading">Virtual Manager</div>
          <h1 className="typed"> <Typed strings={['Manage with a Click','Sign up now !!']} typeSpeed={30} backSpeed={30} loop ></Typed> </h1>
          <div className="aboutit">
            Virtual manager streamlines tasks, delegates responsibilities,
            tracks progress, and fosters collaboration in a digital workspace,
            enhancing productivity, efficiency, and team coordination for remote
            work scenarios
          </div>
          <div className="lbtns">
            <button className="login" onClick={handlelogin}>Login</button>
            <button className="signup" onClick={handlesignup}>Signup</button>
          </div>
        </div>
        <div className="img"></div>
      </div>
    </div>
  );
};

export default LandinPage;
