import React from 'react'
import "./Cards.css"
import Time from '../Time/Time'
import Song from '../song/Song'
import Notes from '../Notes/Notes'
import Gopro from '../Gopro/Gopro'
import News from '../News/News'
import Profit from '../Profit/Profit'
import Allprod from '../AllProd/Allprod'
import Refund from '../Refund/Refund'
const Cards = () => {
  return (
    <div className='cardshome'>
        <div className="left1">
            <div className="top1">
                <div className="left2">
                    <Profit/>
                    <div className="bottom2">
                        <Allprod />
                        <Refund />
                    </div>
                </div>
                <News/>
            </div>
            <Gopro />
        </div>
        <div className="right1">
            <Time/>
            <Song/>
            <Notes />
        </div>
    </div>
  )
}

export default Cards