import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);
  const handlecounter = (value)=>{
    setCounter(counter+value)
  }
  return (
    <div className='App'>
      <h1 id='prop' className={counter%2==0 ? "greencolor" : "redcolor"}>{counter}</h1>
      <button onClick={()=> handlecounter(1)}>Addition</button>
      <button onClick={()=> handlecounter(-1)}>Subtraction</button>
      <button onClick={()=>{
        setCounter(counter*2)
      }}>Double</button>
    </div>
  );
}

export default App;
