import { useState } from "react";
import './SignIN.css';
import axios from 'axios';
import { Link } from "react-router-dom";
const SignIN = ({OnClose , OnLogin, OnToggle}) => {
    // console.log("Activate");
    const [userName , setUserName] = useState("");
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("");
    

    const handleSubmit = () => {
        axios.post('http://localhost:3001/register',{userName,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        OnLogin()
    }

    const Close = () => {
        OnClose();
        OnToggle();
    }

    return(
        <>
            <div className="Signin">
                <div>
                    <span onClick={Close} className="close-btn">&times;</span>
                </div>
                <div>I'm in SignIn Page</div>
                <input 
                    type="text" value={userName} 
                    onChange={e => (setUserName(e.target.value))}
                    autoComplete="off" 
                    placeholder="Username"
                />
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
                <div className="log-in">Already Registered? <button onClick={OnLogin}>Click!</button></div>
            </div>
        </>
    )
}

export default SignIN;