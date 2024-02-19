import { useState } from "react"
import SignIN from "./SignIn";
import LogIn from "./Login";

const HandleSignIn = ({OnToggle}) => {

    console.log("Handler...!!!");

    const [signIn , setSignIn] = useState(true);
    const [logIn , SetLogIn] = useState(false);

    const OnClose = () => {
        setSignIn(false);
        SetLogIn(false);
    }

    const OnLogIn = () => {
        setSignIn(false);
        SetLogIn(true);
    }

    return (
        <>
            {signIn && <SignIN OnClose={OnClose} OnLogin={OnLogIn} OnToggle={OnToggle}/>}
            {logIn && <LogIn OnClose={OnClose} OnToggle={OnToggle}/>}
        </>
    )
}

export default HandleSignIn;