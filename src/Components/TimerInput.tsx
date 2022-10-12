import React from 'react'
import useStore from '../Store'

const TimerInput = () => {


const setMinute = useStore((state:any) => state.setMinute);
const setSecond = useStore((state:any) => state.setSecond);
const setCounter = useStore((state:any) => state.setCounter);


const minute = useStore((state:any) => state.minute)
const second = useStore((state:any) => state.second)


  const handleMinute = (e:any) => {
    setMinute(String(e.target.value));
    let m = parseInt(e.target.value)*60+parseInt(second);
    setCounter(m);
  }

  const handleSecond = (e:any) => {
    setSecond(String(e.target.value)); 
    let m = parseInt(minute)*60+parseInt(e.target.value);
    setCounter(m);
  }

  return (
    <div>
        <label >Minutes:</label>
        <input type="text" placeholder="03" onChange={handleMinute}/>
        <label style={{marginLeft:'10px'}}>Second:</label>
        <input type="text" placeholder="00" onChange={handleSecond}/>
      </div>
  )
}

export default TimerInput