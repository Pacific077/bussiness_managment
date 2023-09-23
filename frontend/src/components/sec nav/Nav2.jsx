import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell, faGear, faMessage, } from '@fortawesome/free-solid-svg-icons'
import "./nav2.css"
const Nav2 = () => {
  return (
    <div className="homenav2">
      <h3 className='nav2head'>Virtual Manager</h3>
    <div className="nav2iconscont">
    <FontAwesomeIcon className='navtwoicons' icon={faBell} size='xl' color='white' />
    <FontAwesomeIcon className='navtwoicons' icon={faGear} size='xl' color='white' />
    <FontAwesomeIcon className='navtwoicons' icon={faMessage} size='xl' color='white' />
    <FontAwesomeIcon className='navtwoicons' icon={faArrowRightFromBracket} size='xl' color='white' />
    </div>
    </div>
  )
}

export default Nav2