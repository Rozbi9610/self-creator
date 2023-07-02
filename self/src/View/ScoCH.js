import React, { useState } from 'react';
import './Style/ScoS.scss'

import { Header } from '../Components/Header';
import { NavTabSelf } from '../Components/NavTabSelf';

function ScoCH() {

  const rals = [
    { label: "", value: "none" },
    { label: "RAL 7021 Czarny", value: "-7021" },
    { label: "RAL 9003 Biały", value: "-9003" }
  ];

  const wymiary = [
    { label: "", value: "none" },
    { label: "Fawag 300x500", value: "300x500" },
    { label: "Fawag 500x500", value: "500x500" },
    { label: "Keli 550x800", value: "550x800" },
  ];



  const [ral, setRal] = useState();
  const [wymiar, setWymiar] = useState();


  const handleRalChange = (e) => {
    setRal(e.target.value);
  };
  const handleWymiar = (e) => {
    setWymiar(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <h3> Self creator Control Scale</h3>
      <div className="container-xl">
        <NavTabSelf />
      </div>
      < div className='container text-center'>
        <form>
          <div>
            {/* formularz ZLM */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='zlm'>
                <h5>ZLM</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>

            {/* formularz data */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>Data zakończenia produkcji</h5>
              </label>
              <div class="col-sm-10">
                <input type="date" className="form-control" id="inputfinish" />
              </div>
            </div>
            <h4>Podstawowe dane</h4>
            <hr />

            {/* formularz kolor */}

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

            {/* formularz waga */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='ral'>
                <h5>Model wagi</h5>
              </label>
              <div class="col-sm-10">
                <select class="form-select" onChange={handleWymiar}>
                  {wymiary.map((wymiar) => (
                    <option value={wymiar.value}>{wymiar.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='sn_screen'>
                <h5>S/N Wagi</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputScreen" />
              </div>
            </div>

          
          </div>
        </form>

        
      </div>
    </div>
  );
}

export default ScoCH;
