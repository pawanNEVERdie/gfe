import React, { useState } from "react";
export default function Counter(){
const [counter,setCounter] =useState('');

return (
    <>
    <button onClick={(counter)=>setCounter(counter+1)}>INcrease me</button>
    </>

)
}
