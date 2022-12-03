
import { useState } from "react";
import React  from "react";



export default function ObjectInUseState() {
  
   const [state, setState] = React.useState({
      count:0,
      theme:"blue"
   });  // useState can take an object as an argument and return an array with 2 values , the first value is the object and the second value is a function that updates the object

   const theme= state.theme;
    const count = state.count;

     



   function increment () {
    setState((prevState)=>{ //prevState is the previous value of count , it is a function that takes the previous value of count as an argument and returns the new value of count
      return {
        ...prevState,              // here ...prevState is a spread operator that copies the previous value of the state object
        count:prevState.count +1   // count:prevState.count +1 is a property that updates the count property of the state object
      }
    });
   }

   function reset () {
    setState ((prevState)=>{
        return {
        ...prevState,
          count:0
      }
    });
   }

    function decrement () {  
     state.count !== 0 && setState((prevState)=>{  // when count is 0 , the decrement button is disabled
        //  prevState is the previous value of count , it is a function that takes the previous value of count as an argument and returns the new value of count
            return {
                ...prevState,
                count:prevState.count -1
            }
        });

        }
  return (
    <>
    <div className="App">
      <h1 style={{fontSize:count+10}}>{count}</h1>
      <div className="center">{theme}</div>
      <button onClick={increment} className="btn">++</button>

      <button onClick={reset} //reset button
       className="btn">Reset</button>

      <button onClick={decrement} //decrement button , count !== 0 is a condition to prevent the count from going below 0
       className="btn">--</button>
      </div>
      
     </>
  );
}


