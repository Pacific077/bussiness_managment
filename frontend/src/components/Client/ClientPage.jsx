import React from 'react'
import Mainnav from '../mainnav/Mainnav';
import Nav2 from '../sec nav/Nav2';
import "./ClientPage.css"
import ClientRow from './ClientRow';

const ClientPage = () => {
  return (
    <div className='maindivhome'>
        <Mainnav/>
        <div className="clientPage">
            <Nav2/>
            <table className='clienttable'>
              <thead className='clienttablehead'>
                <tr>
                  <th className='headcontents'>Name</th>
                  <th className='headcontents'>Phone</th>
                  <th className='headcontents'>Address</th>
                  <th className='headcontents'>Total Amount</th>
                  <th className='headcontents'>Total Dues</th>
                </tr>
              </thead>
               <ClientRow/>
               <ClientRow/>
               <ClientRow/>
               <ClientRow/>
            </table>
        </div>
    </div>
  )
}

export default ClientPage;