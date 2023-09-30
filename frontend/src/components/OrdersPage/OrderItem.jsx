import React, { useContext, useEffect, useState } from "react";

import ProductContext from "../../context/Products/ProductsContext";
import OrderOption from "./OrderOption";
const OrderItem = (props) => {
  const Products = useContext(ProductContext);
  const [quant, setquant] = useState(0);
  const [price, setPrice] = useState(0);
  const { getAllprod, prodarr, GetProductPrice } = Products;
  const { item, items, setAmnt } = props;

  useEffect(() => {
    // console.log("get all products");
    getAllprod();
  }, []);
  const handleOptonChange = async (e) => {
    item.ProdId = e.target.value;
    const result = await GetProductPrice(e.target.value);
    item.ProdAmount = result.price * quant;
    // console.log(item);
    setPrice(result.price);
    const newTotalAmount = items.reduce(
      (total, item) => total + item.ProdAmount,
      0
    );
    setAmnt(newTotalAmount);
  };
  const handleQuantChage = (e) => {
    setquant(e.target.value);
    item.ProdAmount = price * e.target.value;
    const newTotalAmount = items.reduce(
      (total, item) => total + item.ProdAmount,
      0
    );
    setAmnt(newTotalAmount);
    // console.log(item);
  };
  return (
    <div className="billItem">
      <select
        name="Product"
        id="product"
        onChange={handleOptonChange}
        className="prodName"
      >
        <option value={0}>---------</option>
        {prodarr.map((prod) => {
          return <OrderOption name={prod.name} key={prod._id} ey={prod._id} />;
        })}
      </select>
      <span className="multi">X</span>
      <input
        type="number"
        className="prodNumber"
        onChange={handleQuantChage}
        value={quant}
      />
      <span className="eqlsign">=</span>
      <span className="eql">{price * quant}</span>
    </div>
  );
};

export default OrderItem;
