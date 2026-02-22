import "./App.css";
import React from "react";
// import useToggle from "./hooks/useToggle";
// import useCounter from "./hooks/useCounter";
import useInput from "./hooks/useInput";

export default function App() {
const  { value, onChange, reset } = useInput(""); 
return (
  <div>
    <h1>{value}</h1> 
    <input type="text" value={value}  onChange={onChange}/>
    <button onClick={reset}>reset</button>
  </div>
);}
