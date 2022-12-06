import React, { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  //this function is used to get the value of the key from the local storage
  const savedValue = JSON.parse(localStorage.getItem(key)); //JSON.parse() is used to convert the string into a javascript object , this line runs only once.and we store the object
  if (savedValue) return savedValue; //if value is already saved previously then return it

  if (initialValue instanceof Function) return initialValue(); //check if initialValue is a function then return the function
  //else
  return initialValue; // if initialValue is not a function then return the initialValue value
}

export default function useLocalStroage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue); //key is the key of the value in the local storage and initialValue is the initial value of the state variable
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); //JSON.stringify() is used to convert the javascript object into a string , this line runs everytime the value of the state variable changes
  }, [value]);

  return [value, setValue];
}

//setItem(): This method is used to add a key and a value to localStorage.
//getItem(): This method is used to get an item from localStorage using the key.
