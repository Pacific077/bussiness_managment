import React from 'react';

const OrderRow = (props) => {
  // Take only the first two items from the props.prod array
  const displayedProducts = props.prod.slice(0, 2);

  return (
    <tr className='orderTableRow'>
      <td className='tabledataorder'>{props.name}</td>
      <td className='tabledataorder'>hi</td>
      <td className='tabledataorder'>
        <ul>
          {displayedProducts.map((product, index) => (
            <li key={index}>{product.prodname}x{product.quantity}</li>
          ))}
          {props.prod.length > 2 && (
            <li style={{color:'blue'}}>... and more</li>
          )}
        </ul>
      </td>
      <td className='tabledataorder'>{props.amount}</td>
      <td className='tabledataorder'>{props.paid}</td>
    </tr>
  );
};

export default OrderRow;
