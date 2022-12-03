import React,{useEffect, useState, useRef} from "react";

function DomRef() {

    const[myname,setName]= useState("");
    const inputRef =useRef(); // useRef is a hook that returns a changeable value and doesnot reRender when value changes 
        // useRef is used to store mutable values   and  have an object with key as current
    console.log(inputRef.current); 

  

        function grabDomRef () {
            // console.log(inputRef.current); //o/p is <input type="text" value="" /> //like DOM grabbing the input by id
            inputRef.current.focus(); //focus is a method in useRef  it focuses on the input element and bring the curser on input box
        }

        const style={
            width:"300px",
            heigth:"40px",
            margin:"auto",
            position:"relative",
            top:"130px",
            fontSize:"30px"
        }
    return (
        <>
            <div style={{textAlign:'center'}}>
            
          <input ref={inputRef} 
            style={style} 
            type="text" 
            value={myname}
            onChange={(e)=> setName(e.target.value) } />

            <div style={style}>My Name is {myname}</div>
            <button onClick={grabDomRef} style={style} >submit</button>
            </div>
        </>
    );
}

export default DomRef;