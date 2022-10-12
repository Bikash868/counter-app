import React, { useState, useEffect } from "react";
import "./Counter.css";

type CounterProps = {
    minute:string,
    second:string
    counter:number
}

const Counter = (props:CounterProps) => {

  console.log("props:",props)
  const [second, setSecond] = useState(props.second);
  const [minute, setMinute] = useState(props.minute);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    setMinute(props.minute);
    setSecond(props.second);
    setCounter(props.counter);
  },[])


  useEffect(()=>{
    setMinute(props.minute);
    setSecond(props.second);
    setCounter(props.counter);
  },[props])



  useEffect(() => {
    let intervalId:any;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : `${secondCounter}`;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : `${minuteCounter}`;

        console.log("_computedSecond:",computedMinute,computedSecond,counter)
        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((x) => x - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function resetTimer() {
    setMinute(props.minute);
    setSecond(props.second);
    setCounter(props.counter);
    setIsActive(false);
  }
  
  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => setIsActive(true)} className="start">
          Start
        </button>
        <button onClick={() => setIsActive(false)} className="start">
          Pause
        </button>
        <button onClick={() => setIsActive(true)} className="start">
          Continue
        </button>
        <button onClick={resetTimer} className="reset">
          Reset
        </button>
        <div className="time">
            <span className="minute">{minute}</span>
            <span>:</span>
            <span className="second">{second}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Counter);
