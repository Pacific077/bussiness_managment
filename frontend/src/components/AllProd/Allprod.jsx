import React from 'react'
import './Allprod.css'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
const Allprod = () => {
  return (
    <div className='allprodcard'>
      <div className="iconn1">
        <div className="iconcont">
        <FontAwesomeIcon className='icon' icon={faClipboardCheck} size="2xl"  />
        </div>
      </div>
      <div className="icondes">
        Total Orders
      </div>
      <div className="iconquant">
        4234
      </div>
    </div>
  )
}

export default Allprod