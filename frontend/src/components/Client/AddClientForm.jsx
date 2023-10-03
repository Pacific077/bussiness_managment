import React,{useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import SellerContext from '../../context/Seller/SellerContext'
const AddClientForm = (props) => {
    const [name,setname] = useState("")
    const [phone,setphone] = useState("")
    const [address,setaddress] = useState("")
    const Seller= useContext(SellerContext);
    const {AddClinet} =Seller;
    const {setvis}= props;
    const handleiconclick = ()=>{
        setvis(false);
    }
    const handleNameChange = (e)=>{
        setname(e.target.value);
        console.log(name)
    }
    const handlePhoneChange = (e)=>{
        setphone(e.target.value);
        console.log(phone)
    }
    const handleAddressChange = (e)=>{
        setaddress(e.target.value);
        console.log(address)
    }
    const handleCLientSubmit =(e)=>{
      e.preventDefault();
      const temp = {
        name:name,
        phone:phone,
        address:address
      }
      AddClinet(temp);
      setvis(false);
    }
  return (
    <form action="" id='addClient' onSubmit={handleCLientSubmit}>
        <div className="addProdFormicon">
        <FontAwesomeIcon onClick={handleiconclick} className='addformicon' icon={faX} />
        </div>
        <h1 className='addClientHead'>Add Client</h1>
        <div className="addclinetscont">
        <div className="addclintform">
        <label htmlFor="">Name</label>
        <input type="text" onChange={handleNameChange} value={name} />
        <label htmlFor="" >Phone No.</label>
        <input type="Number" onChange={handlePhoneChange} value={phone} />
        <label htmlFor="">Address</label>
        <textarea onChange={handleAddressChange} value={address} name="" id="" cols="20" rows="10">

        </textarea>

      </div>
      <div className="addclientimg">
      </div>
      </div>
      <button className='addclientsutbmit' type="submit">Add</button>
      <button className='addclientcancel' onClick={handleiconclick}>Cancel</button>
    </form>
  )
}

export default AddClientForm