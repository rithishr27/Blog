import { useState } from 'react';
import './Header.css';
import HandleSignIn from '../RegiterForm/Handler';
import icon from '../img/icon.png';

const NavBar = () => {
    console.log("Header");

    const [Reg , SetReg] = useState(false);
    // const [showSignIn, setShowSignIn] = useState(false);
    // const [showLogIn, setShowLogIn] = useState(false);

    // const SigninToggle = () => {
    //     setShowSignIn(!showSignIn);
    // }
    const RegToggle = () => {
        SetReg(!Reg);
    }

    // const OnClose = () => {
    //     setShowSignIn(false);
    //     setShowLogIn(false);
    // }

    // const OnLogin = () => {
    //     setShowSignIn(false);
    //     setShowLogIn(true);
    // }

    return(
        <>
            <div className="Header">
                <div>
                    <h5><img src={icon} alt="IMG" /> BLOGGER</h5>
                </div>
                <nav>
                    <button className='signin-btn' onClick={RegToggle}>SIGN IN</button>
                </nav>
                {/* {showSignIn && <SignIN OnClose={OnClose} OnLogin={OnLogin}/>}
                {showLogIn && <LogIn OnClose={OnClose}/>} */}
                {Reg && <HandleSignIn OnToggle={RegToggle}/>}
            </div>
        </>
    )
}

export default NavBar;