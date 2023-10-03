import React, { useContext } from 'react'
import './Refund.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import SellerContext from '../../context/Seller/SellerContext'
const Refund = () => {
  const Seller = useContext(SellerContext);
  const {user} =Seller;
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
         {user.totalClients}
      </div>
    </div>
  )
}

export default Refund