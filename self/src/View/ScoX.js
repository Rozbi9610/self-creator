import React from 'react';

import { Header } from '../Components/Header';
import { NavTab } from '../Components/NavTab';

function ScoX() {
  return (
    <div className="App">
      <Header />
      <h3> SCO X</h3>
      <div className="container-xl">
       <NavTab/>
      </div>
    </div>
  );
}

export default ScoX;
