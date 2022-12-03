import React,{useEffect, useState, useRef} from "react";

function Rapp() {

    const[myname,setName]= useState("");
    const refRender =useRef(0); // useRef is a hook that returns a changeable value and doesnot reRender when value changes 
        // useRef is used to store mutable values   and  have an object with key as current
    console.log(refRender.current); //o/p is 0

    useEffect(()=>{
        refRender.current =refRender.current +1; //refRender.current is the value of refRender and we are updatig by 1 everytime the useState is reRender
    })



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
            
            <input style={style} type="text" value={myname} onChange={(e)=> setName(e.target.value) } />
            <div style={style}>My Name is {myname}</div>
            <div style={style}>No of times render {refRender.current}</div> 
            </div>
        </>
    );
}

export default Rapp;