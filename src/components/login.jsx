
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import './login.css'

const Login = ({onLogin}) => {
    const [username, setname] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState('');
    
    
    


    // add input vlaues 
    const onChangeName = (event) => setname(event.target.value);

    const onChangePassword = (event) => setpassword(event.target.value);



    //login credentials validation function

     const v= (event) => {
        event.preventDefault();
        if (username === "demo" && password === "1234") {
            
            onLogin(username,password)
            
        }
        else {
            setError('Invalid username or password');
        }
        setname("");
        setpassword("");
    };


    return (
        <>
            <div className="bg" 
            >


                <div>
                    <h1 style={{ fontSize: "20px" }} className="h">Login Page</h1>
                    {error && <div style={{ color: "red" }}>{error}</div>}
                </div>

                <div className=" p-4">

                    <form onSubmit={v} className="p-4 d-flex flex-column" >


                        <input type="text" placeholder="username" className="m-2" value={username}
                            onChange={onChangeName} />

                        <input type="password"  className="m-2" placeholder="password" value={password} onChange={onChangePassword} />

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>



                <div className="btm">
                    <h1 style={{ fontSize: "20px" }}>Login credentials</h1>
                    <p>username : <span style={{ color: "skyblue", fontFamily: "Robot", fontSize: "20px" }}>demo</span></p>
                    <p>password : <span style={{ color: "red", fontSize: "20px" }}>1234</span></p>
                </div>
            </div >

        </>
    )
}
export default Login

