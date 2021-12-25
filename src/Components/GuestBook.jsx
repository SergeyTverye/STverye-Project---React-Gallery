import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase/compat";
import useFirestore from "../Hooks/useFirestore";

const GuestBook = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const firestore = firebase.firestore()
    const [value, setValue] = useState('')

    const messages = useFirestore('messages', 'asc')

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    return (
        <div>
            <div className="chat__textbox">
                {messages.docs && messages.docs.map(message =>
                    <div key={message.createdAt}
                         className='chat__message'>
                        <div className="chat__user">
                            <img src={message.photoURL} alt="avatar"/>
                            <div
                            style={{
                                color: user.uid === message.uid ? '#a13327'
                                : 'black',
                            }}

                            >{message.displayName}</div>
                        </div>
                        <div className="chat__message-text">{message.text}</div>
                    </div>
                )}
            </div>

            <div className="chat__messageform">

                <input type="text-box"
                       className="chat__textinput"
                    value={value}
                    onChange={e => setValue(e.target.value)}/>
                <button
                    className="chat__sendbutton"
                    onClick={sendMessage}>Отправить</button>

            </div>
        </div>
    );
};

export default GuestBook;