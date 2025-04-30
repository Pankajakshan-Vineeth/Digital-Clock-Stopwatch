import React, { useState } from 'react'
import './Clock.css'

const Clock = () => {

    let getTime = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(getTime);

    let runningTime = ()=>{
        getTime = new Date().toLocaleTimeString();
        setCurrentTime(getTime);
    }

    setInterval(runningTime,1000)
   

  return (
<div className="page-wrapper">
  <div className="clock-container">
    <h1>{currentTime}</h1>
  </div>
</div>
  )
}

export default Clock
