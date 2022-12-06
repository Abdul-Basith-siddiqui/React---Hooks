import React, { useState } from "react";
import useLocalStroage from "./useLocalStroage";
import useConsoleValue from "./consoleValue";

export default function CustomHook() {
  const [text, setText] = useLocalStroage("name", ""); //useLocalStroage is a custom hook,takes 2 arguments , key and initialValue and the initialValue can be function or value
  useConsoleValue(text); // useConsoleValue is a custom hook , takes 1 argument , value and it logs the value in the console

  return (
    <>
      <div className="App">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <h1>{text}</h1>
        </div>
      </div>
    </>
  );
}
