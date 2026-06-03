import { useState } from "react"

const Counter=()=>{
    const[name,setname]=useState("");
    return(
        <>
        <input type="text" onChange={(e) =>{
           setname(e.target.value)
        }}></input>
        <h1>Welcome,{name}</h1>
        </>
    )
}
export default Counter