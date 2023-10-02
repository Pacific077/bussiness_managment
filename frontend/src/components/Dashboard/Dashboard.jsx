import React from 'react'
import Mainnav from '../mainnav/Mainnav'
import "./dashboard.css"
import Nav2 from '../sec nav/Nav2'
import Time from '../Time/Time'
import Song from '../song/Song'
import ProductsBarchart from './ProductsBarchart'
import PaymentList from './PaymentList'

const Dashboard = () => {
  return (
    <div className='maindivhome'>
      <Mainnav/>
      <div className="dashpage">
        <Nav2/>
        <div className="dashContents">
          <div className="dashleft">
            <div className="dashlefttop">

            <div className="dashcardtop duescard">
              <h1 className='smallfont'>Total dues</h1>
              <h1 className='smallfont'>$40000</h1>
            </div>
            <div className="dashcardtop duescard">
              <h1 className='smallfont'>Total dues</h1>
              <h1 className='smallfont'>$40000</h1>
            </div>
            <div className="dashcardtop duescard">
              <h1 className='smallfont'>Total dues</h1>
              <h1 className='smallfont'>$40000</h1>
            </div>
            </div>
            <h1 className='dashtotalprofit'>Products Sold</h1>
             <ProductsBarchart/>
          </div>
          <div className="dashright">
            <Time/>
            <Song/>
            <PaymentList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard