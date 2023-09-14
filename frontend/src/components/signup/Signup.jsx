import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
const Signup = () => {
    const [email,setemail]  = useState("");
    const [name,setname]  = useState("");
    const [pass,setpass]  = useState("");
    const handleemail =(e)=>{
        setemail(e.target.value);
        console.log(email);
    }
    const handlename = (e)=>{
        setname(e.target.value);
        console.log(name);
    }
    const handlepass = (e)=>{
        setpass(e.target.value);
        console.log(pass);
    }
  return (
    <div className="signuppage">
      <div className="sihnfrsthalf">
        <h1>Virtual Manager</h1>
        <div className="smalldesc">
          Welcome to your virtual manager page. Navigate tasks, monitor
          progress, and optimize your operations effectively..
        </div>
        <div className="productsNumber">1 M+</div>
        <div className="productnumberdesc">More than 1 million products to choose from</div>
        <div className="buyersnumbers">100,000+</div>
        <div className="sbuyersnumberdesc">More than 100,000 customers</div>
        <div className="sellernumbers">4000+</div>
        <div className="sellernumberdesc">More than 4000 sellers</div>
      </div>
      <div className="sign2ndhalf">
        <h1>Join Now</h1>
        <form className="signupform" action="post">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="abc@examole.com" value={email} onChange={handleemail}/>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" value={name} onChange={handlename}/>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" value={pass} onChange={handlepass}/>
          <button className="signupbtn" type="submit">
            Signup
          </button>
          <p className="alreadyaccount">
            Already have an account ?&nbsp;&nbsp;&nbsp;{" "}
            <Link className="link" to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
