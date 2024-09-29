import React, { useState } from 'react';
import '../Table.scss'


function ScoS() {


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
        { label: "RT Scan RT870", value: "RT870" }
    ];

    const korpusy = [
        { label: "", value: "none" },
        { label: "Pojedynczy (A1 - zasilanie z sufitu)", value: "A1" },
        { label: "Pojedynczy (B1 - zasilanie z podłogi)", value: "B1" },
        { label: "Podwójny (A2 - zasilanie z sufitu)", value: "A2" },
        { label: "Podwójny (B2 - zasilanie z podłogi)", value: "B2" },
        { label: "Ścienny (C - wiszący)", value: "C" }
    ];

    const displays = [
        { label: "", value: "none" },
        { label: "Szyba 22 + drukarka Posnet Thermal HD Online", value: "DS215+PosTHD" },
        { label: "Szyba 27 + drukarka Posnet Thermal HD Online", value: "DS270+PosTHD" },
        { label: "Szyba 32 + drukarka Posnet Thermal HD Online", value: "DS320+PosTHD" },
        { label: "Szyba 22 + drukarka Datec SK1-311", value: "DS215+SK1-311" },
        { label: "Szyba 27 + drukarka Datec SK1-311", value: "DS270+SK1-311" },
        { label: "Szyba 32 + drukarka Datec SK1-311", value: "DS320+SK1-311" },
        { label: "Szyba 22 + drukarka Posnet Thermal HD P (niefiskalna)", value: "DS215+PosNonFisc" },
        { label: "Szyba 27 + drukarka Posnet Thermal HD P (niefiskalna)", value: "DS215+PosNonFisc" },
        { label: "Szyba 32 + drukarka Posnet Thermal HD P (niefiskalna)", value: "DS215+PosNonFisc" },
    ]


    const [motherBoard, setMotherBoard] = useState();
    const [_switche, setSwitche] = useState();
    const [scaner, setScaner] = useState();
    const [korpus, setKorpus] = useState();
    const [display, setDisplay] = useState();


    const handleMotherBoardChange = (e) => {
        setMotherBoard(e.target.value);
    };
    const handleSwitchChange = (e) => {
        setSwitche(e.target.value);
    };
    const handleScanerChange = (e) => {
        setScaner(e.target.value);
    };
    const handleKorpusChange = (e) => {
        setKorpus(e.target.value);
    };
    const handleDisplayChange = (e) => {
        setDisplay(e.target.value);
    };


    return (
        <div className="App">
            <h3>Joy M Creator</h3>


            < div className='container text-center'>

                <h1 > Ponieważ robie to na szybko, pamiętaj o jednej rzeczy, w momencie kiedy mamy do
                    czynienia z kioskami podwójnymi tj. w momencie wybrania wersji korpusu A2, B2, pola z 
                    numerami seryjnymi muszą się podwoić (dwie strony x 2 każdy element składowy). Albo
                    można to wstawiać po przecinku, pytanie czy to nie spowoduje jakiegoś problemu?
                </h1>
                <form>
                    <div className='form-row'>

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
                                <input type="GROUP" className="form-control" id="inputfinish" />
                            </div>
                        </div>

                        {/* Korpus */}
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='ral'>
                                <h5>Wersja korpusu</h5>
                            </label>
                            <div class="col-sm-10">
                                <select class="form-select" onChange={handleKorpusChange}>
                                    {korpusy.map((korpus) => (
                                        <option value={korpus.value}>{korpus.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='ral'>
                                <h5>Wersja Display setu</h5>
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
                                <h5>S/N Zasilacz LRS-35-5</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="group" className="form-control" id="inputScaner_sn" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='scaner_sn'>
                                <h5>S/N Zasilacz LRS-75-12</h5>
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

                        {/* formularz kamery */}

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='finish'>
                                <h5>Podświetlane Logo</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="checkbox" id="USB_EXT" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='finish'>
                                <h5>UPS</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="checkbox" id="USB_EXT" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='finish'>
                                <h5>S/N UPS</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="group" className="form-control" id="inputZLM" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='finish'>
                                <h5>Listwa zasilania</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="checkbox" id="USB_EXT" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='finish'>
                                <h5>Głośnik</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="checkbox" id="USB_EXT" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" id='finish'>
                                <h5>S/N Głosnik</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="group" className="form-control" id="inputZLM" />
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
                                <h5>Model terminala</h5>
                            </label>
                            <div class="col-sm-10">
                                <input type="group" className="form-control" id="inputZLM" />
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
