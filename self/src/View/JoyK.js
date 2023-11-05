import React, { useState } from 'react';
import './Style/ScoS.scss'

import { Header } from '../Components/Header';

function ScoS() {

    const kolory = [
        { label: "", value: "none" },
        { label: "RAL 7024 Szary Grafitowy", value: "-7024" },
        { label: "RAL 9001 Biały Kremowy", value: "-9001" },
        { label: "RAL 9003 Biały Sygnałowy", value: "-9003" },
    ];
    const obudowy = [
        { label: "", value: "none" },
        {label:"Obudowa 22A", value:"-22A"},
        {label:"Obudowa 22B", value:"-22B"},
        {label:"Obudowa 22C", value:"-22C"},
        { label: "Pojedynczy (A1 - zasilanie z sufitu)", value: "-32A1" },
        { label: "Pojedynczy (B1 - zasilanie z podłogi)", value: "-32B1" },
        { label: "Podwójny (A2 - zasilanie z sufitu)", value: "-32A2" },
        { label: "Podwójny (B2 - zasilanie z podłogi)", value: "-32B2" },
        { label: "Ścienny (C - wiszący)", value: "-32C" }
    ];

    const displays = [
        { label: "", value: "none" },
        { label: "Szyba czarna uniwersalna / KFC 22", value: "none" },
        { label: "Szyba biała uniwersalna / BK 22", value: "none" },
        { label: "Szyba uniwersalna / KFC 32", value: "none" },
        { label: "Szyba custom BK 32", value: "none" }
    ]

    const motherBoards = [
        { label: "", value: "none" },
        { label: "AsRock IMB-151", value: "-A2930" },
        { label: "AsRock IMB-157J", value: "-A3455" },
        { label: "AsRock IMB-159NR", value: "-A4120" },
        { label: "Giga IPC", value: "-G5105" },
        { label: "Hansung Epic E41", value: "-E41" },
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
        { label: "RT Scan RT220", value: "RT220" },
        { label: "RT Scan RT240", value: "RT240" }
    ];

    const drukarki = [
        { label: "", value: "none" },
        { label: "Posnet Thermal HD Online", value: "-PHD" },
        { label: "Posnet Therm HD P (paragonowa)", value: "-PHD-non" },
        { label: "Epon TM-T20", value:"-E20"},
        { label: "Epson TM-T88", value:"-E88"},
        { label: "Datec SK1-311", value:"-SK1"},
        { label: "Datec SK1-31 (paragonowa", value:"-SK1-non"}
    ];

    const terminale = [
        { label: "", value: "none" },
        { label: "IPP350", value: "-IPP350" },
        { label: "Lane 3000", value: "-3000" },
        { label: "Lane 5000", value:"-5000"},
        { label: "P400", value:"-P400"},
        { label: "Desk 3200", value:"-3200"},
        { label: "Desk 3500", value:"-3500"}
    ];
   

    const[kolor, setKolor] = useState();
    const [obudowa, setObudowa] = useState();
    const [motherBoard, setMotherBoard] = useState();
    const [_switche, setSwitche] = useState();
    const [scaner, setScaner] = useState();
    const [display, setDisplay] = useState();
    const [drukarka, setDrukarka] = useState();
    const [terminal, setTerminal] = useState();


    const handleKolorChange = (e) =>{
        setKolor(e.target.value);
    };
    const handleObudowaChange = (e) => {
        setObudowa(e.target.value);
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
    const handleDisplayChange = (e) => {
        setDisplay(e.target.value);
    };
    const handleDrukarkachange = (e) => {
        setDrukarka(e.target.value);
    };
    const handleTerminalChange = (e) =>{
        setTerminal(e.target.value);
    }


    return (
        <div className="App">
            <Header />
            <h3>Joy K Creator</h3>


            < div className='container text-center'>
                <form>
                    <div className='form-row'>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='pn'>
                                <h5>Product number</h5>
                            </label>
                            <div class="col-sm-10 PN">
                                <h5> M4B JOY-K{obudowa}-10{motherBoard}{drukarka}{kolor}</h5>
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

                        {/* formularz kolor - TU MAM PROBLEM BO DOBRZE BY BYŁO, ABY BYŁO TO PREDEFINIOWANE PRZEZ NAS
            ALE PÓKI NIE MA OKREŚLONEGO STANDARDU A HANDLOWCY STRZELAJĄ KOLORAMI TO NIECH TO BĘDZIĘ JAKO POLE TEKSTOWE 
            A PÓŹNIEJ ZROBI SIĘ TO JAKO SELECTA */}

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='ral'>
                                <h5>Kolor</h5>
                            </label>
                            <div class="col-sm-10">
                            <select class="form-select" onChange={handleKolorChange}>
                                    {kolory.map((kolor) => (
                                        <option value={kolor.value}>{kolor.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Korpus */}
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='ral'>
                                <h5>Wersja obudowy</h5>
                            </label>
                            <div class="col-sm-10">
                                <select class="form-select" onChange={handleObudowaChange}>
                                    {obudowy.map((obudowa) => (
                                        <option value={obudowa.value}>{obudowa.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='ral'>
                                <h5>Wersja Szyby</h5>
                            </label>
                            <div class="col-sm-10">
                                <select class="form-select" onChange={handleDisplayChange}>
                                    {displays.map((display) => (
                                        <option value={display.value}>{display.label}</option>
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

                        {/** Zasilacze */}

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='scaner_sn'>
                                <h5>S/N Zasilacz LRS-100-12</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="group" className="form-control" id="inputScaner_sn" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='scaner_sn'>
                                <h5>Model zasilacza drukarki</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="group" className="form-control" id="inputScaner_sn" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='scaner_sn'>
                                <h5>S/N zasilacza drukarki</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="group" className="form-control" id="inputScaner_sn" />
                            </div>
                        </div>

                        <h4> Opcjonalne akcesoria</h4>
                        <hr />

                        {/* formularz drukarka */}

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='finish'>
                                <h5>Model drukarka</h5>
                            </label>
                            <div class="col-sm-10">
                            <select class="form-select" onChange={handleDrukarkachange}>
                                    {drukarki.map((drukarka) => (
                                        <option value={drukarka.value}>{drukarka.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='finish'>
                                <h5>PO/SN drukarka</h5>
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
                                <h5>Model terminala</h5>
                            </label>
                            <div class="col-sm-10">
                            <select class="form-select" onChange={handleTerminalChange}>
                                    {terminale.map((terminal) => (
                                        <option value={terminal.value}>{terminal.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

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
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ScoS;
