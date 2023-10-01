import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell, faGear, faMessage, } from '@fortawesome/free-solid-svg-icons'
import "./nav2.css"
import { useNavigate } from 'react-router-dom'
const Nav2 = () => {
  const navigate = useNavigate();
  const handleNotification = ()=>{
    navigate("/maint")
  }
  const handleSttings = ()=>{
    navigate("/maint")
  }
  const handleMessage = ()=>{
    navigate("/maint")
  }
  const handleLogout = ()=>{
    navigate("/maint")
  }
  return (
    <div className="homenav2">
      <h3 className='nav2head'>Virtual Manager</h3>
    <div className="nav2iconscont">
    <FontAwesomeIcon className='navtwoicons' onClick={handleNotification} icon={faBell} size='xl' color='white' />
    <FontAwesomeIcon className='navtwoicons' onClick={handleSttings} icon={faGear} size='xl' color='white' />
    <FontAwesomeIcon className='navtwoicons' onClick={handleMessage} icon={faMessage} size='xl' color='white' />
    <FontAwesomeIcon className='navtwoicons' onClick={handleLogout} icon={faArrowRightFromBracket} size='xl' color='white' />
    </div>
    </div>
  )
}

export default Nav2