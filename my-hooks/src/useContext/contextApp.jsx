import React,{useEffect, useState, useRef} from "react";
import FunctionContextComponent from "./functionContextComponent";


export const ThemeChange = React.createContext(); //creating a context

export default function ContextHook() {
    const [Darktheme, setTheme] = useState(false);

    function themehandle () {
            setTheme((prevValue)=>{
                return !prevValue
            });
        
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
          <ThemeChange.Provider value={ Darktheme } > // passing the value of Darktheme to the context
          // the value of the context can be accessed by the components that are wrapped inside the ThemeChange.Provider, provider is a component that takes a value prop
            <div style={{textAlign:'center'}}>
            <button onClick={themehandle} style={style} >submit</button>
            </div>
            <FunctionContextComponent />
            </ThemeChange.Provider>
        </>
    );
}

