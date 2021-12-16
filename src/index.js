import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'firebase/auth'
import firebase from "firebase/compat";

export const Context = createContext(null)
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA