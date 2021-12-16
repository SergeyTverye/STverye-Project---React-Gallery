import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


const Title = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const navigate = useNavigate()

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
              <Link to="/login">Login</Link>
          }

          <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

export default Title;