import React from 'react'

import PymentListCard from './PymentListCard'
const PaymentList = () => {
  return (
    <div className="latestPayments">
      <div className="paymentheadcont">

        <h1 className='paymentlistHead'>Hello X!!</h1>
      </div>
        <div className="PymentListConthead">
            <p>
                Transaction history
            </p>
            <p className='dots'>
                ...
            </p>
        </div>
      <PymentListCard/>
      <PymentListCard/>
      <PymentListCard/>
      <PymentListCard/>
        
    </div>
  )
}

export default PaymentList