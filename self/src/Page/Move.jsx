import React from 'react';
import '../App.scss';
import Navbar from '../Components/Navbar';
import NavMove from '../Components/NavMove';

function Move() {
  return (
    <>
      <Navbar page="> MOVE" />
      <NavMove />
    </>
  );
}

export default Move;