import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import OrderItem from "./OrderItem";
import ClientOption from "./ClientOption.jsx"
import SellerContext from "../../context/Seller/SellerContext";
import OrderContext from "../../context/orders/OrderContext";
const AddOrderForm = (props) => {
  const [items, setItems] = useState([{ ProdId: 0, ProdAmount:0 }]);
  const [paid,setpaid]=useState(0);
  const ordercont = useContext(OrderContext);
  const [totalAmount, setTotalamount] = useState(0);
  const [clientid,setclientid]=useState(0);
  const clientCnt = useContext(SellerContext);
  const {getAllClinets,clientsList}=clientCnt;
  const{CreateOrder}=ordercont;
  useEffect( ()=>{
    getAllClinets()
  },[])
  useEffect(() => {
  // console.log("items",items)
  const newTotalAmount = items.reduce((total, item) => total + item.ProdAmount, 0);
  setTotalamount(newTotalAmount);

  },[items]);
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { ProdId:0, ProdAmount: 0 }]);
  };
  const deleteitem = (e) => {
    e.preventDefault();
    const updatedItems = [...items];
    if (items.length > 1) {
      updatedItems.pop();
      setItems(updatedItems);
    } else {
      setItems(updatedItems);
    }
  };
  const {setvisible} =props;
  const handlecrossClick= (e)=>{
    e.preventDefault();
    setvisible(false);
  }
  const handleAddbtn =(e)=>{
    e.preventDefault();
  const temp = {
    clientId :clientid,
    items:items,
    paid:paid,
    totalAmount:totalAmount
  }
  CreateOrder(temp);
  setvisible(false);
  }
  const handleoptionchange = (e)=>{
    setclientid(e.target.value);
  }
  const handlepaidchange =(e)=>{
    setpaid(e.target.value);
    console.log(paid);
  }
  return (
    <form action="" id="prodform">
      <div className="addProdFormicon">
        <FontAwesomeIcon className="addformicon" onClick={handlecrossClick} icon={faX} />
      </div>
      <h1 className="orderhead">Add Order ?</h1>
      <div className="orderformlistCont">
        <form action="">
          <div className="selectClientlist">
            <label htmlFor="">Select Client</label>
            <select name="client" id="" onChange={handleoptionchange}>
            <option value={0}>---------</option>
              {clientsList.map((client)=>{
                return <ClientOption name={client.name} key={client._id} ey={client._id}  />
              })}
            </select>
          </div>
          {items.map((item, index) => {
            return <OrderItem key={index} item={item} items={items} setAmnt={setTotalamount}/>;
          })}
          <div className="additem">
            <button onClick={addItem} className="additembtn">
              <FontAwesomeIcon
                icon={faPlus}
                size="xl"
                style={{ color: "#bc27be" }}
              />
            </button>
            <button onClick={deleteitem} className="deleteItembtn">
              <FontAwesomeIcon icon={faTrash} size="xl" />
            </button>
          </div>
          <div className="totalamount">
            <span className="totatext">Total</span>

            <span className="totaleqsign">=</span>
            <span className="totalAmount">{totalAmount}</span>
          </div>
          <div className="paidamnt">
            <h2>Paid Amount</h2>
            <input type="number" value={paid} onChange={handlepaidchange}/>
          </div>
          <div className="orderbtns">
            <button className="addorderbtn" onClick={handleAddbtn}>Add</button>
            <button className="cancelorderbtn" onClick={handlecrossClick}>Cancel</button>
          </div>
        </form>
      </div>
    </form>
  );
};

export default AddOrderForm;
