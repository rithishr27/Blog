import { useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import axios from 'axios';

const LogIn = ({OnClose , OnToggle}) => {
    console.log("Login Page...!!!");

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = () => {
        axios.post("http://localhost:3001/login",{email,password})
        .then(result => {
            console.log(result.data)
            if(result.data=="Success"){
                window.location.href = 'http://localhost:5173/Content';
            }
        })
        .catch(err => console.log(err))
    }

    const Close = () => {
        OnClose();
        OnToggle();
    }

    return (
        <>
            <div className="Login">
                <div>
                    <span onClick={Close} className="close-btn">&times;</span>
                </div>
                <input 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="off"
                    placeholder="Email" 
                />
                <input 
                    type="password" value={password} 
                    onChange={e => (setPassword(e.target.value))} 
                    autoComplete="off"
                    placeholder="Password"
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default LogIn;