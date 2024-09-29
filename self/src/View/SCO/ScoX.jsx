import React, { useState } from 'react';
import '../Table.scss'

function ScoX() {

  const rals = [
    { label: "", value: "none" },
    { label: "RAL 7021 Czarny", value: "-7021" },
    { label: "RAL 9003 Biały", value: "-9003" }
  ];
  const revs = [
    { label: "", value: "none" },
    { label: "1.0", value: "10" },
    { label: "2.0", value: "20" }
  ];

  const motherBoards = [
    { label: "", value: "none" },
    { label: "AsRock IMB-151", value: "-A2930" },
    { label: "AsRock IMB-157J", value: "-A3455" },
    { label: "AsRock IMB-159NR", value: "-A4120" },
    { label: "Giga IPC iTXL-5105A", value: "-G5105" },
    { label: "Hansung B411", value: "-H4125" },
    { label: "Hansung B412", value: "-H4125" }
  ];

  const rams = [
    { label: "", value: "none" },
    { label: "GoodRam Industrial DDR4 4GB 2666MHz GR4S4G266S8C ", value: "GR4S4G266S8C" },
    { label: "GoodRam Industrial DDR4 8GB 2666MHz GR4S8G266S8C", value: "GR4S8G266S8C" },
    { label: "Inne", value: "Other" }
  ]

  const disks = [
    { label: "", value: "none" },
    { label: "GoodRam Industrial M.2 128GB SSD78-1283CG", value: "SSD78-1283CG" },
    { label: "Inne", value: "Other" }
  ]

  const switches = [
    { label: "", value: "none" },
    { label: "Switch TL-SF1005D", value: "TL-SF1005D" },
    { label: "Switch TL-SG105e (zarządzalny)", value: "TL-SG105e" }
  ];

  const scaners = [
    { label: "", value: "none" },
    { label: "Datalogic Magellan 9300", value: "-D9300" },
    { label: "Datalogic Magellan 9400", value: "-D9400" },
    { label: "Datalogic Magellan 9800", value: "-D9800" },
    { label: "Zebra MP7000", value: "-Z7000" }
  ];

  const scaleScaners = [
    { label: "", value: "none" },
    { label: "Elzab Neptun 2", value: "EN2" },
    { label: "Digi D894", value: "D984" },
    { label: "Bizerba", value: "B" }
  ];

  const printers = [
    { label: "", value: "none" },
    { label: "Posnet Thermal HD Online 2.01", value: "PHD" },
    { label: "Posnet Thermal HD P (paragonowa)", value: "PHD-non" },
    { label: "Epson TM-T88 (paragonowa)", value: "E88" },
    { label: "Novitus", value: "N" }
  ];

  const terminals = [
    { label: "", value: "none" },
    { label: "Ingenico Lane 3000", value: "L3000" }
  ];
  const upses = [
    { label: "", value: "none" },
    { label: "Eaton 5S 550I (5S550i)", value: "5S550i" }
  ];

  const options = [
    { label: "Nie", value: "no" },
    { label: "Tak", value: "yes" }
  ];

  const optionCheckScales = [
    { label: "Nie", value: "no" },
    { label: "Tak", value: "chceckScale" }
  ];

  const checkScales = [
    { label: "", value: "none" },
    { label: "Fawag 500x500", value: "Fawag500" },
    { label: "Keli 500x500", value: "Keli500" },
    { label: "Keli 500x500", value: "Keli800" }
  ];


  const [ral, setRal] = useState();
  const [rev, setRev] = useState();
  const [motherBoard, setMotherBoard] = useState();
  const [ram, setRam] = useState();
  const [disk, setDisk] = useState();
  const [_switche, setSwitche] = useState();
  const [scaner, setScaner] = useState();
  const [scaleScaner, setScaleScaner] = useState();
  const [printer, setPrinter] = useState();
  const [terminal, setTerminal] = useState();
  const [ups, setUps] = useState();
  const [optionCheckScale, setOptionCheckScale] = useState();
  const [checkScale, setCheckScale] = useState();

  const [option, setOption] = useState();


  const handleRalChange = (e) => {
    setRal(e.target.value);
  };
  const handleRevChange = (e) => {
    setRev(e.target.value);
  };
  const handleMotherBoardChange = (e) => {
    setMotherBoard(e.target.value);
  };
  const handleRamChange = (e) => {
    setRam(e.target.value);
  };
  const handleDiskChange = (e) => {
    setDisk(e.target.value);
  };
  const handleSwitchChange = (e) => {
    setSwitche(e.target.value);
  };
  const handleScanerChange = (e) => {
    setScaner(e.target.value);
  };
  const handleScaleScanerChange = (e) => {
    setScaleScaner(e.target.value);
  }
  const handlePrinterChange = (e) => {
    setPrinter(e.target.value);
  };
  const handleTerminalChange = (e) => {
    setTerminal(e.target.value);
  };
  const handleUpsChange = (e) => {
    setUps(e.target.value);
  };
  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };
  const handleOptionChceckScale = (e) => {
    setOptionCheckScale(e.target.value);
  };
  const handleChceckScale = (e) => {
    setCheckScale(e.target.value);
  };



  return (
    <div className="App">
      < div className='container text-center'>
        <h3>Creator SELF X</h3>
        <form>
          <div className='form-row'>

            {/* formularz ZLM */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='zlm'>
                <h5>ZLM</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>

            {/* formularz data */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>Data zakończenia produkcji</h5>
              </label>
              <div class="col-sm-9">
                <input type="date" className="form-control" id="inputfinish" />
              </div>
            </div>

            {/* formularz kolor */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='ral'>
                <h5>Kolor</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleRalChange}>
                  {rals.map((ral) => (
                    <option value={ral.value}>{ral.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* formularz rewizji */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='ral'>
                <h5>Wersja obudowy</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleRevChange}>
                  {revs.map((rev) => (
                    <option value={rev.value}>{rev.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* formularz szyba */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='sn_screen'>
                <h5>S/N Szyba</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputScreen" />
              </div>
            </div>

            {/* formularz płyta */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='motherboard'>
                <h5>Płyta główna</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleMotherBoardChange}>
                  {motherBoards.map((motherBoard) => (
                    <option value={motherBoard.value}>{motherBoard.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='mb_sn'>
                <h5>S/N Płyty głównej</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputMB_sn" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='mb_sn'>
                <h5>MAC Adres 1</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputMB_sn" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='mb_sn'>
                <h5>MAC Adres 2</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputMB_sn" />
              </div>
            </div>

            {/* formularz RAM */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='pn_RAM'>
                <h5>Model RAM</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleRamChange}>
                  {rams.map((ram) => (
                    <option value={ram.value}>{ram.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='sn_RAM'>
                <h5>S/N RAM</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputSN_ram" />
              </div>
            </div>

            {/* formularz dysk */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='pn_DISK'>
                <h5>Model Dysk</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleDiskChange}>
                  {disks.map((disk) => (
                    <option value={disk.value}>{disk.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='sn_DISK'>
                <h5>S/N Dysk</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputSN_disk" />
              </div>
            </div>

            {/* formularz switch  */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='switche'>
                <h5>Model Switch</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleSwitchChange}>
                  {switches.map((switche) => (
                    <option value={switche.value}>{switche.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='switch_sn'>
                <h5>S/N Switch</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputSwitch_sn" />
              </div>
            </div>

            {/* formularz skaner */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='scaner'>
                <h5>Model Skaner</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleScanerChange}>
                  {scaners.map((scaner) => (
                    <option value={scaner.value}>{scaner.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='scaner_sn'>
                <h5>S/N Skaner</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputScaner_sn" />
              </div>
            </div>

            {/* formularz waga skanerowagi */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='scaner'>
                <h5>Model wagi (skanerowagi) </h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleScaleScanerChange}>
                  {scaleScaners.map((scaleScaner) => (
                    <option value={scaleScaner.value}>{scaleScaner.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='scaner_sn'>
                <h5>S/N wagi (skanerowagi)</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputScaner_sn" />
              </div>
            </div>

            {/* formularz waga kontrolna */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='scaner'>
                <h5>Waga kontrolna</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleOptionChceckScale}>
                  {optionCheckScales.map((optionCheckScale) => (
                    <option value={optionCheckScale.value}>{optionCheckScale.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {optionCheckScale === "chceckScale" ? (
              <div className='addOption' >
                <div className="row mb-3">
                  <label className="col-sm-3 col-form-label" id="show">
                    <h5>Model wagi kontrolnej</h5>
                  </label>
                  <div class="col-sm-9">
                    <select class="form-select" onChange={handleChceckScale}>
                      {checkScales.map((checkScale) => (
                        <option value={checkScale.value}>{checkScale.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3 col-form-label" id="show">
                    <h5>S/N wagi kontrolnej</h5>
                  </label>
                  <div class="col-sm-9">
                    <input type="group" className="form-control" id="inputMB_sn" />
                  </div>
                </div>
              </div>
            ) : null}

            <h4> Opcjonalne akcesoria</h4>
            <hr />

            {/* formularz sygnalizatora */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>Sygnalizator</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleOptionChange}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* formularz kamery */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>Kamera security</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleOptionChange}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>Kamera VPR</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleOptionChange}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>


            {/* formularz drukarka */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>Model drukarka</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handlePrinterChange}>
                  {printers.map((printer) => (
                    <option value={printer.value}>{printer.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>SN/PO drukarka</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>EAZ drukarka</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>

            {/* formularz terminal */}
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>Model terminala</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleTerminalChange}>
                  {terminals.map((terminal) => (
                    <option value={terminal.value}>{terminal.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>S/N Terminal</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>POS ID terminala</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>

            {/* formularz skaner ręczny */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>Model skanera ręcznego</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>S/N skaner ręczny</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>

            {/* formularz UPS */}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>Model UPS</h5>
              </label>
              <div class="col-sm-9">
                <select class="form-select" onChange={handleUpsChange}>
                  {upses.map((ups) => (
                    <option value={ups.value}>{ups.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" id='finish'>
                <h5>S/N UPS</h5>
              </label>
              <div class="col-sm-9">
                <input type="group" className="form-control" id="inputZLM" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScoX;
