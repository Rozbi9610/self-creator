import React from 'react';
import '../App.css';
import { Header } from '../Components/Header';
import { NavTab } from '../Components/NavTab';

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="container-xl">
        <NavTab />
      </div>
    </div>

  );
}



export default Home;
