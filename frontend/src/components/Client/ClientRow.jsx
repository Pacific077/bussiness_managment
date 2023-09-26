import React from 'react'

const ClientRow = (props) => {
  return (
    <tr className='clientTableRow'>
    <td className='tabledataclient'>{props.name}</td>
    <td className='tabledataclient'>{props.phone}</td>
    <td className='tabledataclient'>{props.address}</td>
    <td className='tabledataclient'>{props.amount}</td>
    <td className='tabledataclient'>{props.dues}</td>
  </tr>
  )
}

export default ClientRow