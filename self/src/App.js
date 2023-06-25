import React from 'react';
import './App.css';

import { Header } from './Components/Header';
import {NavTab} from './Components/NavTab';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-xl">
        <h1> SELF Creator</h1>
       <NavTab/>
      </div>
    </div>
  );
}

export default App;
