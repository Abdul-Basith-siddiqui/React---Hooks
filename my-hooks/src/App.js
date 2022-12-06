import { useState } from "react";
import React from "react";
import PascalCase from "./fastComputation";
import ObjectInUseState from "./objectInUseState";
import SeperateUseState from "./seperateUseState";
//useEffect
import Eapp from "./useEffect/eApp";
import WindowWidth from "./useEffect/windowWidth";
//useMemo
import Mapp from "./useMemo/Mapp";
//useRef
import Rapp from "./useRef/rApp";
import DomRef from "./useRef/domRef";
import PrevStateValue from "./useRef/prevStateValue";
//useContext
import ContextHook from "./useContext/contextApp";
//useReducer
import ReduserApp from "./useReduser/reduserApp";
import TodoListReduser from "./useReduser/todoListReduser";

//callBack
import CallBackapp from "./useCallBack/callBackApp";

//customHook
import CustomHook from "./customHook/customHook";

function App() {
  // React hooks cannot be put inside the conditional statements ,loops or nested functions
  const [count, setCount] = React.useState(0); // useState is a hook (function) //destructuring the array returned by useState into 2 variables , count and setCount
  //useState is a hook that allows you to have state variables in functional components , it returns an array with 2 values .
  // the first value is the current state and the second value is a function that updates the state

  function increment() {
    setCount((prevCount) => {
      //prevCount is the previous value of count , it is a function that takes the previous value of count as an argument and returns the new value of count
      return prevCount + 1;
    });
  }
  return (
    <>
      {/* <div className="App useState">
    
      <h1 style={{fontSize:count+10}}>{count}</h1>
      
      <button onClick={increment} className="btn">++</button>
      <button onClick={()=>setCount((prevCount)=> prevCount = 0 )} //reset button
       className="btn">Reset</button>
      <button onClick={()=> count !== 0 && setCount((prevCount)=> prevCount-1 )} //decrement button , count !== 0 is a condition to prevent the count from going below 0
       className="btn">--</button>
      </div>
      <PascalCase />
      <ObjectInUseState />
      <SeperateUseState /> */}

      {/* <div className="useEffect">
      <Eapp />
      <WindowWidth />
      </div> */}

      {/* <div className="useMemo" style={{textAlign:"center"}}>
      <Mapp />
      </div> */}

      <div className="useRef">
        {/* <Rapp /> */}
        {/* <DomRef /> */}
        {/* <PrevStateValue /> */}
      </div>

      <div className="useContext">{/* <ContextHook /> */}</div>

      <div className="useReduser">
        {/* <ReduserApp /> */}
        {/* <TodoListReduser /> */}
      </div>

      <div className="useCallback">{/* <CallBackapp /> */}</div>

      <div className="customHook">
        <CustomHook />
      </div>
    </>
  );
}

export default App;

// <button onClick={()=> count !== 0 && setCount(count-1)} // dont use state variable as a argument instead use a function that takes the previous value of the state variable as an argument and returns the new value of the state variable
