import { useState } from "react";
import "./styles.css";

export default function App() {
 const [count,setCounter] = useState(0);
  return (
    <div className="App">
      
      <h1>Counter :</h1><h1 className={`${count % 2 === 0 ? "red" : "green"}`}> {count}</h1>
    <button onClick={() =>{
      setCounter(count+1);
    }}>ADD</button>
      <button onClick={() =>{
        if(count <= 0){
          return;
        }
      setCounter(count-1);
    }}>DECRE</button>
     <button onClick={() =>{
        
      setCounter(count * 2);
    }}>DOUBLE</button>

    <h3 className={`${count % 2 === 0 ? "EVEN" : "ODD"}`}>number is {count % 2 === 0 ? "EVEN" : "ODD"}</h3>
    </div>
  );
}
