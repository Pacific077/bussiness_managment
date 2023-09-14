import React from "react";
import { useState } from "react";
import "./login.css";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const handlemailchange =(e)=>{
    setemail(e.target.value);

  } 
  const handlePasschange = (e)=>{
    setpass(e.target.value);

  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="loginpage">
      <div className="halfimage"></div>
      <div className="halfform">
        <h1>WELCOME &nbsp;&nbsp;BACK &nbsp;&nbsp;!!</h1>
        <form action="" method="post">
          <div className="email">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="abc123@exmaple.com"
              onChange={handlemailchange}
              value={email}
            />
          </div>
          <div className="pass">
            <label htmlFor="">Password</label>
            <input
              type={showPassword ? "text" : "password"} value={pass}
              placeholder="password" onChange={handlePasschange}
            />
          </div>

          <button className="loformbtn" type="submit">
            Login
          </button>
        </form>
        <button
          className="toggle-password"
          type="button"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "🔒" : "👁️"}
        </button>
      </div>
    </div>
  );
};

export default Login;
