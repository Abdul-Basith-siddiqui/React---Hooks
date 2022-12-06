import React, { StrictMode } from "react";
import { ACTIONS } from "./todoListReduser";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span
        style={{ color: todo.complete ? "white" : "red" }} //if todo.complete is true then the color is red , if todo.complete is // false then the color is yellow
      >
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_TOGGLE, payload: { id: todo.id } }); //dispatch with argument of type and payload will send to the reduser function
        }}
      >
        Toggle
      </button>

      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE_OBJ, payload: { id: todo.id } }); //dispatch with argument of type and payload will send to the reduser function
        }}
      >
        Delete
      </button>
    </div>
  );
}

//{todo.name} //todo.name is the name property of the todo object
