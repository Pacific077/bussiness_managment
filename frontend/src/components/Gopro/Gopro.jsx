import React from 'react'
import './Gopro.css'
const Gopro = () => {
  return (
    <div className='procard'>
        <div className="totalsale">
          <p className='totalsalehead'>Total Sales</p>
          <h1 className='totalsalecount'>$124,000</h1>
        </div>
        <div className="totalprofit">
          <p className='totalsalehead'>Total Profit</p>
          <h1 className='totalsalecount'>$54,000</h1>

        </div>
        <div className="totalrefunds">
          <p className='totalsalehead'>Total Refunds</p>
          <h1 className='totalsalecount'>$4,000</h1>

        </div>
    </div>
  )
}

export default Gopro