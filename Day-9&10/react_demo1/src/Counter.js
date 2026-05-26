import { useState } from "react";
const Counter =()=>{
    const[count,setcount]=useState("");
    return(
        <>
            {/* <h1>Counter : {count}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <button onClick={()=>setcount(count-1)}>Decrement</button>
            <button onClick={()=>setcount(0)}>Restart</button> */}

            <input type="text" onChange={(e) => setcount(e.target.value)}/>
            <h1>Welcome, {count}</h1>

        </>
    );
}

export default Counter;