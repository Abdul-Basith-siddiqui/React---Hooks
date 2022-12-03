import React,{useEffect, useState, useRef} from "react";

function PrevStateValue() {

    const[myname,setName]= useState("");
    const prev =useRef();  // presist values between the reRender
        // useRef is used to store mutable values   and  have an object with key as current
    console.log(prev.current); 

        useEffect(()=>{  
            prev.current = myname; // storing the  previous value of myname in prev.current
        }, [myname]);   // when ever myname changes the useEffect will run and store the previous value of myname in prev.current

       
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
            
          <input  
            style={style} 
            type="text" 
            value={myname}
            onChange={(e)=> setName(e.target.value) } />

            <div style={style}>My Name is {myname} and it use to be {prev.current}</div>
            </div>
        </>
    );
}

export default PrevStateValue;