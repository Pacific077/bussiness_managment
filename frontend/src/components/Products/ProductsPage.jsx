import React, { useContext, useEffect } from "react";
import Mainnav from "../mainnav/Mainnav";
import Nav2 from "../sec nav/Nav2";
import bannerbg from "../../contents/images/bannerbg2.png";

import "./products.css";
import "../Home/Home.css";
import ProduCard from "./ProduCard";
import ProductContext from "../../context/Products/ProductsContext";
const ProductsPage = () => {
  const Products = useContext(ProductContext);
  const { getAllprod, prodarr } = Products;
  useEffect(() => {
    console.log("get all products");
    getAllprod();
  }, []);
  return (
    <div className="maindivhome">
      <Mainnav />
      <div className="productpage">
        <Nav2 />
        <div className="productbanner">
          <div className="bannerslogan">
            <h1>Launched New Product ??</h1>
            <h2>Add To Your List !!</h2>
            <button className="addprodbtn">Add Now</button>
          </div>
          <div className="bannerimg">
            <img src={bannerbg} alt="" srcset="" className="prodpageimg" />
          </div>
        </div>
        <div className="pordlisthead">
          <h1>All Products</h1>
        </div>
        <div className="productlistcont">
          {prodarr.map((prod) => {
            return (
              <ProduCard
                prodname={prod.name}
                Stock={prod.Stock}
                key={prod._id}
                ey={prod._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
