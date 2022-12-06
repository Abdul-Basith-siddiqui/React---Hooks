import react, { useCallback } from "react";
import { useState, useEffect } from "react";
import List from "./list";

export default function CallBackapp() {
  const [count, setCount] = useState(1);
  const [dark, setDark] = useState(false);

  //when ever we update the count , the getItems function is called again and again , this is not good for performance
  //even when we update the dark mode , the getItems function is called again
  //to prevent this we use useCallback hook, it takes a function as an argument and returns a memoized version of the callback function that only changes if one of the dependencies has changed
  //useCallback return a function with whatever inside it ,but useMemo returns a value
  //in console , we can see that the getItems function is called only when the count is updated
  const getItems = useCallback(
    //getItems is a callback function
    (valueFromlist) => {
      //valueFromlist is the argument that we pass to the getItems function
      return [count, count + valueFromlist + 1, count + valueFromlist + 2];
    },
    [count]
  );

  const theme = {
    backgroundColor: dark ? "white" : "black",
    color: dark ? "black" : "white",
  };

  return (
    <div className="App" style={theme}>
      <h1>useCallback</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevValue) => !prevValue)}>Toggle</button>
      <List getItems={getItems} />
    </div>
  );
}
