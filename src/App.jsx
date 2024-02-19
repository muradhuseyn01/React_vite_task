import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalcultation] = useState(0);
  function countChange() {
    setCount(count + 1);
  }
  function calcChange() {
    setCalcultation((x) => x + count);
  }
  return ( 
    <div className='container'>
      <h1 className='title'>Count Task..</h1>

      <div className='cont__up'>
        <button className='cont__up-btn' onClick={() => setCount((c) => c - 1)}>-</button>
        <span className='cont-min'>{count}</span>
        <button className='cont__up-btn' onClick={() => countChange()}>+</button> 
      </div>

      <div className='cont__down'>
        <button className='cont__down-btn' onClick={() => setCalcultation((x) => x - count)}>-</button>
        <span className='cont-max'>{calculation}</span>
        <button className='cont__down-btn' onClick={calcChange}>+</button>
      </div> 
      <p>{calculation} days after from 2024..</p>
    </div>
  )
}
export default App

