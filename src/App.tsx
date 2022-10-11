import React,{useState} from 'react';
import './App.css';
import Counter from './Counter'
import TimerInput from './TimerInput';
import useStore from './Store'

function App() {
  const minute = useStore((state:any) => state.minute)
  const second = useStore((state:any) => state.second)
  const counter = useStore((state:any) => state.counter)

  return (
    <div className="App" style={{display:'flex',flexDirection:'column'}}>
      <TimerInput/>
      <Counter
        minute = {minute}
        second = {second}
        counter = {counter}
      />
    </div>
  );
}

export default App;
