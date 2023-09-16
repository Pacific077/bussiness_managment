import React, { useState } from 'react'
import { useEffect } from 'react';
import "./Time.css"
const Time = () => {
  const [currtime,settime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      settime(new Date());
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currtime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const formattedDate = currtime.toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className='timecard'>
        <div className="time">
        {formattedTime}
        </div>
        <div className="date">
        {formattedDate}
        </div>
    </div>
  )
}

export default Time