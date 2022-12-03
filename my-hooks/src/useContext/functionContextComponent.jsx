import React,{useContext} from "react";
import {ThemeChange} from "./contextApp"; // importing the context from contextApp.jsx

export default function FunctionContextComponent () {

        const DarkTheme = useContext(ThemeChange); //by using useContext we can access the value of the context in this functional component

        const themeStyle ={
            backgroundColor:DarkTheme ? "black" : "white",
            color:DarkTheme ? "white" : "black",
            padding:"2rem",
            margin:"9rem"
        }


    return (
        <div style={themeStyle} > function Theme</div>
    );
}
