import React from 'react';
import '../App.scss';
import Navbar from '../Components/Navbar';
import NavSelf from '../Components/NavSelf';

function Self() {
  return (
    <>
      <Navbar page="> SELF" />
      <NavSelf />
    </>
  );
}

export default Self;