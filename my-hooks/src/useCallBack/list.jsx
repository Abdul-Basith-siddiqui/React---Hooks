import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [list, setList] = useState([]);
  console.log(list);
  useEffect(() => {
    setList(getItems(2)); //getItems can take an argument "value" and by using useCallback we can pass the argument to inside callback function, check at callBackApp.jsx -getItems function
    console.log("updating items" + getItems());
  }, [getItems]);

  return list.map((item) => <div key={item}>{item}</div>);
}

/* long way of doing it 
(
    <div>
      {list.map((list) => {
        return <div key={list}> {list}</div>;
      })}
    </div>
  );


  
*/
