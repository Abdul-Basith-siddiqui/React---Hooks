
import { useState } from "react";
import React  from "react";

function initialValue (){
    return 0;
}

function PascalCase() {
  
   const [count, setCount] = React.useState(()=> 0); // for fast computation use function to set state value , this function will only be called once when the component is rendered for the first time
   
   const [count1, setCount1] = React.useState(()=> {
    return 0;
   });

    const [count2, setCount2] = React.useState(()=> initialValue()); //function calling another function which returns value to state variable


   function increment () {
    setCount((prevCount)=>{ //prevCount is the previous value of count , it is a function that takes the previous value of count as an argument and returns the new value of count
      return prevCount + 1;
    });
   }
  return (
    <>
    <div className="App">
      <h1 style={{fontSize:count+10}}>{count}</h1>
      
      <button onClick={increment} className="btn">++</button>
      <button onClick={()=>setCount((prevCount)=> prevCount = 0 )} //reset button
       className="btn">Reset</button>
      <button onClick={()=> count !== 0 && setCount((prevCount)=> prevCount-1 )} //decrement button , count !== 0 is a condition to prevent the count from going below 0
       className="btn">--</button>
      </div>
      
     </>
  );
}

export default PascalCase;
