import React, { useState, useMemo, useEffect } from "react";

function Mapp () {

  const [twice, setTwice] = React.useState(0);
  const [dark , setDark] = useState(false);

    const inputWidth ={
        width: "300px",
        height: "40px",
        margin:"auto"
    }
    // update the refererance of an object whenever the internal propities of the object changes,
    //checks if the object reference address is the same as the previous object reference address , if it is the same then it does not update the refererance of the object
   const theme = useMemo(()=>{ //referencial equality , if the value of dark is not changed then the value of theme will not be changed , so we get the exact same reference of the object
       return {
        width: "300px",
        height: "40px",
        backgroundColor: dark ? "black" : "white",
        color:dark ? "white" : "black",
        margin:"auto"
       }
   },[dark]);

   //2 . whenever we are updatig the theme useEffect runs, and when we give input in input box also useEffect runs because of referencial equility - when we give input it rerender in the process our div also rerender and new theme obj with new refrence address created so, it make useEffect  to run , for this use useMemo
   useEffect(()=>{
        console.log("theme changed")
   }, [theme]);

     //useMemo is a hook that takes a function as an argument and returns the result of that function
    let  doubleNum = useMemo(()=>{ //useMemo caches the result of the function passed to it , so that the function is not called again and again , it is called only when the dependency changes
      return  slowFunction(twice); 
    },[twice]); //dependency array , the function is called only when the dependency changes

    return (
        <>
        <div style={{textAlign:"center"}}>
        <input style={inputWidth}type="number" value={twice} 
        onChange={(e)=> setTwice(e.target.value)} />
        <button style={{display:"block", width:"200px", heigth:"50px", margin:"auto"}}
        onClick={ ()=> setDark((prevV)=> !prevV) }
        >Dark Theme</button>
        <div style={theme}>{doubleNum}</div>
        </div>
        </>
    );
}

function slowFunction (num) {
    // setTimeout(()=>{
    //  return num *2;
    // },50);
  for(let i=0; i<= 10000; i++) {} //this loop is to simulate a slow function
  return num *2;
}

export default Mapp;