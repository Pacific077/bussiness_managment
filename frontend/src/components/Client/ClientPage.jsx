import React, { useContext, useEffect, useState } from 'react'
import Mainnav from '../mainnav/Mainnav';
import Nav2 from '../sec nav/Nav2';
import "./ClientPage.css"
import ClientRow from './ClientRow';
import AddClientForm from './AddClientForm';
import SellerContext from '../../context/Seller/SellerContext';

const ClientPage = () => {
  const [ClinetAddVis, setcietnaddvis] = useState(false);
  const SellerCont = useContext(SellerContext);
  const { clientsList, getAllClinets } = SellerCont;
  useEffect(() => {
    getAllClinets();
    console.log(clientsList);
  }, [])
  const handleClientAddbtn = () => {
    setcietnaddvis(true);
  }
  return (
    <div className='maindivhome'>
      <Mainnav />
      <div className="clientPage">
        {
          ClinetAddVis &&
          <AddClientForm setvis={setcietnaddvis} />
        }

        <Nav2 />
        <div className="clientBn">
          <h2 className='clientbanhad'>Want to add more Clients ??</h2>
          <button onClick={handleClientAddbtn} className='clientbanbtn'>Add</button>
        </div>
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
          {clientsList.map((clinet) => {
            return <ClientRow name={clinet.name} phone={clinet.PhoneNo} address={clinet.address} amount={clinet.amount} dues={clinet.dues} />
          })}
        </table>
      </div>
    </div>
  )
}

export default ClientPage;