import { useEffect } from "react";

export default function useConsoleValue(value) {
  //useConsoleValue is a custom hook , takes 1 argument , value and it logs the value in the console
  useEffect(() => {
    console.log(value);
  }, [value]);
}
