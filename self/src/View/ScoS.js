import React, { useState,useEffect } from 'react';
import './Style/ScoS.scss'

import { Header } from '../Components/Header';
import { NavTab } from '../Components/NavTab';

function ScoS() {

  const rals = [
    { label: "", value: "none" },
    { label: "RAL 7021 Czarny", value: "7021" },
    { label: "RAL 9003 Biały", value: "9003" }
  ];

  const motherBoards = [
    {label:"", value:"none"},
    {label:"AsRock IMB-151", value:"A2930"},
    {label:"AsRock IMB-157J", value:"A3455"},
    {label:"AsRock IMB-159NR", value:"A4120"},
    {label:"Giga IPC", value:"G5105"},
    {label:"Hansung B411", value:"H4125"},
    {label:"Hansung B412", value:"H4125"}
  ]

  const [ral, setRal] = useState();
  const [motherBoard, setMotherBoard] = useState();

  useEffect(() =>{
    document.title = `PN: M4B SELF-S170-B-20-${motherBoard}`;
  })

  const handleRalChange = (e) => {
    setRal(e.target.value);
  };
  const handleMotherBoardChange = (e) =>{
    setMotherBoard(e.target.value);
  }

  return (
    <div className="App">
      <Header />
      <h3> SCO S</h3>
      <div className="container-xl">
        <NavTab />
      </div>
      < div className='container-fluid text-center'>
        <form>
          <div className='form-row'>
          <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='pn'>
                <h5>Product number</h5>
              </label>
              <div class="col-sm-10">
              <h5> M4B SELF-S170-B-20-{motherBoard}</h5>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='zlm'>
                <h5>ZLM</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>Data zakończenia produkcji</h5>
              </label>
              <div class="col-sm-10">
              <input type="date" className="form-control" id="inputfinish" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='ral'>
                <h5>Kolor</h5>
              </label>
              <div class="col-sm-10">
              <select class="form-select" onChange={handleRalChange}>
                {rals.map((ral) => (
                  <option value={ral.value}>{ral.label}</option>
                ))}
              </select>
              </div>
            </div>
            <div>
              <h4>Płyta główna</h4>
              <hr/>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='ral'>
                <h5>Płyta główna</h5>
              </label>
              <div class="col-sm-10">
              <select class="form-select" onChange={handleMotherBoardChange}>
                {motherBoards.map((motherBoard) => (
                  <option value={motherBoard.value}>{motherBoard.label}</option>
                ))}
              </select>
              </div>
            </div>


           
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScoS;
