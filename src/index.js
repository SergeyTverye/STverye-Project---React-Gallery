import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'firebase/auth'
import firebase from "firebase/compat";

export const Context = createContext(null)
export const PageContext = createContext(null)
const auth = firebase.auth()

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          auth
      }}>
    <App />
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);