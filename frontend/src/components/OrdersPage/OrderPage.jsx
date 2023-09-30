import React, { useContext, useEffect, useState } from 'react'
import Mainnav from '../mainnav/Mainnav'
import './OrderPage.css'
import Nav2 from '../sec nav/Nav2'
import AddOrderForm from './AddOrderForm'
import OrderRow from './OrderRow'
import OrderContext from '../../context/orders/OrderContext'
const OrderPage = () => {
  const [isFormVisible,setIsFormVisible] = useState(false);
  const OrderCont = useContext(OrderContext);
  const {getAllOrders,orderList}= OrderCont;
  useEffect(()=>{
    console.log("calling all orders");
    getAllOrders();

  },[])
  const handleAddbtn =(e)=>{
    e.preventDefault();
    setIsFormVisible(true);
  }
  return (
    <div className='maindivhome'>
        <Mainnav/>
        <div className="orderspage">
          {
            isFormVisible&&<AddOrderForm setvisible={setIsFormVisible}/>
          }
            
            <Nav2/>
            <div className="orderbg">
                <h2>Recived new Order ?</h2>
                <button onClick={handleAddbtn}>Add</button>
            </div>
            <table className='clienttable'>
          <thead className='clienttablehead'>
            <tr>
              <th className='headcontents'>Client</th>
              <th className='headcontents'>Date</th>
              <th className='headcontents'>Products</th>
              <th className='headcontents'>Total Amount</th>
              <th className='headcontents'>Total Paid</th>
            </tr>
          </thead>
          {orderList.map((order)=>{
            return <OrderRow key={order._id} ey={order._id} prod={order.products}  name={order.ClientName} amount={order.totalAmount} paid={order.paidAmount}/>
          })}
        </table>
        </div>
    </div>
  )
}

export default OrderPage