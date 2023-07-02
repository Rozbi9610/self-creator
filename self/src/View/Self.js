import React from 'react';
import '../App.css';
import { Header } from '../Components/Header';
import { NavTabSelf } from '../Components/NavTabSelf';

function Self() {
  return (
    <div className="App">
      <Header />
      <div className="container-xl">
        <NavTabSelf />
      </div>
    </div>

  );
}



export default Self;
