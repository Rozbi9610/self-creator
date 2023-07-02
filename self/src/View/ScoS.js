import React, { useState } from 'react';
import './Style/ScoS.scss'

import { Header } from '../Components/Header';
import { NavTabSelf } from '../Components/NavTabSelf';

function ScoS() {

  const rals = [
    { label: "", value: "none" },
    { label: "RAL 7021 Czarny", value: "-7021" },
    { label: "RAL 9003 Biały", value: "-9003" }
  ];

  const motherBoards = [
    { label: "", value: "none" },
    { label: "AsRock IMB-151", value: "-A2930" },
    { label: "AsRock IMB-157J", value: "-A3455" },
    { label: "AsRock IMB-159NR", value: "-A4120" },
    { label: "Giga IPC", value: "-G5105" },
    { label: "Hansung B411", value: "-H4125" },
    { label: "Hansung B412", value: "-H4125" }
  ];

  const switches = [
    { label: "", value: "none" },
    { label: "Switch TL-SG1005D", value: "TL-SF1005D" },
    { label: "Switch TL-SG105e (zarządzalny)", value: "TL-SG105e" }
  ];

  const scaners = [
    { label: "", value: "none" },
    { label: "Zaślepiony panel", value: "-00000" },
    { label: "Datalogic Magellan 1500", value: "-D1500" },
    { label: "Datalogic Magellan 3410", value: "-D3410" },
    { label: "Datalogic Magellan 3450", value: "-D3450" },
    { label: "Zebra MS 4717", value: "-Z4717" },
    { label: "Zebra DS 7708", value: "-Z7708" }
  ];


  const [ral, setRal] = useState();
  const [motherBoard, setMotherBoard] = useState();
  const [_switche, setSwitche] = useState();
  const [scaner, setScaner] = useState();


  const handleRalChange = (e) => {
    setRal(e.target.value);
  };
  const handleMotherBoardChange = (e) => {
    setMotherBoard(e.target.value);
  };
  const handleSwitchChange = (e) => {
    setSwitche(e.target.value);
  };
  const handleScanerChange = (e) => {
    setScaner(e.target.value);
  };


  return (
    <div className="App">
      <Header />      
      <h3> Self Creator SCO S</h3>
      <div className="container-xl">
        <NavTabSelf />
      </div>
     
      < div className='container text-center'>
        <form>
          <div className='form-row'>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='pn'>
                <h5>Product number</h5>
              </label>
              <div class="col-sm-10 PN">
                <h5> M4B SELF-S170-B-20{motherBoard}{scaner}{ral}-0VPR</h5>
              </div>
            </div>

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

            {/* formularz szyba */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='sn_screen'>
                <h5>S/N Szyba</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputScreen" />
              </div>
            </div>

            {/* formularz płyta */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='motherboard'>
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
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='mb_sn'>
                <h5>S/N Płyty głównej</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputMB_sn" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='mb_sn'>
                <h5>MAC Adres 1</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputMB_sn" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='mb_sn'>
                <h5>MAC Adres 2</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputMB_sn" />
              </div>
            </div>

            {/* formularz RAM */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='pn_RAM'>
                <h5>Model RAM</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputPN_ram" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='sn_RAM'>
                <h5>S/N RAM</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputSN_ram" />
              </div>
            </div>

            {/* formularz dysk */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='pn_DISK'>
                <h5>Model Dysk</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputPN_disk" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='sn_DISK'>
                <h5>S/N Dysk</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputSN_disk" />
              </div>
            </div>

            {/* formularz switch  */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='switche'>
                <h5>Model Switch</h5>
              </label>
              <div class="col-sm-10">
                <select class="form-select" onChange={handleSwitchChange}>
                  {switches.map((switche) => (
                    <option value={switche.value}>{switche.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='switch_sn'>
                <h5>S/N Switch</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputSwitch_sn" />
              </div>
            </div>

            {/* formularz skaner */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='scaner'>
                <h5>Model Skaner</h5>
              </label>
              <div class="col-sm-10">
                <select class="form-select" onChange={handleScanerChange}>
                  {scaners.map((scaner) => (
                    <option value={scaner.value}>{scaner.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='scaner_sn'>
                <h5>S/N Skaner</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputScaner_sn" />
              </div>
            </div>

            <h4> Opcjonalne akcesoria</h4>
            <hr />

            {/* formularz przedłużka */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>Przedłużka USB</h5>
              </label>
              <div class="col-sm-10">
                <input type="checkbox" id="USB_EXT" />
              </div>
            </div>

            {/* formularz kamery */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>Kamera security</h5>
              </label>
              <div class="col-sm-10">
                <input type="checkbox" id="USB_EXT" />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>Kamera AI</h5>
              </label>
              <div class="col-sm-10">
                <input type="checkbox" id="USB_EXT" />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>Kamera chceck age (DOZ)</h5>
              </label>
              <div class="col-sm-10">
                <input type="checkbox" id="USB_EXT" />
              </div>
            </div>

            {/* formularz drukarka */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>Model drukarka</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" placeholder="Posnet Thermal HD Online, Posnet Thermal HD P non-fisc" className="form-control" id="inputZLM" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>PO drukarka</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>EAZ drukarka</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>

            {/* formularz terminal */}

                       <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>S/N Terminal</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>POS ID terminala</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>

            {/* formularz skaner ręczny */}

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>Model skanera ręcznego</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label" id='finish'>
                <h5>S/N skaner ręczny</h5>
              </label>
              <div class="col-sm-10">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScoS;
