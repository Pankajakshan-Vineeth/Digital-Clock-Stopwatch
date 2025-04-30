import React, { useEffect, useRef, useState } from "react";
import "./Clock.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Clock logic

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Stopwatch logic

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  const timeFormat = () => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="page-wrapper">
      <div className="clock-container">
        <h1>{currentTime}</h1>
      </div>
      <div className="clock-container1">
        <h2>{timeFormat()}</h2>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => {setTime(0);setRunning(false);}}>Reset</button>
      </div>
    </div>
  );
};

export default Clock;
