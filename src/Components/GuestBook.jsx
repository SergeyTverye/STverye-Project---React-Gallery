import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";

const GuestBook = () => {
    const firestore = firebase.firestore()
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt'))

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
                {messages && messages.map(message =>
                    <div style={{
                        margin: 10,
                        border: user.uid === message.uid ? '2px solid #d28884'
                            : '2px solid #8c4846',
                        width: 'fit-content',
                        padding: '5px',
                        borderRadius: '10px'
                    }}>
                        <div>
                            <img src={message.photoURL} alt="avatar"/>
                            <div>{message.displayName}</div>
                        </div>
                        <div>{message.text}</div>
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