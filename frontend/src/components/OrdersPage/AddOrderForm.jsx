import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import OrderItem from "./OrderItem";
const AddOrderForm = () => {
  const [items, setItems] = useState([{ ProdId: 0, ProdAmount:0 }]);
  const [totalAmount, setTotalamount] = useState(0);

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
  return (
    <form action="" id="prodform">
      <div className="addProdFormicon">
        <FontAwesomeIcon className="addformicon" icon={faX} />
      </div>
      <h1 className="orderhead">Add Order ?</h1>
      <div className="orderformlistCont">
        <form action="">
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
        </form>
      </div>
    </form>
  );
};

export default AddOrderForm;
