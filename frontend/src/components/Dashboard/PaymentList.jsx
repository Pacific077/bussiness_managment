import React from 'react'
import dp from "../../contents/images/dp.jpg"
import PymentListCard from './PymentListCard'
const PaymentList = () => {
  return (
    <div className="latestPayments">
        <h1 className='paymentlistHead'>Hello X!!</h1>
        <div className="PymentListConthead">
            <p>
                Transaction history
            </p>
            <p className='dots'>
                ...
            </p>
        </div>
      <PymentListCard/>
        
    </div>
  )
}

export default PaymentList