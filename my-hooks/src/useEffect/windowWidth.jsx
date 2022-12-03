import React, {useEffect, useState} from "react";


export default function WindowWidth () {

    const [width,setWidth] = useState(window.innerWidth);  //window.innerWidth is the width of the window
     // we are setting the initial value of width to the width of the window

    const handelResize = ()=>{         //this function will be called when the window is resized
        setWidth(window.innerWidth);    //we are setting the width of the window to the width state variable
    }
     useEffect (()=>{                                         //useEffect is a hook that allows you to perform side effects in functional components
            window.addEventListener("resize", handelResize)   //we are adding an event listener to the window , when the window is resized the handelResize function will be called
    
            // return ()=> removeEventListener("resize",handelResize) // first return  statement works of useEffect hook is a cleanup function , it will be called when the component is unmounted then addEventListener will works
             //this function will be called when the component is unmounted
        });

   return (
        <>
        <h1>{width}</h1>  // we are displaying the width of the window
        </>
   );
}