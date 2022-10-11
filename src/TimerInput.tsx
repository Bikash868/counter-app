import React,{useEffect,useState} from 'react'
import useStore from './Store'

const TimerInput = () => {


const setMinute = useStore((state:any) => state.setMinute);
const setSecond = useStore((state:any) => state.setSecond);
const setCounter = useStore((state:any) => state.setCounter);


const minute = useStore((state:any) => state.minute)
const second = useStore((state:any) => state.second)


  const handleMinute = (e:any) => {
    console.log("Minute:",e.target.value)
    setMinute(String(e.target.value));
    let m = parseInt(e.target.value)*60+parseInt(second);
    setCounter(m);
  }

  const handleSecond = (e:any) => {
    console.log("Second:",e.target.value)
    setSecond(String(e.target.value)); 
    let m = parseInt(minute)*60+parseInt(e.target.value);
    console.log("parseInt(second):",parseInt(second))
    setCounter(m);
  }

  return (
    <div style={{padding:'5px'}}>
        <label >Minutes:</label>
        <input type="text" placeholder="03" onChange={handleMinute}/>
        <label >Second:</label>
        <input type="text" placeholder="00" onChange={handleSecond}/>
      </div>
  )
}

export default TimerInput