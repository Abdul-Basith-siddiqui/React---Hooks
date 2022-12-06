import { useState, useReducer, StrictMode } from "react";
import React from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  ADD_TOGGLE: "add-toggle",
  DELETE_OBJ: "delete-obj",
};

const reduser = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)]; //spered operator spreads and newTodo function returns an array with 2 properties , id and name, which returns the new state to useReducer

    case ACTIONS.ADD_TOGGLE:
      return state.map((todo) => {
        //map is a method that takes a function as an argument and returns a updated array
        if (todo.id === action.payload.id) {
          //if the id of the todo object is equal to the id of the action.payload.id then updated it and return to the map method
          return { ...todo, complete: !todo.complete }; //spered operator spreads the todo object and complete : !todo.complete is a condition that if todo.complete is true then it will be false and if todo.complete is false then it will be true and return
        }
        return todo; // this return is returing to the map method
      });

    case ACTIONS.DELETE_OBJ:
      return state.filter((todo) => todo.id !== action.payload.id); //filter is a method that takes a function as an argument and returns a new array with the elements that pass the test implemented by the provided function

    default:
      return state;
  }
};

function newTodo(name) {
  //newTodo is a function that takes name as an argument and returns an array with 2 properties , id and name
  //   return [Date.now(), name, false];

  return {
    // error :  Objects are not valid as a React child. If you meant to render a collection of children, use an array instead
    id: Date.now(),
    name: name,
    complete: false,
  };
}

export default function TodoListReduser() {
  const [state, dispatch] = useReducer(reduser, []); //useReducer is a hook that takes 2 arguments , the first argument is a function that takes the previous state as an argument and returns the new state , the second argument is the initial state
  const [names, setName] = useState("");

  function handleSubmit(e) {
    //e is the event object
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: names } }); // payload is also passed (obj inside object)  //dispatch is a function that takes an ACTION object value as an argument, and then calls the reduser function with the ACTION object value as an argument, and then updates the state with the new state returned by the reduser function
    e.preventDefault(); //prevent the page from reloading
    setName(""); //reset the input field
  }

  console.log(state);

  return (
    <>
      <div className="App">
        {/* <h1> {state}</h1> */}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={names}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        {state.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              dispatch={dispatch} //dispatch is passed as a prop to the Todo component
            />
          );
        })}
      </div>
    </>
  );
}
