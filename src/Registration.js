import axios from "axios";
import { useState } from "react";

const Registration = ()=>{

    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [cpassword,setcpassword]=useState("");

    const insert_data = async(e)=>{

        e.preventDefault();

        if(password!==cpassword){
            alert("Password Not Match");
            return;
        }

        try{

            await axios.post(
                "http://localhost:8080/Registration",
                {
                    username,
                    email,
                    password
                }
            );

            alert("User Registration Done");

        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <h1>Registration Form</h1>

            <form onSubmit={insert_data}>

                <div className="form-container">

                    <div>
                        <label>Username :</label><br/>

                        <input
                        type="text"
                        placeholder="Enter Username"
                        onChange={(e)=>setusername(e.target.value)}
                        />

                    </div>

                    <br/>

                    <div>
                        <label>Email :</label><br/>

                        <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e)=>setemail(e.target.value)}
                        />

                    </div>

                    <br/>

                    <div>
                        <label>Password :</label><br/>

                        <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e)=>setpassword(e.target.value)}
                        />

                    </div>

                    <br/>

                    <div>
                        <label>Confirm Password :</label><br/>

                        <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e)=>setcpassword(e.target.value)}
                        />

                    </div>

                    <br/>

                    <button type="submit">
                        Submit
                    </button>

                </div>

            </form>
        </>
    )
}

export default Registration;