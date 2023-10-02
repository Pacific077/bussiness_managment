import React, { useState,useEffect } from 'react'
import "./Song.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faPlay,faPause } from '@fortawesome/free-solid-svg-icons'
import songbg from "../../contents/images/songimg.jpg"


const Song = () => {
  const [isplaying,setisplaying] = useState(false);
  const [song1] = useState(new Audio("/song/song.mp3"));
  const [progress,setProgeress]  = useState(0);

  // const song1 = new Audio("/song/song.mp3")
  const palysong = ()=>{
    if(isplaying){
      console.log("tryong to pause")
      song1.pause();
      setisplaying(false);
    }else{
      console.log("tryong to play")
      song1.play()
      setisplaying(true);
    }
    console.log(song1.currentTime,"crnttime");
    console.log(song1.duration)
  }
  useEffect(() => {
    const updateProgress = () => {
      const newProgress = (song1.currentTime /song1.duration) * 100;
      setProgeress(newProgress);
    };
    const intervalId = setInterval(updateProgress, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className='songscard'>
        <div className="song">
          <div className="songimg">
            <img src={songbg} alt="" />
          </div>
          <div className="songdes">
            <span className="songname">Beliver</span>
            <span className="songsinger">Dragons</span>
          </div>
        </div>
        <div className="songprogbar">
          <div className="currprog" style={{width:`${progress}%`}}>

          </div>
        </div>
        <div className="songcontrols">
        <FontAwesomeIcon className='leftarrow' icon={faCircleArrowLeft} size='xl'/>
        <div className="playbtncont">
        <FontAwesomeIcon icon={isplaying?faPause:faPlay} onClick={palysong} size='xl'/>

        </div>
        <FontAwesomeIcon  className='rightarrow' icon={faCircleArrowRight} size='xl'/>
        </div>
    </div>
  )
}

export default Song