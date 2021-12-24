import React, {useContext, useState} from 'react';
import { useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import MyModal from "./MyModal/MyModal";
import Login from "./Login";


const Title = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    const [modal, setModal] = useState(false)

    function handleClick() {
        navigate('/')
    }

  return (
    <div className="title">
      <h1 onClick={handleClick} className='logo'>My Gallery</h1>
      <nav className='title__about'>
          <Link to="/guestbook">GuestBook</Link>


          {user ?
              <Link to="/" onClick={()=> auth.signOut()}>Logout</Link>
              :
              <div onClick={() => setModal(true)}>Login</div>
          }

          <Link to="/about">About</Link>
      </nav>
        <MyModal visible={modal} setVisible={setModal}>
            <Login setVisible={setModal}></Login>
        </MyModal>
    </div>
  )
}

export default Title;