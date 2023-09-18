import React from 'react'
import Mainnav from '../mainnav/Mainnav'
import Nav2 from '../sec nav/Nav2'
import bannerbg from "../../contents/images/bannerbg2.png"
import img from "../../contents/images/songimg.jpg"
import "./products.css"
import "../Home/Home.css"
const ProductsPage = () => {
  return (
    <div className='maindivhome'>
      <Mainnav/>
      <div className='productpage'>
        <Nav2/>
        <div className="productbanner">
          <div className="bannerslogan">
            <h1>Launched New Product ??</h1>
            <h2>Add To Your List !!</h2>
            <button className='addprodbtn'>Add Now</button>
          </div>
          <div className="bannerimg">
            <img src={bannerbg} alt="" srcset="" className='prodpageimg'/>
          </div>
        </div>
          <div className="pordlisthead">
            <h1>All Products</h1>
          </div>
        <div className="productlistcont">
          <div className="prodcard">
            <div className="prodcardimgcont">
              <img className="prodcardimg" src={img} alt="" srcset="" />
            </div>
            <div className="prodcarddesc">
              <p>Name : Iphone galaxy linux</p>
              <p>Price : $4000</p>
              <p>Stock :909</p>
              <button>Veiw more</button>
            </div>
          </div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
          <div className="prodcard"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage