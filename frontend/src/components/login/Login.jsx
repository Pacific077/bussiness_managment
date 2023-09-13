import React from 'react'
import { useState } from 'react'
import "./login.css"
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
  return (
    <div className='loginpage'>
  
        <div className="halfimage">

        </div>
        <div className="halfform">
            <h1>WELCOME  &nbsp;&nbsp;BACK  &nbsp;&nbsp;!!</h1>
            <form action="" method="post">
                <div className="email">

              <label htmlFor="">Email</label>
              <input type="email" placeholder='abc123@exmaple.com'/>
                </div>
                <div className="pass">

              <label htmlFor="">Password</label>
              <input type={showPassword ? 'text' : 'password'} placeholder='password'/>
              
                </div>
                
              <button className='loformbtn' type="submit">Login</button>
            </form>
            <button
              className="toggle-password"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? '🔒' : '👁️'}
            </button>
        </div>
    </div>
  )
}

export default Login