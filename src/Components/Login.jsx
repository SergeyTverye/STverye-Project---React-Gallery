import React, {useContext} from 'react';
import {Context} from "../index";
import firebase from "firebase/compat";

const Login = ({setVisible}) => {

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const user = await auth.signInWithPopup(provider)
        console.log(user)
        setVisible(false)
    }

    return (
        <div className='login'>

            <p>Here you can login with google!</p>

            <button className="chat__sendbutton" onClick={login}>
                Login
            </button>
        </div>
    );
};

export default Login;