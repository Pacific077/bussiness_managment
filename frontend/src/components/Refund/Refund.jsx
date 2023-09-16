import React from 'react'
import './Refund.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
const Refund = () => {
  return (
    <div className='client'>
        <div className="iconn1">
        <div className="iconcont">
        <FontAwesomeIcon className='icon' icon={faUsers} size="2xl"  />
        </div>
      </div>
      <div className="icondes">
        Clients
      </div>
      <div className="iconquant">
        33
      </div>
    </div>
  )
}

export default Refund