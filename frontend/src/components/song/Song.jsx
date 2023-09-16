import React from 'react'
import "./Song.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import songbg from "../../contents/images/songimg.jpg"
const Song = () => {
  return (
    <div className='songscard'>
        <div className="song">
          <div className="songimg">
            <img src={songbg} alt="" />
          </div>
          <div className="songdes">
            <span className="songname">Beliver</span>
            <span className="songsinger">Sudahnshu</span>
          </div>
        </div>
        <div className="songprogbar">

        </div>
        <div className="songcontrols">
        <FontAwesomeIcon className='leftarrow' icon={faCircleArrowLeft} size='xl'/>
        <div className="playbtncont">
        <FontAwesomeIcon icon={faPlay} size='xl'/>

        </div>
        <FontAwesomeIcon  className='rightarrow' icon={faCircleArrowRight} size='xl'/>
        </div>
    </div>
  )
}

export default Song