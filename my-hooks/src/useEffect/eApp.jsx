import React, { useEffect } from "react";
import { useState} from "react";

export default function Eapp() {

   const [text,setText] = useState("");
   const [items,setItem] = useState([]);

   useEffect(()=>{  //useEffect is a hook that allows you to perform side effects in functional components
    fetch(`https://jsonplaceholder.typicode.com/${text}`) //fetch is a function that takes a url as an argument and returns a promise
  .then(response => response.json())                       //what ever response we get we are converting into json
  .then(json => setItem(json));                            //we are setting the json data to the item state variable
   }, [text]);  // the second argument is an array of dependencies , if the dependencies change then the useEffect hook will run again , if the array is empty then the useEffect hook will run only once when the component is mounted

  return (
    <>
    <div className="App">
      <h1>{text}</h1>
      <button onClick={()=>setText("posts")}>posts</button>
      <button onClick={()=>setText("photos")}>photos</button>
      <button onClick={()=>setText("users")}>users</button>
    </div>
    {items.map((item)=>{ // we are mapping the items array to display the data
        return <pre style={{color:"white"}}>{JSON.stringify(item)}</pre> // we are converting the item object to a string and displaying it
      })}
    </>
  );
}