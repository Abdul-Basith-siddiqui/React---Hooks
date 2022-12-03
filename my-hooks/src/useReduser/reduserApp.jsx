
import { useState } from "react";
import React  from "react";



export default function ReduserApp() {
  
   const [state, setState] = useState();
     

   function increment () {
    setState((prevState)=>{
        return (
            prevState + 1
        );
    });
   }

   function reset () {
    setState ((prevState)=>{
        return prevState = 0;
    });
   }

    function decrement () {  
     state !== 0 && setState((prevState)=>{  // when count is 0 , the decrement button is disabled
        //  prevState is the previous value of count , it is a function that takes the previous value of count as an argument and returns the new value of count
            return prevState - 1;
        });

        }
  return (
    <>
    <div className="App">
      <h1 style={{display:"block"}} >{state}</h1>
      <button onClick={increment} className="btn">++</button>

      <button onClick={reset} //reset button
       className="btn">Reset</button>

      <button onClick={decrement} //decrement button , count !== 0 is a condition to prevent the count from going below 0
       className="btn">--</button>
      </div>
      
     </>
  );
}


