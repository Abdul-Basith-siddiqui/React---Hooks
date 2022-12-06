import { useState, useReducer } from "react";
import React from "react";

const ACTIONS = {
  //GLOABAL obj  ACTIONS is an object that contains the values where we are going to use in dispatch funtion and the switch statement
  INCREMENT: "increment",
  DECREMENT: "decrement",
  ZERO: "zero",
};

function render(state, action) {
  //render is a function that takes state and action as arguments and returns the new state
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; //returns to the new state
    case "decrement":
      return { count: state.count - 1 };
    case "zero":
      return { count: 0 };
    default:
      return state;
  }
}

export default function ReduserApp() {
  const [state, dispatch] = useReducer(render, { count: 0 }); //useReducer is a hook that takes 2 arguments , the first argument is a function that takes the previous state as an argument and returns the new state , the second argument is the initial state

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT }); //dispatch is a function that takes an ACTION object value as an argument, and then calls the render function with the ACTION object value as an argument, and then updates the state with the new state returned by the render function
  }

  function reset() {
    dispatch({ type: ACTIONS.ZERO });
  }

  function decrement() {
    state.count !== 0 && dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <>
      <div className="App">
        <h1 style={{ display: "block" }}>{state.count}</h1>
        <button onClick={increment} className="btn">
          ++
        </button>

        <button
          onClick={reset} //reset button
          className="btn"
        >
          Reset
        </button>

        <button
          onClick={decrement} //decrement button , count !== 0 is a condition to prevent the count from going below 0
          className="btn"
        >
          --
        </button>
      </div>
    </>
  );
}
