import React from 'react'
import {Link} from "react-router-dom"
import "./News.css"
import graph from "../../contents/images/graph.png"
import dp from "../../contents/images/dp.jpg"

const News = () => {

  return (
    <div className='newscard'>
        <div className="needmore">
          <div className="needmoredesc">
            <h3>Need More Stats?</h3>
            <h5>Upgrade to pro for additional Benefits</h5>
            <button>Go Pro now</button>
          </div>
          <div className="needmoreimg">
            <img src={graph} alt="" />
          </div>
        </div>
        <div className="popularprod">
          <div className="popularprohead">
            <h4>Popular Products</h4>
            <p className='goprosubhead'>Items</p>
          </div>
          <div className="popularprohead2">
            <Link className='noline'> View All</Link>
            <p className='goprosubhead'>Sold</p>
          </div>

        </div>
        <div className="proditemslist">
          <div className="popularporductitems">
            <div className="popularproductimage">
              <img src={dp} alt="" />
            </div>
            <div className="popularproductname">
              <h4>Apple iphone 17 pro super max</h4>
            </div>
            <div className="popularproductquant">
              <h4>400+</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default News