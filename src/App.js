import React from 'react';
import Title from './Components/Title';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";

function App() {


  return (
      <BrowserRouter>
        <div className="App">
            <Title/>
            <AppRouter/>
        </div>
      </BrowserRouter>
  );
}

export default App;
