import React from 'react'
import dp from "../../contents/images/dp.jpg"
const PymentListCard = () => {
  return (
    <div className="transCard">
    <div className="pymnting">
    <img src={dp} alt="" />
    </div>
    <div className="namedatetrans">
        <p>name</p>
        <p className='paymentdate'>12/1/12</p>
    </div>
    <p className="amnt">1221</p>
</div>
  )
}

export default PymentListCard