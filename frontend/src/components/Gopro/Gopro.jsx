import React, { useContext } from 'react'
import './Gopro.css'
import SellerContext from '../../context/Seller/SellerContext'
const Gopro = () => {
  const Seller = useContext(SellerContext);
  const {user} = Seller;
  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US');
  };
  return (
    <div className='procard'>
        <div className="totalsale">
          <p className='totalsalehead'>Total Sales</p>
          <h1 className='totalsalecount'>${formatCurrency(user.totalsold)}</h1>
        </div>
        <div className="totalprofit">
          <p className='totalsalehead'>Total Profit</p>
          <h1 className='totalsalecount'>${formatCurrency(user.totalProfit)}</h1>

        </div>
        <div className="totalrefunds">
          <p className='totalsalehead'>Total Refunds</p>
          <h1 className='totalsalecount'>$4,000</h1>

        </div>
    </div>
  )
}

export default Gopro