
import { useState } from "react";
import React  from "react";



export default function SeperateUseState() {
  
   const [count, setCount] = React.useState(()=> 0); // for fast computation use function to set state value , this function will only be called once when the component is rendered for the first time
   
   const [theme, setTheme] = React.useState("green");


    function increment () {
      setCount((prevCount)=>{ //prevCount is the previous value of count , it is a function that takes the previous value of count as an argument and returns the new value of count))
        return prevCount + 1;
        });

        setTheme((prevTheme)=>{
            return prevTheme = "blue";
        });
    }



  return (
    <>
    <div className="App">
      <h1 style={{fontSize:count+10}}>{count}</h1>
        <div className="center">{theme}</div>
      
      <button onClick={increment} className="btn">++</button>

      <button onClick={()=>setCount((prevCount)=> prevCount = 0 )} //reset button
       className="btn">Reset</button>

      <button onClick={()=> count !== 0 && setCount((prevCount)=> prevCount-1 )} //decrement button , count !== 0 is a condition to prevent the count from going below 0
       className="btn">--</button>
      </div>
      
     </>
  );
}

