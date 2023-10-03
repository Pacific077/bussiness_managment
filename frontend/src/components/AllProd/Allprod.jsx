import React, { useContext } from 'react'
import './Allprod.css'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import SellerContext from '../../context/Seller/SellerContext'
const Allprod = () => {
  const Seler = useContext(SellerContext);
  const {user} = Seler;
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
        {user.totalOrder}
      </div>
    </div>
  )
}

export default Allprod